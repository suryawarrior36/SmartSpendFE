import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>SmartSpend</h2>
      <ul>
        <li>Dashboard</li>
        <li>Expenses</li>
        <li>Budget Planner</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
