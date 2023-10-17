import { createSlice } from "@reduxjs/toolkit";

export const postsslice = createSlice({
  name: "posts",
  initialState :{
    items : []
  },
  reducers: {
    addPost: function(state , action) {
      state.items.push(action.payload)
      window.localStorage.setItem("post", action.payload)
    },
    deletePost : (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updatePost: (state, action) => {
      state.items.map((item)=> {
        if(item.id === action.payload.id) {
          item.title = action.payload.title
          item.description = action.payload.description
        }
      })
    }
  }
})
export const {addPost, deletePost, updatePost} = postsslice.actions
export default postsslice.reducer