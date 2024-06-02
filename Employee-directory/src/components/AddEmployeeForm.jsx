import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export default function AddEmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const { setEmployees } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        name,
        email,
        phone,
        company: { name: company },
      });
      setEmployees((prevEmployees) => [...prevEmployees, response.data]);
      navigate("/list");
    } catch (error) {
      console.log("Error adding employee:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-200 to-lime-300 flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-center text-2xl font-semibold mb-4 underline">
          Add Employee
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}
