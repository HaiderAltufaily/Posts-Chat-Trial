import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "@firebase/auth";
import { addDoc, doc, getDoc, setDoc, updateDoc } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { auth, db } from "../firebase/firebase";
import { HYDRATE } from "next-redux-wrapper";

export const handleSignUp = createAsyncThunk(
  "handleSignUp/auth",
  async (user) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    await updateProfile(auth.currentUser, {
      displayName: user.username,
    });
    await setDoc(doc(db, "users", response.user.uid), {
      username: auth.currentUser.displayName,
      createdAt: new Date(),
      email: user.email,
      likes: [],
      id: response.user.uid,
    });
    return user.username;
  }
);
export const handleSignIn = createAsyncThunk(
  "handleSignIn/auth",
  async ({ user, checked }) => {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    await updateDoc(doc(db, "users", response.user.uid), {
      isOnline: true,
    });

    // const sentV = await sendEmailVerification(response.user);
  }
);
export const handleForgetPass = createAsyncThunk(
  "handleForgetPass/auth",
  async (email) => {
    await sendPasswordResetEmail(auth, email);
  }
);
export const getCurrent = createAsyncThunk("getCurrent/auth", async () => {
  const user = (await getDoc(doc(db, "users", auth.currentUser.uid))).data();
  console.log("this is someone", user);
  return user;

  // const sentV = await sendEmailVerification(response.user);
});

export const googleSignin = createAsyncThunk(
  "googleSignin/auth",
  async (user) => {
    const googleProvider = new GoogleAuthProvider();
    // const presist = await setPersistence(auth, localStorage);
    const response = await signInWithPopup(auth, googleProvider);
    const docSnap = (await getDoc(doc(db, "users", response.user.uid))).data();
    await updateDoc(doc(db, "users", response.user.uid), {
      isOnline: true,
    });

    if (!docSnap) {
      await setDoc(doc(db, "users", response.user.uid), {
        username: response.user.displayName,
        createdAt: new Date(),
        email: response.user.email,
        likes: [],
      });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    response: "",
    currentUser: "",
    google: { status: "" },
    forgotPass: { status: "" },
    error: "",
    loggedIn: "",
  },
  reducers: {
    loginHandler(state, action) {
      state.isLoggedIn = action.payload;
    },

    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.loggedIn = action.payload;
    },
  },
  extraReducers: {
    // [HYDRATE]: (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.some,
    //   };
    // },
    [handleSignUp.pending]: (state, action) => {
      state.response = "loading";
    },
    [handleSignUp.fulfilled]: (state, action) => {
      state.response = "success";
    },

    [handleSignUp.rejected]: (state, action) => {
      state.response = action.error.message;
    },
    [handleSignIn.pending]: (state, action) => {
      state.response = "loading";
    },
    [handleSignIn.fulfilled]: (state, action) => {
      state.response = "success";
      state.error = "";
    },

    [handleSignIn.rejected]: (state, action) => {
      console.log(action.error.message);
      let error;
      if (action.error.message === "Firebase: Error (auth/user-not-found).") {
        error = "There is no such a user, make sure to use the correct email.";
      } else if (
        action.error.message ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        error = "Too many attempts, try again later.";
      } else if (
        action.error.message === "Firebase: Error (auth/wrong-password)."
      ) {
        error = "Wrong password, try again.";
      }

      state.response = "error";
      state.error = error;
    },
    [googleSignin.pending]: (state, action) => {
      state.google.status = "loading";
    },
    [googleSignin.fulfilled]: (state, action) => {
      state.google.status = "success";
    },

    [googleSignin.rejected]: (state, action) => {
      state.google.status = action.error.message;
    },
    [handleForgetPass.pending]: (state, action) => {
      state.forgotPass.status = "loading";
    },
    [handleForgetPass.fulfilled]: (state, action) => {
      state.forgotPass.status = "success";
    },

    [handleForgetPass.rejected]: (state, action) => {
      state.forgotPass.status = action.error.message;
    },
    [getCurrent.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { loginHandler, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
