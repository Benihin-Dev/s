import React, { useState } from "react";
import axios from "axios";

const Table = ({ data1, setData1, formData, setFormData }) => {
  const handleDelete = async (name) => {
    try {
      await axios.delete("https://linkhub-datatransfer-service.onrender.com/userData/" + name);
      console.log("Data Deleted successfully");
      const response = await axios.get("https://linkhub-datatransfer-service.onrender.com/userData");
      setData1(response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleUpdate = (data) => {
    // Set form data with the data from the row
    setFormData({
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  const Row = ({ data1, setData1 }) => {
    if (data1.length === 0) {
      return (
        <tr className="text-sm  text-slate-600 text-center">
          <td colSpan="5">Table is Empty</td>
        </tr>
      );
    } else {
      return data1.map((data, index) => {
        return (
          <tr key={index} className="border-b">
            <td className="px-2 text-xs py-2">{data.firstName}</td>
            <td className="px-2 text-xs py-2">{data.lastName}</td>
            <td className="px-2 text-xs py-2">{data.email}</td>
            <td className="px-2 text-xs py-2">{data.password}</td>
            <td className="px-2 text-xs py-2">{data.confirmPassword}</td>
            <td className="px-2 text-xs py-2">
              <button
                onClick={() => {
                  handleDelete(data._id);
                }}
                className="px-2 rounded-2xl border hover:border-red-200 border-red-100"
              >
                ❌
              </button>
              <button
                onClick={() => {
                  handleUpdate(data);
                }}
                className="px-2 rounded-2xl border hover:border-red-200 border-red-100"
              >
                〽️
              </button>
            </td>
          </tr>
        );
      });
    }
    // Use return statement and add key prop to each <tr>
  };

  return (
    <div className="w-2/3 mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg  font-semibold">Details of Customers</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 text-sm">
            <th className="px-2 text-left py-2">First Name</th>
            <th className="px-2 text-left py-2">Last Name</th>
            <th className="px-2 text-left py-2">Email</th>
            <th className="px-2 text-left py-2">Password</th>
            <th className="px-2 text-left py-2">Confirm Password</th>
          </tr>
        </thead>
        <tbody>
          <Row data1={data1} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
