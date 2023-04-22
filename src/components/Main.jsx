import React, { useState, useEffect } from "react";
import { Navbar, Home, Login, Register, Profile, Cart, MealPlan } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllMeals } from "../apiAdapter";

const Main = () => {
  const [meals, setMeals] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuestUser, setIsGuestUser] = useState(
    localStorage.getItem("isGuestUser") === "true"
  );
  console.log(meals, "MEALS");

  useEffect(() => {
    async function getMeals() {
      const meals = await getAllMeals();
      console.log(meals, "MEAL LOG");

      setMeals(meals);
    }
    getMeals();

    const loggedIn = localStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");

    const isGuest = localStorage.getItem("isGuestUser");
    setIsGuestUser(isGuest === "true");
  }, []);

  const handleLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
    localStorage.setItem("loggedIn", "true");
  };

  return (
    <BrowserRouter>
      <div id="main">
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path="/MealPlan" element={<MealPlan meals={meals} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
