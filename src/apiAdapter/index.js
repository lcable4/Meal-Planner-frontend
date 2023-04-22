export const BASE_URL = "http://localhost:3000/api/";

export const getAllMeals = async () => {
  try {
    const response = await fetch(`${BASE_URL}meals`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result, "RESULT LOG");

    return result;
  } catch (error) {
    console.log(error);
  }
};
