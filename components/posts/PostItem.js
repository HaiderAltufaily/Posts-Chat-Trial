import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { arrayUnion, doc, getDoc, updateDoc } from "@firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import { IconButton, Flex, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addLike, deletePost } from "../../store/postsSlice";
import moment from "moment";
import { getSingleUser } from "../../store/usersSlice";
import { throttle } from "lodash";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLoading,
  AiOutlineLoading3Quarters,
  AiFillEdit,
} from "react-icons/ai";
import { Spinner } from "@chakra-ui/react";
function PostItem(props) {
  const [userInfo, setUser] = useState("");
  const [status, setStatus] = useState("");

  const router = useRouter();
  const posts = useSelector((state) => state.posts.deletePostStatus);
  // const userInfo = useSelector((state) => state.users.user);

  async function showDetailHandler() {
    router.push(`${router.pathname}${props.id}`);
  }
  const likeStatus = useSelector((state) => state.posts.likeStatus);
  // const users = useSelector((state) => state.users.users);
  const user = props.user;
  const currentUser = useSelector((state) => state.auth.currentUser);
  const us = props.users.filter((user) => user.id === props.user);
  console.log("aaa", us);

  useEffect(() => {
    let isMounted = true;
    function getUser() {
      axios
        .get(`/api/users/${user}`)
        .then((data) => isMounted && setUser(data.data))
        .catch((err) => err);
    }
    getUser();
    return () => (isMounted = false);
    // dispatch(getSingleUser(user));
  }, []);

  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deletePost(props.id));
  }

  function handleLike() {
    if (auth.currentUser)
      // dispatch(addLike({ postId: props.id, userId: auth.currentUser.uid }));
      setStatus("loading");
    axios
      .post(`/api/postLikes/${props.id}/${auth.currentUser?.uid}`)
      .then((d) => {
        d.data;
        setStatus("success");
      })
      .catch((err) => err);
    // setStatus("loading");
    // axios
    //   .post(`/api/postLikes/${props.id}/${auth.currentUser.uid}`)
    //   .then((d) => setStatus("success"))
    //   .catch((err) => setStatus(err.message));
  }
  async function handleJoin() {
    const chatRoomRef = await (await getDoc(doc(db, "chat", props.id))).data();
    if (chatRoomRef.users.includes(auth.currentUser?.uid)) return;

    await updateDoc(doc(db, "chat", props.id), {
      users: arrayUnion(auth.currentUser?.uid),
    });
    console.log("success");
  }

  return (
    <div>
      <li className={classes.item}>
        <Card>
          {auth.currentUser?.uid === props.user && (
            <Flex justify="space-between">
              <IconButton
                onClick={() => router.push(`/edit/${props.id}`)}
                textAlign="left"
                icon={<AiFillEdit size="23" />}
              />

              <IconButton onClick={handleDelete} icon={<CloseIcon />} />
            </Flex>
          )}
          {auth.currentUser?.uid !== props.user && (
            <Flex justify="center">
              <Button onClick={handleJoin}>Join Project</Button>
            </Flex>
          )}
          <div className={classes.content}>
            <h1> {us[0].username} </h1>
            <h3>{props.title}</h3>
            {/* <span>{moment(props.time.toDate()).calendar()}</span> */}
            <span>{props.time}</span>
          </div>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h4>{props.details}</h4>
          </div>
          <div className={classes.actions}>
            {/* <button onClick={showDetailHandler}>Show Details</button> */}
            <Link href={`/${props.id}`}>Show Details </Link>
          </div>
          <div>
            {status === "loading" ? (
              <IconButton icon={<Spinner />} />
            ) : (
              <IconButton
                // disabled={disable}
                onClick={handleLike}
                icon={
                  auth.currentUser?.uid ? (
                    currentUser?.likes?.includes(props.id) ? (
                      <AiFillHeart color="red" size="23" />
                    ) : (
                      <AiOutlineHeart size="23" />
                    )
                  ) : (
                    <AiOutlineHeart size="23" />
                  )
                }
              />
            )}
            <span style={{ padding: "5px" }}>{props.likes}</span>{" "}
          </div>
        </Card>
      </li>
    </div>
  );
}

export default PostItem;
