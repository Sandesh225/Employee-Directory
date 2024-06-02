import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Stats from "./Stats";
import { Context } from "../main";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const { employees, setEmployees } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setEmployees(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error Fetching Request");
        setLoading(false);
        setError(error.message);
      }
    };
    getEmployees();
  }, [setEmployees]);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center text-4xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-start">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      <div className="w-64 bg-gradient flex flex-col py-6">
        <Link className="text-gray-200 text-2xl font-bold mb-4 px-8" to="/">
          Employee Directory
        </Link>
        <ul className="text-gray-200 text-xl">
          <li>
            <Link
              to="/"
              className="flex items-center py-4 px-8 hover:bg-gray-700 rounded-md"
            >
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/list"
              className="flex items-center py-4 px-8 hover:bg-gray-700 rounded-md"
            >
              <span className="hidden sm:inline">Manage Employees</span>
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className="flex items-center py-4 px-8 hover:bg-gray-700 rounded-md"
            >
              <span className="hidden sm:inline">Add Employee</span>
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center py-4 px-8 hover:bg-gray-700 rounded-md"
            >
              <span className="hidden sm:inline">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow p-4 bg-gray-100">
        <div className="shadow-md p-4 rounded-md">
          <h4 className="text-xl font-bold">Employee Management System</h4>
        </div>
        <Stats />
        <Outlet />
      </div>
    </div>
  );
}
