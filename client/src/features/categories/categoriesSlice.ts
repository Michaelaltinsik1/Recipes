import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../../API/categoris";

export const initialState = {
  categories: [],
};

export const fetchCategoriesFromAPI = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesFromAPI.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
