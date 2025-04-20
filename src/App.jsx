import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
