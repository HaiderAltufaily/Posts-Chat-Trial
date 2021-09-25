import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import { v4 as uuid } from "uuid";
export default async function handler(req, res) {
  const { postId } = req.query;
  const post = postId[0];
  //   res.status(200).json("hey there");
  if (req.method === "POST") {
    const reply = req.body;

    const replyData = {
      content: reply.content,
      user: reply.user,
      id: uuid(),
      postId: reply.postId,
      time: new Date(),
    };
    try {
      await updateDoc(doc(db, "posts", post), {
        replies: arrayUnion(replyData),
      });
      res.status(200).json("success");
    } catch (err) {
      console.log("err", err);
      res.status(400).end();
    }
  }
  if (req.method === "DELETE") {
    const { postId } = req.query;
    const replyId = postId[0];
    const post = postId[1];
    // const replyUser = query.postId[2];
    // const reply = {
    //   content:replyContent,
    //   user:replyUser,

    // }

    try {
      const postDoc = (await getDoc(doc(db, "posts", post))).data();
      const reply = postDoc.replies.find((rep) => rep.id === replyId);
      await updateDoc(doc(db, "posts", post), {
        replies: arrayRemove(reply),
      });
    } catch (err) {
      res.status(402).end();
    }
  }
  if (req.method === "PUT") {
    const reply = req.body;
    const { postId } = req.query;
    const replyId = postId[0];
    const post = postId[1];

    try {
      const postDoc = (await getDoc(doc(db, "posts", post))).data().replies;
      const newReplies = postDoc.map((repl) => {
        if (repl.id === replyId) {
          return { ...repl, content: reply.content };
        } else return repl;
      });
      await updateDoc(doc(db, "posts", post), {
        replies: newReplies,
      });
      res.status(200).json(newReplies);
    } catch (err) {
      res.status(404).end();
    }
  }
}
