import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categories/categoriesSlice";
import commentsSlice from "../features/comments/commentsSlice";
import ratingSlice from "../features/ratings/ratingSlice";
import recipesSlice from "../features/recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    categories: categoriesSlice,
    ratings: ratingSlice,
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
