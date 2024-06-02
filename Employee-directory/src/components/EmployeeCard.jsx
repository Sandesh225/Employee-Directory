import React from "react";

export default function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
        <button
          onClick={onDelete}
          className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg mt-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
