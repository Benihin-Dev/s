import React from "react";
import { useUserInfoCollections } from "../UserInfoProvider";

export default function Form_ProjectsSection() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      eduSkills: {
        ...prevData.eduSkills,
        projects: prevData.eduSkills.projects.map((pro, i) =>
          i === index ? { ...pro, [name]: value } : pro
        ),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    setCurrentForm("experienceSection");
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <div className="border p-5 mb-8 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
        <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
          Project Section
        </h1>
        <div className=" mb-3">
          <label htmlFor="JobTitle" className="block text-sm  text-gray-500">
            Title of the Project
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Project Name"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Project
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="JobTitle" className="block text-sm  text-gray-500">
            Project Link
          </label>
          <input
            name="projectLink"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="https://project.com"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="JobTitle" className="block text-sm  text-gray-500">
            Title of the Project
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Project Name"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Project
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="JobTitle" className="block text-sm  text-gray-500">
            Project Link
          </label>
          <input
            name="projectLink"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="https://project.com"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="JobTitle" className="block text-sm  text-gray-500">
            Title of the Project
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Project Name"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Project
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="JobTitle" className="block text-sm  text-gray-500">
            Project Link
          </label>
          <input
            name="projectLink"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="https://project.com"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="py-1 mt-2 w-full border border-indigo-400 text-white hover:bg-indigo-700 bg-indigo-500 rounded px-8 ">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
