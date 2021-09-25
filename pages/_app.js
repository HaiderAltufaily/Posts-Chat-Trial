import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { wrapper } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { getCurrent, loginHandler, setCurrentUser } from "../store/authSlice";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { addLike, setPosts } from "../store/postsSlice";
import moment from "moment";
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginHandler(true));
        onSnapshot(doc(db, "users", user.uid), (snap) =>
          dispatch(setCurrentUser(snap.data()))
        );
      }
    });

    return () => unsub();
  }, []);
  useEffect(() => {}, []);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("time", "desc"));
    const unsub = onSnapshot(q, (snpa) => {
      const posts = snpa.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
          time: moment(doc.data().time.toDate()).calendar(),
        };
      });
      dispatch(setPosts(posts));
      // if(auth.currentUser)
      // dispatch(addLike("awda"));
    });
    return () => unsub();
  });
  // useEffect(() => {

  //   const unsub = onSnapshot(
  //     doc(db, "users", auth.currentUser?.uid),
  //     (snap) => {
  //       dispatch(setCurrentUser(snap.data()));
  //     }
  //   );
  //   if (!auth.currentUser) {
  //     dispatch(setCurrentUser(null));
  //   }
  //   return () => unsub();
  // }, []);

  // console.log(aaa.isLoggedIn);
  // console.log(auth.currentUser);

  return (
    <ChakraProvider>
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
