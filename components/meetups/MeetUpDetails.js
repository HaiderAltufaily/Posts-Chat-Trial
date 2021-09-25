import { Spinner } from "@chakra-ui/spinner";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import useFetch from "../../hooks/useFetch";
import { addReply } from "../../store/repliesSlice";
import { getSingleUser } from "../../store/usersSlice";

import classes from "./MeetUpDetail.module.css";

function MeetUpDetails(props) {
  const [useer, setUser] = useState({});
  const replyRef = useRef();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.users.user);
  const userId = props.user;
  const replyStatus = useSelector((state) => state.replies.addReplyStatus);
  const {
    isLoading,
    error,
    data: user,
  } = useFetch({
    url: `/api/${userId}`,
    method: "get",
  });
  function submitHandler(e) {
    e.preventDefault();
    if (auth.currentUser) {
      const reply = {
        content: replyRef.current.value,
        user: auth.currentUser.uid,
        postId: props.id,
      };
      dispatch(addReply({ reply, postId: props.id }));
    }
  }
  console.log(user);
  return (
    <section className={classes.detail}>
      <address style={{ textAlign: "left" }}>{props.time}</address>
      <h2> {user.username} </h2>
      <h1>{props.title}</h1>
      <img src={props.image}></img>

      <p>{props.description}</p>
      <form className={classes.form} onSubmit={submitHandler}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{ flex: 1, marginRight: "1rem" }}
            className={classes.control}
          >
            <label htmlFor="reply">Post Reply</label>
            <input type="text" required id="reply" ref={replyRef} />
          </div>
          <div className={classes.actions}>
            {replyStatus === "loading" ? (
              <Spinner />
            ) : (
              <button>Submit reply</button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default MeetUpDetails;
