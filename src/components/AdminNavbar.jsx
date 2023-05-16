import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  const token = localStorage.getItem("token");
  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="adminNavbar">
      <div id="nav-title"></div>
      <div id="nav-buttons">
        <Link to="/admin">
          <button id="button">Dashboard</button>
        </Link>
        <Link to="/adminIngredients">
          <button id="button">Ingredients</button>
        </Link>
        <Link to="/adminMeals">
          <button id="button">Meals</button>
        </Link>
        <Link to="/adminMealPlans">
          <button id="button">Meal Plans</button>
        </Link>
        <button id="button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
