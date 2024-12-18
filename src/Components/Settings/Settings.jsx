import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [currency, setCurrency] = useState("USD");
  const [theme, setTheme] = useState("Light");

  return (
    <div className="settings">
      <h3>Settings</h3>

      <label>Currency Preference:</label>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />

      <label>Theme Preference:</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>

      <button onClick={() => alert("Settings Saved!")}>Save Settings</button>
    </div>
  );
};

export default Settings;
