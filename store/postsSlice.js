import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
export const submitPost = createAsyncThunk(
  "submitPost/posts",
  async (postData) => {
    return axios.post("/api/new-post", postData);
  }
);
export const deletePost = createAsyncThunk(
  "deletePost/posts",
  async (postId) => {
    return axios.delete(`/api/posts/${postId}`);
  }
);
export const editPost = createAsyncThunk(
  "editPost/posts",
  async ({ postId, formData }) => {
    return axios.put(`/api/posts/${postId}`, formData);
  }
);
export const addLike = createAsyncThunk(
  "addLike/posts",
  async ({ postId, userId }) => {
    return axios.post(`/api/postLikes/${postId}/${userId}`).then((d) => d.data);
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postStatus: "",
    deletePostStatus: "",
    realTimePosts: [],
    likeStatus: "",
    editStatus: "",
    sortValue: "Most Recent",
  },
  reducers: {
    setPosts(state, action) {
      state.realTimePosts = action.payload;
    },
    resetEditStatus(state, action) {
      state.editStatus = "";
    },
    resetPostStatus(state, action) {
      state.postStatus = "";
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
  },
  extraReducers: {
    // [HYDRATE]: (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.some,
    //   };
    // },

    [submitPost.pending]: (state, action) => {
      state.postStatus = "loading";
    },
    [submitPost.fulfilled]: (state, action) => {
      state.postStatus = "success";
    },

    [submitPost.rejected]: (state, action) => {
      state.postStatus = action.error.message;
    },

    [deletePost.pending]: (state, action) => {
      state.deletePostStatus = "loading";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.deletePostStatus = "success";
    },

    [deletePost.rejected]: (state, action) => {
      state.deletePostStatus = action.error.message;
    },
    [addLike.pending]: (state, action) => {
      state.likeStatus = "loading";
    },
    [addLike.fulfilled]: (state, action) => {
      console.log("wewe", action.payload);
      state.likeStatus = "success";
    },

    [addLike.rejected]: (state, action) => {
      state.editStatus = action.error.message;
    },
    [editPost.pending]: (state, action) => {
      state.editStatus = "loading";
    },
    [editPost.fulfilled]: (state, action) => {
      state.editStatus = "success";
    },

    [editPost.rejected]: (state, action) => {
      console.log(action);
      state.likeStatus = action.error.message;
    },
  },
});
export const { setPosts, resetEditStatus, resetPostStatus, setSortValue } =
  postsSlice.actions;
export default postsSlice.reducer;
