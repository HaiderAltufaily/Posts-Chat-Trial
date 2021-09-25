import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../firebase/firebase";

export default async function (req, res) {
  const { user } = req.query;

  try {
    if (req.method === "GET") {
      const document = await getDoc(doc(db, "users", user));

      if (!document.exists()) {
        res.status(404).end();
      } else {
        res.status(200).json(document.data());
      }
    }
  } catch (err) {
    res.status(404);
  }
}
