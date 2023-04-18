import React, { useState, useEffect } from "react";
import { Navbar, Home, Login, Register } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <div id="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
