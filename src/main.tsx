import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Register from "./pages/Register";
import BlogDetailpage from "./pages/BlogDetailpage";

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
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
