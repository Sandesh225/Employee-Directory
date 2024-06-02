import React from "react";

export default function SearchEmployee({ value, onChange }) {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Search by Name"
        value={value}
        onChange={onChange}
        className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600"
      />
      <button className="text-white bg-violet-500 hover:bg-violet-700 px-4 py-2 rounded-lg">
        Search
      </button>
    </div>
  );
}
