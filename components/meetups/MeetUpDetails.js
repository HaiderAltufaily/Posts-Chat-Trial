import React, { Fragment } from "react";

import classes from "./MeetUpDetail.module.css";
function MeetUpDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image}></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
export async function getStaticProps() {
  return {
    props: {
      meetupData: {
        image: "",
        id: "m1",
        title: "First Meetup",
        address: "Street 5 ,3",
        description: "lorod is a lorod",
      },
    },
  };
}
export default MeetUpDetails;
