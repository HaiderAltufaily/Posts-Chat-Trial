import {
  collection,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
} from "@firebase/firestore";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostDetails from "../../components/posts/PostDetails";

import ReplyList from "../../components/posts/ReplyList";
import db from "../../firebase/firebase";
import { loginHandler } from "../../store/authSlice";
import { wrapper } from "../../store/store";
import { getSingleUser } from "../../store/usersSlice";
function MeetUpDetailsPage({ posts }) {
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "posts", posts.id), (snapshot) => {
      setReplies(snapshot.data().replies);
    });
    return () => unsub();
  }, []);
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.posts);
  return (
    <div>
      {posts && (
        <PostDetails
          title={posts.title}
          time={posts.time}
          description={posts.description}
          image={posts.image}
          user={posts.user}
          id={posts.id}
        />
      )}
      <ReplyList replies={replies} />
    </div>
  );
}
export async function getStaticPaths() {
  const docs = await getDocs(collection(db, "posts"));
  const posts = docs.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return {
    fallback: true,
    paths: posts.map((post) => {
      return { params: { postId: post.id } };
    }),
  };
}
export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const postId = context.params.postId;
    const docc = await getDoc(doc(db, "posts", postId)).then((data) => {
      return { ...data.data(), id: data.id };
    });
    const newDoc = { ...docc, time: moment(docc.time.toDate()).calendar() };
    const dod = newDoc.replies.map((reply) => {
      return { ...reply, time: moment(reply.time.toDate()).fromNow() };
    });

    const newDoo = { ...newDoc, replies: dod };

    return {
      props: {
        posts: newDoo,
      },
    };
  }
);

export default MeetUpDetailsPage;
