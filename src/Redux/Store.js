import { configureStore } from "@reduxjs/toolkit";
import  postsslice  from "./PostsSlice";

export const store = configureStore({
  reducer:{
    posts : postsslice
  },
})