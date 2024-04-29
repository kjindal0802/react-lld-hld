import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

export default function Bootstrap() {
  return (
    <div className="App">
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/experiences" element={() => <h1>Hello</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
