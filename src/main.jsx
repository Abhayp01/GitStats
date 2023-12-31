import React from "react";
import App from "./App.jsx";
import Blog from "./components/blog.jsx";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import Contact from "./components/contact.jsx";
import User from "./components/User.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorpage.jsx";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route path="/" element={<App />} errorElement={<ErrorPage />}/>
          <Route path="/about" element={<Blog />} errorElement={<ErrorPage />}/>
          <Route path="/contact" element={<Contact errorElement={<ErrorPage />}/>} />
          <Route path="/user/:userid" element={<User/>} errorElement={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);