export const BASE_URL = "http://localhost:3000/api/";

export const getAllMeals = async () => {
  try {
    const response = await fetch(`${BASE_URL}meals`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getMealPlanByWeek = async (weekNumber) => {
  try {
    const response = await fetch(`${BASE_URL}meal-plans/week/${weekNumber}`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getMealById = async (mealId) => {
  try {
    const response = await fetch(`${BASE_URL}meals/${mealId}`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
