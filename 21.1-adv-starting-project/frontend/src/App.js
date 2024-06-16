import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage, { action } from "./pages/NewEventPage";
import EventDetailPage, { eventDeleteAction, eventLoaderById } from "./pages/EventDetailPage";
import EventPage, { loader } from "./pages/EventPage";
import RootLayout from "./pages/RootLayout";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage

// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: loader,
          },
          {
            path: ":id",
            id: "event-data",
            loader: eventLoaderById,
            children: [
              { index: true, element: <EventDetailPage />, action : eventDeleteAction },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action:action},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
