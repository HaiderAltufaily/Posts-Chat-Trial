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
import db, { auth } from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import { wrapper } from "../store/store";
// import { addUser } from "../store/slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import PostList from "../components/posts/PostList";
import moment from "moment";
import { loginHandler, setCurrentUser } from "../store/authSlice";
import { getAllUsers } from "../store/usersSlice";
import { onAuthStateChanged } from "@firebase/auth";
import { setPosts } from "../store/postsSlice";
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
function HomePage({ post, users }) {
  // console.log("post", post);
  const dispatch = useDispatch();
  const y = useSelector((state) => state.auth);
  // console.log(y);
  const x = useSelector((state) => state.posts.realTimePosts);
  const [posts, changePosts] = useState([]);
  // console.log("new", x);
  const sortBy = useSelector((state) => state.posts.sortValue);

  const sort = sortBy === "Mostly Liked" ? "likes" : "time";
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy(sort, "desc"));
    const unsub = onSnapshot(q, (snpa) => {
      const posts = snpa.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
          time: moment(doc.data().time.toDate()).calendar(),
        };
      });
      dispatch(getAllUsers());
      changePosts(posts);
      // if(auth.currentUser)
      // dispatch(addLike("awda"));
    });
    return () => unsub();
  }, [sort]);
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
  return (
    <>{<PostList users={users} posts={posts.length > 0 ? posts : post} />}</>
  );
}
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const q = query(collection(db, "posts"), orderBy("time", "desc"));
  const docs = await getDocs(q).then((snapshot) =>
    snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
        time: moment(doc.data().time.toDate()).calendar(),
        replies: [],
      };
    })
  );
  const users = await (
    await getDocs(collection(db, "users"))
  ).docs.map((d) => {
    return { ...d.data(), createdAt: "" };
  });

  return {
    props: { post: docs, users: users },
    revalidate: 1,
  };
});
// HomePage.getInitialProps = wrapper.getInitialPageProps(
//   (store) =>
//     async ({ req, res }) => {
//       const q = query(collection(db, "posts"));
//       const unsub = await onSnapshot(q, (snpa) => {
//         const posts = snpa.docs.map((doc) => {
//           return {
//             ...doc.data(),
//             id: doc.id,
//             time: moment(doc.data().time.toDate()).calendar(),
//           };
//         });
//         store.dispatch(setPosts(posts));
//       });
//       const doo = await (
//         await getDocs(collection(db, "posts"))
//       ).docs.map((d) => {
//         return { ...d.data(), time: "hello" };
//       });
//       store.dispatch(setPosts(doo));
//     }
// );
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
