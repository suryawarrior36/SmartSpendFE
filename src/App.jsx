import React from "react";

// import Dashboard from "./components/Dashboard";
// import ExpenseTracker from "./components/ExpenseTracker";
// import BudgetPlanner from "./components/BudgetPlanner";
// import Reports from "./components/Reports";
// import Settings from "./components/Settings";
// import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ExpenseTracker from "./Components/ExpenseTracker/ExpenseTracker";
import BudgetPlanner from "./Components/BudgetPlanner/BudgetPlanner";
import Reports from "./Components/Reports/Reports";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Dashboard/>
        <ExpenseTracker/>
        <BudgetPlanner/>
        <Reports/>
        <Settings/>
        {/* <ExpenseTracker />
        <BudgetPlanner />
        <Reports />
        <Settings /> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
