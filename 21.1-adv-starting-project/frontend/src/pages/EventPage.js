import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch the data" }),
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// import React from "react";
// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   { id: "e1", title: "Some event 1" },
//   { id: "e2", title: "Some event 2" },
//   { id: "e3", title: "Some event 3" },
//   { id: "e4", title: "Some event 4" },
//   { id: "e5", title: "Some event 5" },
// ];
// function EventPage() {
//   return (
//     <>
//       <h1>EventPage</h1>
//       <ul>
//       {DUMMY_EVENTS.map((event)=>(
//         <li key={event.id}>
//           <Link to={event.id} style={{color:'bisque'}}>{event.title}</Link>
//         </li>
//       ))}
//       </ul>
//     </>
//   );
// }

// export default EventPage;
