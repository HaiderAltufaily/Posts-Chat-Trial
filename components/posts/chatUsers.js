import { Stack, Flex, Icon, Text } from "@chakra-ui/react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import axios from "axios";
import router from "next/router";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { auth, db } from "../../firebase/firebase";

function ChatUsers({ users }) {
  async function handleUser(userId) {
    console.log(userId);
    const docRef = query(
      collection(db, "chat"),
      where("users", "==", [auth.currentUser?.uid, userId])
    );
    const docRef2 = query(
      collection(db, "chat"),
      where("users", "==", [userId, auth.currentUser?.uid])
    );
    const x = await (
      await getDocs(docRef)
    ).docs.map((d) => {
      return { ...d.data(), id: d.id };
    });
    const y = await (
      await getDocs(docRef2)
    ).docs.map((d) => {
      return { ...d.data(), id: d.id };
    });

    if (x.length === 0 && y.length === 0) {
      await addDoc(collection(db, "chat"), {
        users: [auth.currentUser?.uid, userId],
      });
    } else {
      if (x.length > 0) {
        router.push(`/chat/${x[0].id}`);
      } else if (y.length > 0) {
        router.push(`/chat/${y[0].id}`);
      }
    }
  }
  return (
    <Stack bg="blackAlpha.100" boxShadow="lg" p="5" spacing="5">
      {" "}
      {users.map((user) => {
        if (user.id !== auth.currentUser?.uid)
          return (
            <Flex
              p="3"
              borderBottom="1px solid gray"
              align="baseline"
              key={user.id}
              _hover={{ background: "gray.200" }}
              cursor="pointer"
              onClick={() => handleUser(user.id)}
            >
              <Text as={"h1"} fontSize="xl">
                {user.username}
              </Text>
              <Icon
                mx="3"
                w="3"
                h="3"
                as={FaCircle}
                color={user.isOnline ? "green" : "red"}
              />
            </Flex>
          );
      })}{" "}
    </Stack>
  );
}

export default ChatUsers;
