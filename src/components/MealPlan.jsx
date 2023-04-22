import React from "react";
import { Link } from "react-router-dom";

function MealPlan(props) {
  let meals = props.meals;
  console.log(meals, "meals log");
  return (
    <div className="mealPlan">
      <h1>This weeks meal plan</h1>

      {meals.map((meal) => (
        <div key={meal.id}>
          <h2>{meal.name}</h2>
          <h3>{meal.description}</h3>
          <ul>
            {meal.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name} - {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mealPlanDiv">
        <Link>Customize your plan</Link>
      </div>
    </div>
  );
}

export default MealPlan;
