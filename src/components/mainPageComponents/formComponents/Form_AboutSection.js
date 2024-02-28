import React from "react";
import { useUserInfoCollections } from "../UserInfoProvider";

export default function Form_AboutSection() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      about: {
        ...prevData.about,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    setCurrentForm("profileSection");
  };
  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <div className="border p-5 mb-6 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
        <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
          About Section
        </h1>
        <div className=" mb-4">
          <label htmlFor="name" className="block text-sm  text-gray-500">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="First and Last"
            autoComplete="name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div className=" mb-4">
          <label htmlFor="titleName" className="block text-sm text-gray-500">
            Job Title
          </label>
          <input
            name="titleName"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Fashion Designer"
            autoComplete="titleName"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className=" mb-4">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Profile
          </label>
          <textarea
            rows={4}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 40 words"
            autoComplete="name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className=" mb-4">
          <label htmlFor="titleName" className="block text-sm text-gray-500">
            Place Your CV link
          </label>
          <input
            name="cv"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="You can upload it on your G.Drive"
            autoComplete="titleName"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="py-1 w-full border border-indigo-400 text-white hover:bg-indigo-700 bg-indigo-500 rounded px-8 ">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
