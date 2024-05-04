import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost";
import RootLayout from "./routes/RootLayout";
import PostContent from "./components/PostContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PostContent />,
        children: [{ path: "/create", element: <NewPost /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
