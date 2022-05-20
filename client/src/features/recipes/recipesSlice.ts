import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, fetchRecipesByQuery } from "../../API/recipes";
import {
  fetchRecipesByCategory,
  fetchRecipesByCategoryAndQuery,
} from "../../API/categoris";

const initialState = {
  recipes: [],
};

export const fetchRecipesFromAPI = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetchRecipes();
    return response.data;
  }
);

export const fetchRecipesByCategoryFromAPI = createAsyncThunk(
  "recipes/fetchRecipesByCategory",
  async (category: string) => {
    const response = await fetchRecipesByCategory(category);
    return response.data;
  }
);

export const fetchRecipesByQueryFromAPI = createAsyncThunk(
  "recipes/fetchRecipesByQuery",
  async (query: string) => {
    const response = await fetchRecipesByQuery(query);
    return response.data;
  }
);
interface fetchTypes {
  queryString: string;
  category: string;
}
export const fetchRecipesByCategoryAndQueryFromApi = createAsyncThunk(
  "recipes/fetchRecipesByCategoryAndQuery",
  async ({ queryString, category }: fetchTypes) => {
    const response = await fetchRecipesByCategoryAndQuery(
      category,
      queryString
    );
    return response.data;
  }
);
export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipesFromAPI.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
    builder.addCase(fetchRecipesByQueryFromAPI.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
    builder.addCase(
      fetchRecipesByCategoryFromAPI.fulfilled,
      (state, action) => {
        state.recipes = action.payload;
      }
    );
    builder.addCase(
      fetchRecipesByCategoryAndQueryFromApi.fulfilled,
      (state, action) => {
        state.recipes = action.payload;
      }
    );
  },
});

export default recipesSlice.reducer;
