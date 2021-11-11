import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import { createWrapper } from "next-redux-wrapper";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import authSlice from "./authSlice";
import postsSlice from "./postsSlice";
import repliesSlice from "./repliesSlice";
const makeStore = () =>
  configureStore({
    reducer: {
      users: usersSlice,
      auth: authSlice,
      posts: postsSlice,
      replies: repliesSlice,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
        //   ignoredActions: [
        //     "submitPost/posts/fulfilled",
        //     "getCurrent/auth/fulfilled",
        //     "posts/setPosts",
        //     "posts/getPosts",
        //     "getAllPosts/posts/fulfilled",
        //     "getSingleUser/users/fulfilled",
        //     "getSingleUser/users/pending",
        //     "auth/setCurrentUser",
        //     "auth/setCurrentUser",
        //     "addLike/posts/fulfilled",
        //     "addLike/posts/pending",
        //   ],
        // },
      });
    },
  });
// const makeStore = wrapMakeStore(() =>
//   configureStore({
//     reducer: { users: usersSlice, auth: authSlice, posts: postsSlice },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({ serializableCheck: false }).prepend(
//         nextReduxCookieMiddleware({
//           subtrees: ["my.subtree"],
//         })
//       ),
//   })
// );
export const wrapper = createWrapper(makeStore);
