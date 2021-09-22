import { addDoc, collection, getDocs } from "@firebase/firestore";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const usersSLice = createSlice({
  name: "some",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.some,
      };
    },
  },
});
export const { addUser } = usersSLice.actions;

export default usersSLice.reducer;
