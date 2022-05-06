import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const fetchCategories = async () => {
  console.log("categories");
  return await axios.get("/categories");
};
export const fetchRecipesByCategory = async (category: string) => {
  console.log("RecipesBycategories");
  return await axios.get(`/categories/${category}/recipes`);
};

export const fetchRecipesByCategoryAndQuery = async (
  category: string,
  query: string
) => {
  console.log(
    `http://localhost:3000/categories/${category}/recipes?search=${query}`
  );
  return await axios.get(
    `http://localhost:3000/categories/${category}/recipes?search=${query}`
  );
};
