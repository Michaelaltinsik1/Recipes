import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchCategories = async () => {
  // console.log("categories");
  return await axios.get("/categories");
};
export const fetchRecipesByCategory = async (category: string) => {
  // console.log("RecipesBycategories");
  return await axios.get(`/categories/${category}/recipes`);
};

export const fetchRecipesByCategoryAndQuery = async (
  category: string,
  query: string
) => {
  // console.log(
  //   `http://localhost:3000/categories/${category}/recipes?search=${query}`
  // );
  return await axios.get(
    `http://localhost:3000/categories/${category}/recipes?search=${query}`
  );
};
