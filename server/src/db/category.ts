import RecipeModel from "../models/recipe";
export const getCategories = async () => {
  return await RecipeModel.find(
    {},
    {
      _id: 0,
      categories: 1,
    }
  );
};

export const getRecipesByCategory = async (categoryName: string) => {
  let foundRecipes = await RecipeModel.find({
    categories: new RegExp("^" + categoryName + "$", "i"),
  });
  return foundRecipes;
};
export const getRecipesByCategoryAndSearch = async (
  searchString: string,
  categoryName: string
) => {
  let foundRecipes = await RecipeModel.find({
    $and: [
      { categories: new RegExp("^" + categoryName + "$", "i") },
      { title: { $regex: searchString, $options: "i" } },
    ],
  });
  return foundRecipes;
};
