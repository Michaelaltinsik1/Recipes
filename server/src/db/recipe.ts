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
  console.log("Rating:", rating);
  console.log("Id: ", id);
  await RecipeModel.updateOne({ _id: id }, { $push: { ratings: rating } });
};
