import React from "react";

const EmployeeSearch = ({ searchEmployee, handleSearchChange }) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchEmployee}
        onChange={handleSearchChange}
        className="w-full md:w-1/2 lg:w-1/4 bg-gray-100 border border-gray-300 rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
      />
      <button
        onClick={() => console.log("Search clicked")}
        className="text-white bg-violet-500 hover:bg-violet-700 px-4 py-2 ml-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default EmployeeSearch;
