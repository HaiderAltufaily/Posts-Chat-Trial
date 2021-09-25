import { sendEmailVerification } from "@firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import { handleSignUp } from "../../store/authSlice";
import Card from "../ui/Card";
import classes from "./SignUp.module.css";

function SignUp() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const stato = useSelector((state) => state.auth);
  function submitHandler(e) {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(handleSignUp(user));
  }
  const router = useRouter();
  useEffect(() => {
    if (auth.currentUser?.emailVerified) router.push("/");
  }, [auth.currentUser?.emailVerified, auth.currentUser]);
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" ref={usernameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" ref={passwordRef} />
        </div>

        <div className={classes.actions}>
          {!auth.currentUser && (
            <button>
              {stato.response === "loading" ? "loading..." : "Sign up"}
            </button>
          )}
        </div>
      </form>
      {auth.currentUser && auth.currentUser?.emailVerified === false && (
        <button
          onClick={() =>
            sendEmailVerification(auth.currentUser).then(() => {
              console.log("sent success");
            })
          }
        >
          {" "}
          Send Verification Email
        </button>
      )}
    </Card>
  );
}

export default SignUp;
