import {
  Box,
  Input,
  FormControl,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  GoArrowLeft,
  GoArrowRight,
  GoArrowSmallLeft,
  GoArrowSmallRight,
} from "react-icons/go";
import { v4 as uuid } from "uuid";
import moment from "moment";
function Chat({ id }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const msgEndRef = useRef();
  console.log(messages);

  useEffect(() => {
    // async function getd() {
    //   const mm = await (
    //     await getDocs(collection(db, `chat/${id}/messages`))
    //   ).docs.map((d) => d.data());
    //   console.log("aa", mm);
    // }
    // getd();
    const q = query(
      collection(db, `chat/${id}/messages`),
      orderBy("time", "asc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const me = snap.docs.map((dot) => dot.data());

      setMessages(me);
    });
    return () => unsub;
  }, [id]);

  function scroll() {
    msgEndRef.current.scrollIntoView();
  }

  useEffect(() => {
    scroll();
  }, [messages]);

  const inputRef = useRef();
  async function handleMessage(e) {
    e.preventDefault();

    await addDoc(collection(db, `chat/${id}/messages`), {
      msg: message,
      user: auth.currentUser.uid,
      time: new Date(),
    });
    setMessage("");
  }
  return (
    <Box boxShadow="xl">
      <Box minH="md" p="10" overflow="auto" maxH="md">
        {messages?.map((message) => {
          return (
            <Flex
              m="2"
              key={uuid()}
              justify={
                message.user === auth.currentUser?.uid
                  ? "flex-end"
                  : "flex-start"
              }
            >
              <Box>
                <Text
                  bg={
                    message.user === auth.currentUser?.uid
                      ? "green.100"
                      : "gray.100"
                  }
                  borderRadius="3xl"
                  borderBottomLeftRadius={
                    message.user === auth.currentUser?.uid ? "3xl" : "0"
                  }
                  borderBottomRightRadius={
                    message.user === auth.currentUser?.uid ? "0" : "3xl"
                  }
                  py="2"
                  px="4"
                  color="black"
                  fontSize="xl"
                  textAlign={
                    message.user === auth.currentUser?.uid ? "right" : "left"
                  }
                  key={uuid()}
                >
                  {message.msg}
                </Text>
                <Text
                  textAlign={
                    message.user === auth.currentUser?.uid ? "right" : "left"
                  }
                  fontSize="sm"
                  fontWeight="light"
                >
                  {" "}
                  {moment(message.time.toDate()).fromNow()}{" "}
                </Text>
              </Box>
            </Flex>
          );
        })}
        <div ref={msgEndRef}></div>
      </Box>
      <form onSubmit={handleMessage}>
        <Flex>
          <FormControl id="email">
            <Input
              size="lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={inputRef}
              borderRightRadius="0"
              id="email"
            />
          </FormControl>
          <IconButton
            type="submit"
            borderLeftRadius="0"
            colorScheme="blue"
            icon={<RiSendPlaneFill />}
            size="lg"
          />
        </Flex>
      </form>
    </Box>
  );
}

export default Chat;
