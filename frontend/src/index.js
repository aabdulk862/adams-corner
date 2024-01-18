import React from "react";
import ReactDOM from "react-dom/client";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import AddMenuItemForm from "./components/AddMenuIemForm";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddMenuItemForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
