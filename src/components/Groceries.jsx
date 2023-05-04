import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Groceries() {
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
        <div className="staples">
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
        {Object.keys(shoppingList).length > 0 && (
          <button onClick={() => window.print()}>Print Grocery List</button>
        )}
      </div>
    </>
  );
}

export default Groceries;
