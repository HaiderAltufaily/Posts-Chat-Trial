import { collection, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";

export default async function (req, res) {
  try {
    if (req.method === "GET") {
      const users = await (
        await getDocs(collection(db, "users"))
      ).docs.map((dot) => dot.data());

      res.status(200).json(users);
    }
  } catch (err) {
    res.status(404);
  }
}
