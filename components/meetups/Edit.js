import Card from "../../components/ui/Card";
import { useEffect, useState } from "react";
import classes from "./NewMeetupForm.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { editPost, resetEditStatus } from "../../store/postsSlice";
import { Spinner } from "@chakra-ui/react";
import router from "next/router";
function Edit({ post }) {
  const status = useSelector((state) => state.posts.editStatus);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });
  useEffect(() => {
    setFormData({
      title: post.title,
      image: post.image,
      description: post.description,
    });
    return () => dispatch(resetEditStatus());
  }, []);
  useEffect(() => {
    console.log(status);
    status === "success" && router.push("/");
  }, [status]);
  //   useEffect(()=>{
  //    async function getPost(){
  //     const data = await axios.get()
  //     }
  //   },[])
  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editPost({ postId: post.id, formData }));
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Post Title</label>
          <input
            onChange={handleForm}
            name="title"
            type="text"
            required
            id="title"
            value={formData.title}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Post Image</label>
          <input
            onChange={handleForm}
            name="image"
            type="url"
            required
            id="image"
            value={formData.image}
          />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleForm}
            name="description"
            value={formData.description}
            id="description"
            required
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button> {status === "loading" ? <Spinner /> : "Submit"} </button>
        </div>
      </form>
    </Card>
  );
}

export default Edit;
