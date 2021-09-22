import { collection, doc, getDocs, getDoc } from "@firebase/firestore";
import React, { Fragment } from "react";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";
import db from "../../firebase/firebase";
function MeetUpDetailsPage({ meetupData }) {
  //   console.l    og(meetupData.id);
  return (
    <MeetUpDetails
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
      image={meetupData.image}
    />
  );
}
export async function getStaticPaths() {
  const docc = await getDocs(collection(db, "meetups"));
  const docs = docc.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return {
    fallback: true,
    paths: docs.map((doc) => {
      return { params: { meetupId: doc.id } };
    }),
  };
}
export async function getStaticProps(context) {
  console.log(context);
  const meetupId = context.params.meetupId;
  const docc = await getDoc(doc(db, "meetups", meetupId)).then((data) =>
    data.data()
  );

  console.log(meetupId);
  return {
    props: {
      meetupData: docc,
    },
  };
}

export default MeetUpDetailsPage;
