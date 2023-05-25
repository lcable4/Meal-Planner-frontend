import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const scrollToWeeklyPlan = () => {
    const weeklyPlanSection = document.getElementById("weeklyPlanSection");
    weeklyPlanSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMonthlyPlan = () => {
    const monthlyPlanSection = document.getElementById("monthlyPlanSection");
    monthlyPlanSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("formSection");
    formSection.scrollIntoView({ behavior: "smooth" });
  };

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
            <h2 onClick={scrollToWeeklyPlan}>Weekly Meal Plan.</h2>
          </div>
          <div className="homeMealPlanDiv">
            <h2 onClick={scrollToMonthlyPlan}>Monthly Meal Plan.</h2>
          </div>
          <div className="homeMealPlanDiv">
            <h2 onClick={scrollToForm}>Work With me.</h2>
          </div>
        </div>
      </div>
      <div class="homeContainer2" id="weeklyPlanSection">
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
      <div class="homeContainer2" id="monthlyPlanSection">
        <div className="weeklySubTop">
          <div className="weeklyPlanImg">
            <img src="/images/weeklyPlan.png" alt="weekly plan" />
          </div>
          <div className="weeklyPlanSubscription">
            <h2>Monthly Meal Plan Subscription</h2>
            <p>
              4 weeks of meals planned for you. See the photo to the left for
              the full menu. Each week features 6 dinners, 1 breakfast, 2
              drinks, and 1 dessert. Includes all recipes and grocery lists by
              week.
            </p>
          </div>
        </div>
        <div className="lists">
          <div className="listDiv">
            <ul>
              <li>Gluten Free</li>
              <li>Printer Friendly</li>
              <li>$15</li>
            </ul>
          </div>
        </div>
        <div className="weeklyPlanLinks">
          <h2>CLICK HERE TO PURCHASE</h2>
        </div>
      </div>
      <div class="homeContainer2 " id="formSection">
        <div className="homeFormDiv">
          <p>
            Fill out the form below to get in touch and schedule a free
            discovery call.
          </p>
          <p>Let's discuss your health goals, concerns and budget.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
