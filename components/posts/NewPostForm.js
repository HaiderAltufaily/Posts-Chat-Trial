import { Spinner } from "@chakra-ui/spinner";
import router from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { resetPostStatus } from "../../store/postsSlice";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewPostForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  // const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const status = useSelector((state) => state.posts.postStatus);
  console.log(status);
  const currentUser = useSelector((state) => state.auth.currentUser);

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    // const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      user: auth.currentUser.uid,
    };

    props.onAddMeetup(postData);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "success") router.push("/");
    return () => dispatch(resetPostStatus());
  }, [status]);

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Post Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Post Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{status === "loading" ? <Spinner /> : "Add Post"}</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPostForm;
