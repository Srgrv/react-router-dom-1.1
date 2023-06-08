import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsAsync = createAsyncThunk(
  "blogPage/getPostsAsync",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    return response.data;
  }
);

const sliceBlog = createSlice({
  name: "blogPage",
  initialState: {
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ],
  },
  extraReducers: (build) => {
    build.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default sliceBlog.reducer;
