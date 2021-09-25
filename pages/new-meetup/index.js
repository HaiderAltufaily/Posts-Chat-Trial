import React, { useEffect } from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slice";
import { wrapper } from "../../store/store";
import { addDoc, collection } from "@firebase/firestore";
import db from "../../firebase/firebase";
import { submitPost } from "../../store/postsSlice";

function NewMeetPage(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  async function addMeetHandler(formData) {
    /******First Method******/
    // const response = await fetch("/api/new-meetup", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await response.json();
    // router.replace("/");
    // /******Second Method******/
    // await addDoc(collection(db, "meetups"), formData);
    // router.replace("/");
    console.log(formData);
    dispatch(submitPost(formData));
  }
  return (
    <div>
      {" "}
      <h1> {props.users} </h1> <NewMeetUpForm onAddMeetup={addMeetHandler} />
    </div>
  );
}

export default NewMeetPage;
