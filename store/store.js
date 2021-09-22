import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice";
import { createWrapper } from "next-redux-wrapper";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
// const makeStore =wrapMakeStore (() =>
//   configureStore({
//     reducer: {
//       users: usersSlice,
//     },
//   }));
const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: { users: usersSlice },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ["my.subtree"],
        })
      ),
  })
);
export const wrapper = createWrapper(makeStore);
