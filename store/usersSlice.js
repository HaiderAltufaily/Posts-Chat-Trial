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
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    return data;
  }
);
export const getAllUsers = createAsyncThunk("getAllUsers/users", async () => {
  return axios.get("/api/users").then((d) => d.data);
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    getUserStatus: "",
    user: "",
    users: [],
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
    [getAllUsers.pending]: (state, action) => {
      state.getUserStatus = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.getUserStatus = "success";
      state.users = action.payload;
    },

    [getAllUsers.rejected]: (state, action) => {
      state.getUserStatus = action.error.message;
    },
  },
});
export default usersSlice.reducer;
