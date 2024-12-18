import React from "react";
import "./BudgetPlanner.css";

const BudgetPlanner = () => {
  return (
    <div className="budget-planner">
      <h3>Budget Planner</h3>
      <div>
        <label>Food: </label>
        <input type="range" min="0" max="10000" defaultValue="3000" />
      </div>
      <div>
        <label>Travel: </label>
        <input type="range" min="0" max="10000" defaultValue="2000" />
      </div>
    </div>
  );
};

export default BudgetPlanner;
