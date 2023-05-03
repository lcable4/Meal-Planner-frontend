import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function GroceryList() {
  const location = useLocation();
  const meals = location?.state?.meals;

  const [selectedMeals, setSelectedMeals] = useState([]);
  const [mealSelections, setMealSelections] = useState({});
  console.log(meals, "Meals");
  console.log(selectedMeals, "SELECTED MEALS");
  const [shoppingList, setShoppingList] = useState({
    Protein: [],
    Produce: [],
    Dairy: [],
    Frozen: [],
    Pantry: [],
  });

  useEffect(() => {
    const updateShoppingList = () => {
      const newShoppingList = {
        Protein: [],
        Produce: [],
        Dairy: [],
        Frozen: [],
        Pantry: [],
      };

      const ingredientQuantities = {};

      selectedMeals.forEach((meal) => {
        meal.ingredients.forEach((ingredient) => {
          if (!newShoppingList[ingredient.category]) {
            newShoppingList[ingredient.category] = [];
          }
          if (!ingredientQuantities[ingredient.name]) {
            ingredientQuantities[ingredient.name] = {
              id: ingredient.id,
              name: ingredient.name,
              quantity: parseInt(ingredient.quantity),
              unit: ingredient.unit,
            };
            newShoppingList[ingredient.category].push(
              ingredientQuantities[ingredient.name]
            );
          } else {
            ingredientQuantities[ingredient.name].quantity += parseInt(
              ingredient.quantity
            );
          }
        });
      });

      setShoppingList(newShoppingList);
    };

    updateShoppingList();
  }, [selectedMeals]);

  useEffect(() => {
    const newMealSelections = {};
    meals.forEach((meal) => {
      newMealSelections[meal.id] = false;
    });
    setMealSelections(newMealSelections);
  }, [meals]);

  const handleMealSelect = (meal) => {
    const mealId = meal.id;
    const newSelectedMeals = [...selectedMeals];
    const newMealSelections = { ...mealSelections };

    if (mealSelections[mealId]) {
      // meal is already selected, deselect it
      newSelectedMeals.splice(
        newSelectedMeals.findIndex((m) => m.id === mealId),
        1
      );
      newMealSelections[mealId] = false;
    } else {
      // meal is not selected, select it
      newSelectedMeals.push(meal);
      newMealSelections[mealId] = true;
    }

    setSelectedMeals(newSelectedMeals);
    setMealSelections(newMealSelections);
  };

  return (
    <>
      <div className="groceryList">
        <div className="gl_title">
          <h1>The Grocery List</h1>
          <h3>Seed to Sequoia Nutritional Therapy</h3>
        </div>
        <div className="gl_image"></div>
        <div className="gl_information">
          <p>
            If the store you commonly shop at has an app, try downloading it
            before your trip and adding all items to your cart or list to get a
            total before you shop to help you stay on budget. Try to get in the
            habit of reading ingredient labels before putting an item in your
            grocery cart. Here are some ingredients we are looking to avoid:
          </p>
          <ul>
            <li>Margarine</li>
            <li>
              Industrial seed oils like canola oil, soybean oil, and corn oil
            </li>
            <li>Trans fats, and hydrogenated oils</li>
            <li>Corn syrup, corn syrup solids, high fructose corn syrup</li>
            <li>
              Preservatives like BTA, BHA, benzoates, propionates, nitrates, and
              sulfites
            </li>
            <li>
              Emulsifiers like carrageenan, polysorbate 80, and propylene glycol
            </li>
            <li>Food colorings like Red #40, Yellow #5, and Yellow #6</li>
            <li>
              Artificial sweeteners such as dextrose, aspartame, sucralose,
              acesulfame K, saccharin
            </li>
            <li>Wheat</li>
          </ul>
          <p>
            The less ingredients something has, the better! Qualities of foods
            to look for include:
            <ul>
              <li>Organic</li>
              <li>Grass-fed</li>
              <li>Pasture-raised meats/dairy</li>
              <li>Organic produce/pantry basics</li>
            </ul>
            If you cannot find or afford these parameters, that is okay.
          </p>
        </div>
        <div className="gl_information">
          <p>
            Below you will find the ingredients for each recipe in this plan.
            You may not want to make all of these recipes or you may want to
            choose your sides, toppings, etc. Please print the following sheet
            and circle the meals you want to make and the sides you want to
            include so that you are not buying ingredients you don't need and
            optimizing your trip to the store. Once you have circled your
            desired recipes, mark off the ingredients you do not need to
            purchase, which have all been labeled for you.
          </p>
        </div>
      </div>
      <div className="gl_mealsList">
        <div>
          <h3>Select the recipes you will be making this week</h3>
        </div>
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="gl_meal"
            onClick={() => handleMealSelect(meal)}
          >
            <h4>{meal.name}</h4>
            {mealSelections[meal.id] && (
              <span className="gl_checkmark">&#10003;</span>
            )}
          </div>
        ))}
      </div>
      <div className="gl_shoppingList">
        <div className="protein">
          <h4>Protein</h4>
          {shoppingList.Protein.map((ingredient) => (
            <div key={ingredient.id}>
              <ul>
                <li>
                  {ingredient.quantity} {ingredient.unit} - {ingredient.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="produce">
          <h4>Produce</h4>
          {shoppingList.Produce.map((ingredient) => (
            <div key={ingredient.id}>
              <ul>
                <li>
                  {ingredient.quantity} {ingredient.unit} - {ingredient.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="dairy">
          <h4>Dairy</h4>
          {shoppingList.Dairy.map((ingredient) => (
            <div key={ingredient.id}>
              <ul>
                <li>
                  {ingredient.quantity} {ingredient.unit} - {ingredient.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="frozen">
          <h4>Frozen</h4>
          {shoppingList.Frozen.map((ingredient) => (
            <div key={ingredient.id}>
              <ul>
                <li>
                  {ingredient.quantity} {ingredient.unit} - {ingredient.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="pantry">
          <h4>Pantry</h4>
          {shoppingList.Pantry.map((ingredient) => (
            <div key={ingredient.id}>
              <ul>
                <li>
                  {ingredient.quantity} {ingredient.unit} - {ingredient.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4>Staples to have on hand</h4>
          <ul>
            <li>Organic, Grass Fed, Butter</li>
            <li>Organic Garlic Cloves (have plenty on hand, most recipes)</li>
            <li>Organic, Maple Syrup/Raw Honey</li>
            <li>Organic Cold Pressed Extra Virgin Olive Oil or Avocado Oil</li>
            <li>Baking Soda</li>
            <li>Organic, Unrefined, Cane Sugar</li>
            <li>Sea Salt & Pepper</li>
            <li>Organic Garlic Powder</li>
            <li>Organic Cumin</li>
            <li>Organic Smoked Paprika</li>
            <li>Organic Cayenne Pepper</li>
            <li>Organic Ginger Powder</li>
            <li>Organic Chili Powder</li>
            <li>Organic Onion Powder</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default GroceryList;
