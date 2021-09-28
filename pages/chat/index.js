import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatUsers from "../../components/posts/chatUsers";
import { wrapper } from "../../store/store";
import { getAllUsers } from "../../store/usersSlice";

function index() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  console.log(users);
  return (
    <div>
      {" "}
      <ChatUsers users={users} />{" "}
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
