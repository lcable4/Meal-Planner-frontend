import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllMeals, getMealPlanById } from "../apiAdapter";

function MealPlan() {
  const [meals, setMeals] = useState([]);
  const [mealTags, setMealTags] = useState([]);
  const [dinners, setDinners] = useState([]);

  console.log(dinners);

  useEffect(() => {
    async function getMeals() {
      const meals = await getAllMeals();
      const mealTags = meals.map((meal) => meal.tags.name);
      console.log(mealTags, "Meal Tags log");
      setMeals(meals);
      setMealTags(mealTags);
    }
    getMeals();
  }, []);

  console.log(meals, "meals log");
  return (
    <>
      <h1>The Menu</h1>
      <h4>Seed to Sequoia Nutritional Therapy</h4>
      <div className="theMenu">
        <>
          <div className="leftContainer">
            <div className="dinner">
              <div className="leftDinner">
                <div>
                  <h2>Dinners</h2>
                </div>
              </div>
              <div className="rightDinner">
                <div className="monday">
                  <label htmlFor="monday">Monday</label>
                </div>
                <div className="tuesday">
                  <label htmlFor="tuesday">Tuesday</label>
                </div>
                <div className="wednesday">
                  <label htmlFor="wednesday">Wednesday</label>
                </div>
                <div className="thursday">
                  <label htmlFor="thursday">Thursday</label>
                </div>
                <div className="friday">
                  <label htmlFor="friday">Friday</label>
                </div>
                <div className="saturday">
                  <label htmlFor="saturday">Saturday</label>
                </div>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="breakfast">
              <div className="leftBreakfast">
                <div>
                  <h2>Breakfast</h2>
                </div>
              </div>
              <div className="rightBreakfast"></div>
            </div>
            <div className="drinks"></div>
            <div className="dessert"></div>
          </div>
        </>
      </div>
      <div className="tipOfTheWeek">
        <h2>Tip of the week</h2>
      </div>
      <div className="theRecipes">
        <h1>The Recipes</h1>
        <div className="mealPlan">
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
      </div>
    </>
  );
}

export default MealPlan;
