import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./route/App.jsx";
import CreatePost from "./component/CreatePost.jsx";
import PostList, { loaderData } from "./component/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: loaderData },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
