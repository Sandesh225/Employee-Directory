import React, { useContext } from "react";
import { Context } from "../main";

export default function Stats() {
  const { employees } = useContext(Context);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
      <h3 className="text-xl font-semibold text-gray-800">Total Employees</h3>
      <p className="text-gray-600">{employees.length}</p>
    </div>
  );
}
