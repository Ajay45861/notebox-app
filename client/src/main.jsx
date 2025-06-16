import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";      // ✅ Make sure this matches App.jsx
import "./index.css";         // Optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

