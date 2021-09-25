import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetupList";
import db, { auth } from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import { wrapper } from "../store/store";
// import { addUser } from "../store/slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
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

function HomePage() {
  // const x = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const logedin = useSelector((state) => state.auth.isLoggedIn);
  console.log(logedin);
  const allPosts = useSelector((state) => state.posts.realTimePosts);

  // useEffect(() => {
  //   const q = query(collection(db, "posts"), orderBy("time", "desc"));
  //   const unsub = onSnapshot(q, (snaap) => {
  //     const post = snaap.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     });
  //     setPosts(post);
  //   });
  //   return () => unsub();
  // }, []);
  // useEffect(() => {
  //   async function get() {
  //     const post = await getDocs(collection(db, "posts"), limit(1)).then(
  //       (snap) =>
  //         snap.docs.map((doc) => {
  //           return { ...doc.data(), id: doc.id };
  //         })
  //     );

  //     console.log(post);
  //   }
  //   get();
  // }, []);

  return <>{<MeetUpList posts={allPosts} />}</>;
}
// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   const docs = await getDocs(collection(db, "posts")).then((snapshot) =>
//     snapshot.docs.map((doc) => {
//       return { ...doc.data(), id: doc.id };
//     })
//   );

//   return {
//     props: { meetups: docs },
//     revalidate: 1,
//   };
// });
// export const getStaticProps = async () => {
//   try {
//     const posts = await getDocs(collection(db, "posts")).then((snap) =>
//       snap.docs.map((doc) => {
//         return { ...doc.data(), id: doc.id };
//       })
//     );
//     return {
//       props: { posts: posts },
//       revalidate: 1,
//     };
//   } catch (err) {
//     return {
//       notFound: true,
//     };
//   }
// };
export default HomePage;
