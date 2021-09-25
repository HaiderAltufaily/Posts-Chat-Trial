import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const getUser = createAsyncThunk("getUser/posts", async (user) => {
  console.log(user);
  const response = await axios.get(`/api/${user}`);

  const data = await response.data;
  return data;
});
export const getSingleUser = createAsyncThunk(
  "getSingleUser/users",
  async (id) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    getUserStatus: "",
    user: "",
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
    [getSingleUser.pending]: (state, action) => {
      state.getUserStatus = "loading";
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.getUserStatus = "success";
      state.user = action.payload;
    },

    [getSingleUser.rejected]: (state, action) => {
      state.getUserStatus = action.error.message;
    },
  },
});
export default usersSlice.reducer;
