import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => {
        return (
          <MeetupItem
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
  );
}

export default MeetupList;
