import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EditEmployeeForm from "./components/EditEmployeeForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="list" element={<EmployeeList />} />
          <Route path="add" element={<AddEmployeeForm />} />
          <Route path="edit/:id" element={<EditEmployeeForm />} />
        </Route>
      </Routes>
    </Router>
  );
}
