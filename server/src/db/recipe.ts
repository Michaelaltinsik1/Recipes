import RecipeModel from "../models/recipe";
export const getRecipes = async () => {
  return await RecipeModel.find();
};

export const getRecipeById = async (id: string) => {
  let foundRecipe = await RecipeModel.findById({ _id: id });
  // let foundRecipe = await RecipeModel.findOne({ _id: id });
  return foundRecipe;
};

export const getRecipesByQuery = async (searchString: Object) => {
  const key = Object.keys(searchString).find((key) => key === "search");
  return await RecipeModel.find({
    title: { $regex: searchString[key], $options: "i" },
  });
};

export const postRecipeById = async (rating: number, id: string) => {
  await RecipeModel.updateOne({ _id: id }, { $push: { ratings: rating } });
};

export const getCommentsById = async (id: string) => {
  return await RecipeModel.findOne(
    { _id: id },
    {
      _id: 0,
      comments: 1,
    }
  );
};

interface CommentType {
  comment: string;
  name: string;
  createdAt: Date;
}
export const postCommentsById = async (id: string, comment: CommentType) => {
  await RecipeModel.updateOne({ _id: id }, { $push: { comments: comment } });
};
