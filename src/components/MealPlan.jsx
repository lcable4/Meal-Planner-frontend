import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMealPlanByWeek, getMealById } from "../apiAdapter";
import { Groceries } from "./Groceries";

function MealPlan() {
  const [meals, setMeals] = useState([]);
  const [dinners, setDinners] = useState([]);
  const [breakfasts, setBreakfasts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const week = 1;

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  console.log(meals, "Meals log");
  console.log(week, "week");

  function getDinners(meals) {
    const dinnerMeals = [];
    meals.forEach((meal) => {
      const tags = meal.tags.map((tag) => tag.name);
      if (tags.includes("Dinner")) {
        dinnerMeals.push(meal);
      }
    });
    return dinnerMeals;
  }

  function getBreakfasts(meals) {
    const breakfastMeals = [];
    meals.forEach((meal) => {
      const tags = meal.tags.map((tag) => tag.name);
      if (tags.includes("Breakfast")) {
        breakfastMeals.push(meal);
      }
    });
    return breakfastMeals;
  }

  function getDrinks(meals) {
    const drinkMeals = [];
    meals.forEach((meal) => {
      const tags = meal.tags.map((tag) => tag.name);
      if (tags.includes("Drinks")) {
        drinkMeals.push(meal);
      }
    });
    return drinkMeals;
  }

  function getDesserts(meals) {
    const dessertMeals = [];
    meals.forEach((meal) => {
      const tags = meal.tags.map((tag) => tag.name);
      if (tags.includes("Dessert")) {
        dessertMeals.push(meal);
      }
    });
    return dessertMeals;
  }

  useEffect(() => {
    async function getMeals() {
      const mealPlan = await getMealPlanByWeek(week);
      const mealIds = mealPlan[0].meal_ids; // get meal ids from first meal plan
      const meals = [];
      for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        const meal = await getMealById(mealId);
        meals.push(meal);
      }
      const dinnerMeals = getDinners(meals);
      const breakfastMeals = getBreakfasts(meals);
      const drinkMeals = getDrinks(meals);
      const dessertMeals = getDesserts(meals);
      setMeals(meals);
      setDinners(dinnerMeals);
      setBreakfasts(breakfastMeals);
      setDrinks(drinkMeals);
      setDesserts(dessertMeals);
    }
    getMeals();
  }, []);

  return (
    <>
      <div className="mealPlanTitle">
        <div>
          <h1>The Menu</h1>
          <h4>Seed to Sequoia Nutritional Therapy</h4>
        </div>
        <div className="mealPlanImg">
          <img src="/images/cactus.png" alt="cactus" />
        </div>
      </div>
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
                <>
                  {dinners.map((dinner, index) => (
                    <div
                      key={dinner.id}
                      className={daysOfWeek[index].toLowerCase()}
                    >
                      <label htmlFor={daysOfWeek[index]}>
                        {daysOfWeek[index]}
                      </label>
                      <div>{dinner.name}</div>
                    </div>
                  ))}
                </>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="breakfast">
              <div className="leftBreakfast">
                <div>
                  <h3>Breakfast</h3>
                </div>
              </div>
              <div className="rightBreakfast">
                <>
                  {breakfasts.map((breakfast, index) => (
                    <div key={breakfast.id}>
                      <div>{breakfast.name}</div>
                    </div>
                  ))}
                </>
              </div>
            </div>
            <div className="drinks">
              <div className="leftDrinks">
                <div>
                  <h3>Drinks</h3>
                </div>
              </div>
              <div className="rightDrinks">
                <>
                  {drinks.map((drink, index) => (
                    <div key={drink.id}>
                      <div>{drink.name}</div>
                    </div>
                  ))}
                </>
              </div>
            </div>

            <div className="dessert">
              <div className="leftDessert">
                <div>
                  <h3>Dessert</h3>
                </div>
              </div>
              <div className="rightDessert">
                <>
                  {desserts.map((dessert, index) => (
                    <div key={dessert.id}>
                      <div>{dessert.name}</div>
                    </div>
                  ))}
                </>
              </div>
            </div>
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
              <h4>{meal.servings} servings</h4>
              <ul>
                {meal.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
              <h3>{meal.description}</h3>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mealPlanDiv"
        style={{ fontSize: "20px", padding: "20px 0 20px 0" }}
      >
        <Link
          to="/GroceryList"
          state={{ meals: meals }}
          style={{ textDecoration: "none", color: "blue" }}
        >
          View this week's grocery list
        </Link>
      </div>
    </>
  );
}

export default MealPlan;
