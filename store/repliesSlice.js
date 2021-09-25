import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addReply = createAsyncThunk(
  "addReply/replies",
  async ({ postId, reply }) => {
    console.log(reply);
    return axios.post(`/api/replies/${postId}`, reply);
  }
);
const repliesSlice = createSlice({
  name: "replies",
  initialState: {
    addReplyStatus: "",
  },
  reducers: {},
  extraReducers: {
    [addReply.pending]: (state, action) => {
      state.addReplyStatus = "loading";
    },
    [addReply.fulfilled]: (state, action) => {
      state.addReplyStatus = "success";
    },

    [addReply.rejected]: (state, action) => {
      state.addReplyStatus = action.error.message;
    },
  },
});
export default repliesSlice.reducer;
