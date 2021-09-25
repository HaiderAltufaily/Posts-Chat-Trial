import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import axios from "axios";
import moment from "moment";
import React from "react";
import Edit from "../../components/meetups/Edit";
import { db } from "../../firebase/firebase";

function EditPage({ post }) {
  return (
    <div>
      <Edit post={post} />
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
export async function getStaticProps(context) {
  const postId = context.params.postId;
  const docs = (await getDoc(doc(db, "posts", postId))).data();
  const newDoc = {
    ...docs,
    time: moment(docs.time.toDate()).calendar(),
    id: postId,
  };
  return {
    props: { post: newDoc },
    revalidate: 1,
  };
}
export default EditPage;
