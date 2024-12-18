import React, { useState } from "react";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { title: "Groceries", category: "Food", amount: "500", date: "2024-05-01" },
    { title: "Rent", category: "Housing", amount: "12000", date: "2024-05-02" },
  ]);

  return (
    <div className="expense-tracker">
      <h3>Track Your Expenses</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker;
