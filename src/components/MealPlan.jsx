import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllMeals } from "../apiAdapter";

function MealPlan() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const meals = await getAllMeals();
      setMeals(meals);
    }
    getMeals();
  }, []);

  console.log(meals, "meals log");
  return (
    <div className="mealPlan">
      <h1>This weeks meal plan</h1>

      {meals.map((meal) => (
        <div key={meal.id}>
          <h2>{meal.name}</h2>
          <ul>
            {meal.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name} - {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
          <h3>{meal.description}</h3>
        </div>
      ))}
      <div className="mealPlanDiv">
        <Link>Customize your plan</Link>
      </div>
    </div>
  );
}

export default MealPlan;
