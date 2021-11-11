import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import Chat from "../../components/posts/Chat";
import chatUsers from "../../components/posts/chatUsers";
import { db } from "../../firebase/firebase";

function chatId() {
  const router = useRouter();
  const id = router.query.chatId;
  return (
    <div>
      {" "}
      <Chat id={id} />
    </div>
  );
}
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }
// export async function getStaticProps(context) {
//   const id = context.params.chatId;
//   const chatRoom = (
//     await getDocs(collection(db, `chat/${id}/messages`))
//   ).docs.map((d) => d.data());

//   return {
//     props: { id: id, chatRoom: chatRoom },
//   };
// }
export default chatId;
