import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ✅ import this
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ correct package is react-router-dom
import Root from "./Layouts/HomeLayout/Root.jsx";
import Home from "./Layouts/HomeLayout/Home.jsx";
import About from "./Layouts/HomeLayout/About.jsx";
import AuthRoot from "./Layouts/AuthLayout/AuthRoot.jsx";
import Login from "./Layouts/AuthLayout/Login.jsx";
import Register from "./Layouts/AuthLayout/Register.jsx";

const router = createBrowserRouter([
  {
    path: "",
    Component : Root,
    children:[
      {index: true , Component:Home},
      {path:'/about', Component:About}
    ]
  },
  {
    path: "auth",
    Component: AuthRoot,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
