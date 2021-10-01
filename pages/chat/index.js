import { collection, getDocs, query, where } from "@firebase/firestore";
import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatUsers from "../../components/posts/chatUsers";
import { auth, db } from "../../firebase/firebase";
import { wrapper } from "../../store/store";
import { getAllUsers } from "../../store/usersSlice";

function index() {
  const [projectChat, setProjectChat] = useState([]);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    async function getProjectChat() {
      const q = query(
        collection(db, "chat"),
        where("type", "==", "post"),
        where("users", "array-contains", auth.currentUser?.uid)
      );
      const docs = await (
        await getDocs(q)
      ).docs.map((d) => {
        return { ...d.data(), id: d.id };
      });
      setProjectChat(docs);
    }
    getProjectChat();
  }, []);
  console.log(users);
  return (
    <div>
      {" "}
      <ChatUsers users={users} projectChat={projectChat} />{" "}
    </div>
  );
}

export default index;

// export async function getStaticProps() {
//   try {
//     const users = await axios.get("/api/users").then((d) => d.data);
//     return {
//       props: { users: users },
//     };
//   } catch (err) {
//     return {
//       props: { users: null },
//     };
//   }
// }
