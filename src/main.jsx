import React from "react";
import App from "./App.jsx";
import Blog from "./components/blog.jsx";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import Contact from "./components/contact.jsx";
import User from "./components/User.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />}>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/user/:userid" element={<User />}></Route>
    </Route>,
    <Route path="/about" element={<Root />}>
      <Route path="/about" element={<Blog />}></Route>
    </Route>,
    <Route path="/user/:userid" element={<Root />}>
      <Route path="/user/:userid" element={<User />}></Route>
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
