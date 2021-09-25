import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "@firebase/firestore";
import { auth, db } from "../../../firebase/firebase";

export default async function handler(req, res) {
  const query = req.query;
  const userId = query.postId[1];
  const postId = query.postId[0];
  // res.status(200).json({ userId, postId });
  if (req.method === "POST") {
    try {
      const currentUser = (await getDoc(doc(db, "users", userId))).data();

      if (!currentUser.likes.includes(postId)) {
        await updateDoc(doc(db, "users", userId), {
          likes: arrayUnion(postId),
        });
        await updateDoc(doc(db, "posts", postId), {
          likes: increment(1),
        });
        res.status(200).json("success");
      } else {
        await updateDoc(doc(db, "users", userId), {
          likes: arrayRemove(postId),
        });
        await updateDoc(doc(db, "posts", postId), {
          likes: increment(-1),
        });
        res.status(200).json("success");
      }
    } catch (err) {
      res.status(404).end();
    }
  }
}
