import React from "react";
import App from "./App.jsx";
import Blog from "./components/blog.jsx";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import Contact from "./components/contact.jsx";
import User from "./components/User.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userid" element={<User />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);