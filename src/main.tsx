import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import BlogDetailpage from "./pages/BlogDetailpage";
import CreateBlogpage from "./pages/CreateBlogpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetailpage />,
  },
  {
    path: "/create",
    element: <CreateBlogpage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
