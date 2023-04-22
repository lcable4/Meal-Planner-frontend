import React from "react";

function Meals(props) {
  let meals = props.meals;
  console.log(meals, "MEALS LOG");
  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.id}>
          <h2>{meal.name}</h2>
          <ul>
            {JSON.parse(meal.ingredients).map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name}: {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Meals;
