import React, { useState, useEffect } from "react";
import Groceries from "./Groceries";

function GroceryList() {
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
      <Groceries />
    </>
  );
}

export default GroceryList;
