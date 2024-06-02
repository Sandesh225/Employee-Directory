import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";

export default function EmployeeList({ title }) {
  const { employees, setEmployees } = useContext(Context);
  const [searchEmployee, setSearchEmployee] = useState("");

  const handleSearchChange = (e) => {
    setSearchEmployee(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  const filterEmployees = employees.filter((employee) => {
    const employeeNameLowerCase = employee.name.toLowerCase();
    const searchEmployeeLowerCase = searchEmployee.toLowerCase();
    return employeeNameLowerCase.includes(searchEmployeeLowerCase);
  });

  return (
    <div className="bg-gradient-to-r from-emerald-200 to-lime-300 flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-center text-2xl font-semibold mb-4 underline">
          {title}
        </h1>
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchEmployee}
            onChange={handleSearchChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filterEmployees.map((employee) => (
            <div
              key={employee.id}
              className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{employee.name}</h2>
                <p className="text-gray-700 mb-1">
                  <strong>Email:</strong> {employee.email}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Phone:</strong> {employee.phone}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Company:</strong> {employee.company.name}
                </p>
                <div className="flex space-x-2 mt-4">
                  <Link
                    to={`/edit/${employee.id}`}
                    className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
