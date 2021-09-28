import { auth } from "../../firebase/firebase";
import MeetupItem from "./PostItem";
import classes from "./MeetupList.module.css";
import PostItem from "./PostItem";
import { Select } from "@chakra-ui/select";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortValue } from "../../store/postsSlice";

function PostList(props) {
  const [selectValue, setSelectValue] = useState("Most Recent");
  const dispatch = useDispatch();

  return (
    <div>
      <Select
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
          dispatch(setSortValue(e.target.value));
        }}
      >
        <option value="Most Recent">Most Recent</option>
        <option value="Mostly Liked">Mostly Liked</option>
      </Select>
      <ul className={classes.list}>
        {props.posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              user={post.user}
              image={post.image}
              title={post.title}
              details={post.description}
              time={post.time}
              likes={post.likes}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PostList;
