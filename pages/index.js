import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect } from "react";
import MeetUpList from "../components/meetups/MeetupList";
import db from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import { wrapper } from "../store/store";
// import { addUser } from "../store/slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// const meetUps = [
//   {
//     id: "m1",
//     title: "num1",
//     image:
//       "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Feeling-Sad-Whatsapp-DP-Pics-Download-Free-300x169.jpg",
//     address: "some address",
//     description: "first MeetUp",
//   },
//   {
//     id: "m2",
//     title: "num2",
//     image:
//       "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Feeling-Sad-Whatsapp-DP-Pics-Download-Free-300x169.jpg",
//     address: "some address",
//     description: "second MeetUp",
//   },
// ];

function HomePage({ meetups }) {
  const x = useSelector((state) => state.users);
  console.log(x);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(addUser());
  //   }, []);
  return (
    <>
      <MeetUpList meetups={meetups} />{" "}
    </>
  );
}
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const docs = await getDocs(collection(db, "meetups")).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    })
  );
  return {
    props: { meetups: docs },
    revalidate: 1,
  };
});
export default HomePage;
