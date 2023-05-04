import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="homeContainer">
        <div id="homeTopDiv">
          <h1>Taylor Winter, NTP</h1>
          <h2>
            Partnering with women and using God's design for food to heal from
            within.
          </h2>
        </div>
        <div id="homeBottomDiv">
          <div className="homeMealPlanDiv">
            <h2>
              <Link to="/MealPlan">View this week's meal plan.</Link>
            </h2>
          </div>
          <div className="homeMealPlanDiv">
            <h2>Weekly Meal Plan.</h2>
          </div>
          <div className="homeMealPlanDiv">
            <h2>Monthly Meal Plan.</h2>
          </div>
          <div className="homeMealPlanDiv">
            <h2>Work With me.</h2>
          </div>
        </div>
      </div>
      <div id="homeContainer2">
        <div className="weeklySubTop">
          <div className="weeklyPlanImg">
            <img src="/images/weeklyPlan.png" alt="weekly plan" />
          </div>
          <div className="weeklyPlanSubscription">
            <h2>Weekly Meal Plan Subscription</h2>
            <p>
              Receive an email every Thursday with the meals, recipes and
              grocery lists you need for the week ahead.
            </p>
          </div>
        </div>
        <div className="lists">
          <div className="listDiv">
            <ul>
              <li>6 Dinners</li>
              <li>1 Breakfast</li>
              <li>2 Drinks</li>
              <li>1 Dessert</li>
            </ul>
          </div>
          <div className="listDiv">
            <ul>
              <li>Tip of the Week</li>
              <li>All Recipes</li>
              <li>Complete Grocery List</li>
              <li>Printer Friendly Format</li>
            </ul>
          </div>
        </div>
        <div className="weeklyPlanLinks">
          <h2>Click the Plan for you Below:</h2>
          <h2>REGULAR PLAN (GLUTEN FREE)</h2>
          <h3>$9 PER MONTH</h3>
          <h2>GLUTEN, DAIRY, SOY FREE PLAN</h2>
          <h3>$10 PER MONTH</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
