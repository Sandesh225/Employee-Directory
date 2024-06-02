import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
export const Context = createContext();

const AppWrapper = () => {
  const [employees, setEmployees] = useState([]);

  return (
    <Context.Provider value={{ employees, setEmployees }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
