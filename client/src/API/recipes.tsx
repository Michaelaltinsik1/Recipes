import { CommentType } from "../types/CommentType";

import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchRecipes = async () => {
  console.log("recipes");

  return await axios.get("/recipes");
};
export const fetchRecipesByQuery = async (query: string) => {
  // console.log("recipes by query");
  return await axios.get(`/recipes?search=${query}`);
};

export const fetchRecipesById = async (id: string) => {
  // console.log("recipes by id", id);
  return await axios.get(`/recipes/${id}`);
};

export const postRating = async (id: string, rating: number) => {
  // console.log("recipes by id", id);
  return await axios.post(`/recipes/${id}/rating`, {
    newRating: rating,
  });
};

export const fetchCommentsById = async (id: string) => {
  return await axios.get(`/recipes/${id}/comments`);
};

export const postComments = async (id: string, comments: CommentType) => {
  console.log(comments);
  await axios.post(`/recipes/${id}/comments`, {
    comments: comments,
  });
};
