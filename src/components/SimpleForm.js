import React, { useState } from "react";
import axios from "axios";

const SimpleForm = ({
  data1,
  setData1,
  formData,
  setFormData,
  initialState,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if formData contains an _id (indicating existing data)
      if (formData.id !== "") {
        setFormData(initialState);
        await axios.patch(
          `https://linkhub-datatransfer-service.onrender.com/userData/${formData.id}`,
          formData
        );
        console.log(`Data updated successfully`);
      } else {
        setFormData(initialState);
        // Send POST request to add new data
        await axios.post(
          "https://linkhub-datatransfer-service.onrender.com/userData",
          formData
        );
        console.log("Data added successfully");
      }
      // Refresh data1 after submission
      const response = await axios.get(
        "https://linkhub-datatransfer-service.onrender.com/userData"
      );
      setData1(response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="w-1/3 mx-auto max-h-96 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Simple Form</h2>
      <form onSubmit={handleSubmit} className="text-sm">
        <div className="mb-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=" Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder=" Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
