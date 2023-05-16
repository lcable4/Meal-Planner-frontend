import { BASE_URL, makeHeaders } from "./index";

export async function adminLogin(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function authAdmin(token) {
  try {
    const response = await fetch(`${BASE_URL}/admin/auth`, {
      method: "POST",
      headers: makeHeaders(token),
      body: null,
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("ERROR IN ADMIN AUTH");
    throw e;
  }
}

export async function updateMeal(token, fields) {
  try {
    const response = await fetch(`${BASE_URL}meals/`, {
      method: "PATCH",
      headers: makeHeaders(token),
      body: JSON.stringify({ ...fields }),
    });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function createMeal(token, fields) {
  try {
    const response = await fetch(`${BASE_URL}meals/`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({ ...fields }),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function addMealPlan(token, fields) {
  try {
    const response = await fetch(`${BASE_URL}meal-plans/`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({ ...fields }),
    });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteMeal(token, id) {
  console.log("ID: ", id);
  try {
    const response = await fetch(`${BASE_URL}meals/`, {
      method: "DELETE",
      headers: makeHeaders(token),
      body: JSON.stringify({ id }),
    });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function addMealToPlan(mealId, mealPlanId, token) {
  try {
    const response = await fetch(`${BASE_URL}meal-plans/${mealPlanId}`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({ mealId }),
    });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteMealFromPlan(mealId, mealPlanId, token) {
  try {
    const response = await fetch(`${BASE_URL}inventory/`, {
      method: "DELETE",
      headers: makeHeaders(token),
      body: JSON.stringify({ mealId, mealPlanId }),
    });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
