import { addDoc, collection } from "@firebase/firestore";
import db from "../../firebase/firebase";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    await addDoc(collection(db, "meetups"), data);
    res.status(201).json({ message: "Added successfully" });
  }
}
export default handler;
