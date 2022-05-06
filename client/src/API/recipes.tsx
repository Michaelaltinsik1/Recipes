import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const fetchRecipes = async () => {
  console.log("recipes");
  return await axios.get("/recipes");
};
export const fetchRecipesByQuery = async (query: string) => {
  console.log("recipes by query");
  return await axios.get(`/recipes?search=${query}`);
};

export const fetchRecipesById = async (id: string) => {
  console.log("recipes by id", id);
  return await axios.get(`/recipes/${id}`);
};
