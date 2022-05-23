import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRating } from "../../API/recipes";

interface stateType {
  isVoted: boolean;
}
export const initialState: stateType = {
  isVoted: false,
};

interface postRatingType {
  id: string;
  rating: number;
}

export const postRatingToAPI = createAsyncThunk(
  "ratings/postRatingById",
  async ({ id, rating }: postRatingType) => {
    await postRating(id, rating);
  }
);

export const ratingSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    resetInitState: (state) => {
      state.isVoted = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postRatingToAPI.pending, (state, action) => {
      state.isVoted = true;
    });
    builder.addCase(postRatingToAPI.rejected, (state, action) => {
      state.isVoted = false;
    });
  },
});

export default ratingSlice.reducer;
