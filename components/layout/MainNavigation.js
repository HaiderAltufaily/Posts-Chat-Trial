import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { signOut, updateCurrentUser, updateProfile } from "@firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { addDoc, doc, updateDoc } from "@firebase/firestore";
import { Button } from "@chakra-ui/button";
import router from "next/router";
function MainNavigation() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const usernameRef = useRef();

  async function handleChangeName(e) {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", auth.currentUser?.uid), {
        username: usernameRef.current.value,
      });
      await updateProfile(auth.currentUser, {
        displayName: usernameRef.current.value,
      });
    } catch (err) {
      err;
    }
  }

  return (
    <header className={classes.header}>
      {auth.currentUser && (
        <div className={classes.logo}>Welcome {currentUser?.username}</div>
      )}
      {auth.currentUser && (
        <div>
          <form
            onSubmit={handleChangeName}
            style={{ color: "white" }}
            className={classes.form}
          >
            <div className={classes.control}>
              {/* <label htmlFor="title">Post Title</label> */}
              <input type="text" required id="title" ref={usernameRef} />
            </div>
            <div className={classes.actions}>
              <button>Change Username</button>
            </div>
          </form>
        </div>
      )}
      <nav>
        <ul>
          <li>
            <Link href="/">All Posts</Link>
          </li>
          <li>
            <Link href="/new-post">Add New Post</Link>
          </li>
          <li>
            <Link href="/chat">Chat</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>

          <li>
            <button
              style={{ color: "white", fontSize: "20px" }}
              onClick={async () => {
                await updateDoc(doc(db, "users", auth.currentUser?.uid), {
                  isOnline: false,
                });
                signOut(auth)
                  .then((d) => {
                    router.push("/signin");
                  })
                  .catch((err) => {});
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
