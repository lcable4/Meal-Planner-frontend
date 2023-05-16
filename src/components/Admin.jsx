import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateMeal,
  createMeal,
  addMealPlan,
  deleteMeal,
  addMealToPlan,
  deleteMealFromPlan,
} from "../apiAdapter/admin";
import AdminLogin from "./AdminLogin";

function Admin() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleUpdateMeal = async (event) => {
    event.preventDefault();
    // Handle update meal logic
  };

  const handleCreateMeal = async (event) => {
    event.preventDefault();
    // Handle create meal logic
  };

  const handleAddMealPlan = async (event) => {
    event.preventDefault();
    // Handle add meal plan logic
  };

  const handleDeleteMeal = async (event) => {
    event.preventDefault();
    // Handle delete meal logic
  };

  const handleAddMealToPlan = async (event) => {
    event.preventDefault();
    // Handle add meal to plan logic
  };

  const handleDeleteMealFromPlan = async (event) => {
    event.preventDefault();
    // Handle delete meal from plan logic
  };

  return (
    <div className="admin">
      {isAdminLoggedIn ? (
        <div>
          <h1 id="admin-hello">
            You've reached the Admin Page, click a button to begin
          </h1>
          <div>
            <h2>Update Meal</h2>
            <form onSubmit={handleUpdateMeal}>{/* Update meal form */}</form>
          </div>
          <div>
            <h2>Create Meal</h2>
            <form onSubmit={handleCreateMeal}>{/* Create meal form */}</form>
          </div>
          <div>
            <h2>Add Meal Plan</h2>
            <form onSubmit={handleAddMealPlan}>{/* Add meal plan form */}</form>
          </div>
          <div>
            <h2>Delete Meal</h2>
            <form onSubmit={handleDeleteMeal}>{/* Delete meal form */}</form>
          </div>
          <div>
            <h2>Add Meal to Plan</h2>
            <form onSubmit={handleAddMealToPlan}>
              {/* Add meal to plan form */}
            </form>
          </div>
          <div>
            <h2>Delete Meal from Plan</h2>
            <form onSubmit={handleDeleteMealFromPlan}>
              {/* Delete meal from plan form */}
            </form>
          </div>
        </div>
      ) : (
        <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />
      )}
    </div>
  );
}

export default Admin;
