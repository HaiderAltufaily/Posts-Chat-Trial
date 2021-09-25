import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "@firebase/firestore";
import { db } from "../../firebase/firebase";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      await addDoc(collection(db, "posts"), {
        ...data,
        time: new Date(),
        likes: 0,
        replies: [  ],
      });
      res.status(200).json("added");
    } catch (err) {
      res.status(404).end();
    }
  }
  // if (req.method === "GET") {
  //   try {
  //     const data = await getDocs(collection(db, "posts")).then((posts) =>
  //       posts.docs.map((doc) => doc.data())
  //     );
  //     res.status(200).json(data);
  //   } catch (err) {
  //     res.status(400).end();
  //   }
  // }
}
export default handler;
