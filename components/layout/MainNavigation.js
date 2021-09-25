import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase/firebase";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Posts</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Posts</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Post</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
          <li>
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => console.log("outo"))
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
