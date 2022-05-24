import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentType } from "../../types/CommentType";
import { postComments, fetchCommentsById } from "../../API/recipes";

interface initStateCommentType {
  comments: Array<CommentType> | [];
  isFormSent: boolean;
}

export const initialState: initStateCommentType = {
  comments: [],
  isFormSent: false,
};

interface postCommentType {
  id: string;
  comment: CommentType;
}
export const postCommentByIdToAPI = createAsyncThunk(
  "comments/postCommentById",
  async ({ id, comment }: postCommentType) => {
    await postComments(id, comment);
  }
);

export const fetchCommentByIdToAPI = createAsyncThunk(
  "comments/fetchCommentById",
  async (id: string) => {
    const response = await fetchCommentsById(id);
    return response.data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    resetFormState: (state) => {
      state.isFormSent = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postCommentByIdToAPI.pending, (state) => {
      state.isFormSent = true;
    });
    builder.addCase(postCommentByIdToAPI.rejected, (state) => {
      state.isFormSent = false;
    });
    builder.addCase(fetchCommentByIdToAPI.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
    });
    builder.addCase(fetchCommentByIdToAPI.rejected, (state) => {
      state.comments = [];
    });
  },
});

export default commentsSlice.reducer;
