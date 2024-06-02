import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeGrid = ({ employees, searchEmployee, handleDeleteEmployee }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {employees
        .filter((employee) =>
          employee.name.toLowerCase().includes(searchEmployee.toLowerCase())
        )
        .map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onDelete={() => handleDeleteEmployee(employee.id)}
          />
        ))}
    </div>
  );
};

export default EmployeeGrid;
