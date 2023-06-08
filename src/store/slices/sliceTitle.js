import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostAsync = createAsyncThunk(
  "title/getPostAsync",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  }
);

const sliceTitle = createSlice({
  name: "title",
  initialState: {
    post: null,
  },
  extraReducers: (build) => {
    build.addCase(getPostAsync.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

export default sliceTitle.reducer;
