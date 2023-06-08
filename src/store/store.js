import { configureStore } from "@reduxjs/toolkit";

//slices
import sliceBlog from "./sliceBlog/sliceBlog";
import sliceTitle from "./slices/sliceTitle";

const store = configureStore({
  reducer: {
    blogPage: sliceBlog,
    titlePage: sliceTitle,
  },
});

export default store;
