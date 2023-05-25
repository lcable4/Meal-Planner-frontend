import React, { useState, useEffect } from "react";
import {
  Navbar,
  Home,
  Login,
  Register,
  Profile,
  Cart,
  MealPlan,
  GroceryList,
} from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllMeals } from "../apiAdapter";
import { authAdmin } from "../apiAdapter/admin";
import AdminNavbar from "./AdminNavbar";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuestUser, setIsGuestUser] = useState(
    localStorage.getItem("isGuestUser") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const checkAdminStatus = async () => {
    setIsAdmin(await authAdmin(localStorage.getItem("token")));
  };
  checkAdminStatus();
  useEffect(() => {
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
        {!isAdmin ? (
          <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        ) : (
          <AdminNavbar setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/MealPlan" element={<MealPlan />} />
          <Route path="/GroceryList" element={<GroceryList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
