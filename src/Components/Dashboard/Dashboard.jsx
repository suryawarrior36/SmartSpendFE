import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Dashboard Overview</h3>
      <div className="stats">
        <div>Total Budget: ₹50,000</div>
        <div>Total Spent: ₹20,000</div>
        <div>Remaining: ₹30,000</div>
      </div>
    </div>
  );
};

export default Dashboard;
