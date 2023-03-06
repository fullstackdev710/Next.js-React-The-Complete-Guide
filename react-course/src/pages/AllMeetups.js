import React, { Fragment, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    "https://react-getting-started-ad6b7-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Fragment>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </Fragment>
  );
}

export default AllMeetupsPage;
