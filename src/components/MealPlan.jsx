import React from "react";

function MealPlan(props) {
  let meals = props.meals;
  console.log(meals, "meals log");
  return (
    <div className="mealPlan">
      <h1>Customize your meal plan</h1>
    </div>
  );
}

export default MealPlan;
