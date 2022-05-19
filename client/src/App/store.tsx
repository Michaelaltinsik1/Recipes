import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categoriesSlice from "../features/categories/categoriesSlice";
import recipesSlice from "../features/recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof store.getState>

// export const store = configureStore({
//   reducer: {
//     recipes: recipesReducer,
//     categories: categoriesReducer
//   },
// })
