import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";
import { auth, db } from "../../firebase/firebase";
import { Spinner } from "@chakra-ui/spinner";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import classes from "./NewMeetupForm.module.css";
import moment from "moment";
function Reply({ reply }) {
  const [user, setUser] = useState({});
  const [editValue, setEditValue] = useState(reply.content);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    async function getUser() {
      const x = await fetch(`/api/${reply.user}`);
      const response = await x.json();
      if (isMounted) setUser(response);
    }
    getUser();
    return () => {
      isMounted = false;
    };
  }, []);

  async function handleDelete() {
    await axios
      .delete(`/api/replies/${reply.id}/${reply.postId}`)
      .then((d) => console.log("aaa", d.data))
      .catch((err) => console.log(err));
    // const q = query(
    //   collection(db, "posts"),
    //   where("replies", "array-contains", reply)
    // );
    // const d = await getDocs(q);
    // const data = await d.docs.map((doc) => doc.data());
    // console.log("aa", data);

    // const d = (
    //   await getDoc(
    //     doc(db, "message/SjVjF3dU5YoDKIAqTPYD/replies/q55nIyHOZUBUp089RUKM")
    //   )
    // ).data();
    // console.log(d);
    // await addDoc(collection(db, `posts/${reply.postId}/reply`), reply);
  }

  async function handleEdit(e) {
    e.preventDefault();
    setLoading(true);
    await axios
      .put(`/api/replies/${reply.id}/${reply.postId}`, { content: editValue })
      .then((d) => console.log("yess", d.data));
    setLoading(false);
    if (!loading) setEdit(false);
  }
  return (
    <Box
      bg={auth.currentUser?.uid === reply.user ? "gray.200" : "gray.100"}
      my="3"
      p="3"
    >
      {auth.currentUser?.uid === reply.user && (
        <Flex justify="space-between">
          <IconButton
            size="sm"
            onClick={() => setEdit(true)}
            textAlign="left"
            icon={<AiFillEdit size="23" />}
          />

          <IconButton size="sm" onClick={handleDelete} icon={<CloseIcon />} />
        </Flex>
      )}
      {edit || (
        <div>
          <Text textAlign="right">
            {" "}
            {moment(reply.time.toDate()).fromNow()}{" "}
          </Text>
          <Text> {user.username} </Text>
          <Text fontWeight="semibold" fontSize="23">
            {" "}
            {reply.content}{" "}
          </Text>
        </div>
      )}
      {edit && (
        <form className={classes.form} onSubmit={handleEdit}>
          <div className={classes.control}>
            <label htmlFor="title">Edit Reply</label>
            <input
              style={{ fontWeight: "bold" }}
              value={editValue}
              type="text"
              required
              id="title"
              onChange={(e) => setEditValue(e.target.value)}
            />
          </div>
          <div className={classes.actions}>
            <button disabled={loading}>
              {loading ? <Spinner /> : "Submit Changes"}
            </button>
          </div>
        </form>
      )}
    </Box>
  );
}

export default Reply;
