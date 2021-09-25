import { route } from "next/dist/next-server/server/router";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import {
  googleSignin,
  handleForgetPass,
  handleSignIn,
  handleSignUp,
} from "../../store/authSlice";
import { addUser } from "../../store/slice";
import Card from "../ui/Card";
import classes from "./SignUp.module.css";

function SignIn() {
  const checkboxRef = useRef();
  const emailRef = useRef();
  const [show, setShow] = useState(false);
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const stato = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const forgotRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,

      password: passwordRef.current.value,
    };

    dispatch(handleSignIn({ user, check: checkboxRef.current.checked }));
  }
  function handleResetPassword(e) {
    e.preventDefault();
    dispatch(handleForgetPass(forgotRef.current.value));
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" ref={passwordRef} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "baseline",
          }}
          className={classes.control}
        >
          <input
            style={{ width: "auto", display: "inline" }}
            type="checkbox"
            id="checkbox"
            ref={checkboxRef}
          />
          <label style={{ display: "inline" }} htmlFor="checkbox">
            Remember me
          </label>
        </div>

        <div className={classes.actions}>
          {stato.error && <p style={{ color: "red" }}> {stato.error} </p>}
          {!stato.isLoggedIn && (
            <button>
              {stato.response === "loading" ? "loading..." : "Sign In"}
            </button>
          )}
        </div>
      </form>
      <button onClick={() => dispatch(googleSignin())}>
        Sign in with google
      </button>
      <h4
        onClick={() => setShow(true)}
        style={{
          color: "red",
          fontWeight: "light",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Forgot Password?
      </h4>
      {show && (
        <form
          style={{ textAlign: "center" }}
          className={classes.form}
          onSubmit={handleResetPassword}
        >
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" ref={forgotRef} />
          </div>{" "}
          <div className={classes.actions}>
            (<button>Send Email</button>
          </div>
        </form>
      )}
    </Card>
  );
}

export default SignIn;
