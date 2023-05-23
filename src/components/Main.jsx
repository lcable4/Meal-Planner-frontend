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
  AdminLogin,
  Admin,
  AdminIngredients,
  AdminMeals,
  AdminMealPlans,
} from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllMeals } from "../apiAdapter";
import { authAdmin } from "../apiAdapter/admin";
import AdminNavbar from "./AdminNavbar";
import Dashboard from "../scenes/dashboard";
// import Team from "../scenes/team";
// import Invoices from "../scenes/invoices";
// import Contacts from "../scenes/contacts";
// import Bar from "../scenes/bar";
// import Form from "../scenes/form";
// import Line from "../scenes/line";
// import Pie from "../scenes/pie";
// import FAQ from "../scenes/faq";
// import Geography from "../scenes/geography";
// import Calender from "../scenes/calendar";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuestUser, setIsGuestUser] = useState(
    localStorage.getItem("isGuestUser") === "true"
  );
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("admin") === "true"
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

    const adminLoggedIn = localStorage.getItem("admin");
    setIsAdminLoggedIn(adminLoggedIn === "true");
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
          <Route path="/MealPlan" element={<MealPlan />} />
          <Route path="/GroceryList" element={<GroceryList />} />
          <Route
            path="/admin/login"
            element={
              <AdminLogin
                setIsAdminLoggedIn={setIsAdminLoggedIn}
                isAdminLoggedIn={isAdminLoggedIn}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin
                setIsAdminLoggedIn={setIsAdminLoggedIn}
                isAdminLoggedIn={isAdminLoggedIn}
              />
            }
          />
          <Route path="/adminIngredients" element={<AdminIngredients />} />
          <Route path="/adminMeals" element={<AdminMeals />} />
          <Route path="/adminMealPlans" element={<AdminMealPlans />} />
          {/* <Route path="/team" element={<Team />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          {/* <Route path="/invoices" element={<Invoices />} /> */}
          {/* <Route path="/form" element={<Form />} /> */}
          {/* <Route path="/bar" element={<Bar />} /> */}
          {/* <Route path="/pie" element={<Pie />} /> */}
          {/* <Route path="/line" element={<Line />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* <Route path="/geography" element={<Geography />} /> */}
          {/* <Route path="/calendar" element={<Calendar />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
