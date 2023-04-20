import React, { useState, useEffect } from "react";
import { Navbar, Home, Login, Register } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllMeals } from "../apiAdapter";

const Main = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals, "MEALS");

  useEffect(() => {
    async function getMeals() {
      const meal = await getAllMeals();
      meal.forEach((m) => {
        m.ingredients = JSON.parse(m.ingredients);
      });
      setMeals(meal);
    }
    getMeals();
  }, []);

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
