import React from "react";
import { useUserInfoCollections } from "../UserInfoProvider";

export default function Form_SkillsSection() {
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      eduSkills: {
        ...prevData.eduSkills,
        skills: prevData.eduSkills.skills.map((ski, i) =>
          i === index ? { ...ski, [name]: value } : ski
        ),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    setCurrentForm("projectSection");
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <div className="border p-5 mb-4 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
        <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
          Skills Section
        </h1>
        <div className=" mb-3">
          <label htmlFor="SkillTitle" className="block text-sm  text-gray-500">
            Skill Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="JavaScript"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Skill
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
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="SkillTitle" className="block text-sm  text-gray-500">
            Skill Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="First Aid"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Skill
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            onChange={(e) => handleChange(e, 1)}
            required
          />
        </div>
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="SkillTitle" className="block text-sm  text-gray-500">
            Skill Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="PC Gamming"
            autoComplete="name"
            required
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Skill
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
        <div className="mx-auto border-indigo-200 border-b mt-7 w-3/5 shadow"></div>

        <div className="mt-5 mb-3">
          <label htmlFor="SkillTitle" className="block text-sm  text-gray-500">
            Skill Title
          </label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Creativity"
            autoComplete="name"
            onChange={(e) => handleChange(e, 3)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="description" className="block text-sm  text-gray-500">
            Description about your Skill
          </label>
          <textarea
            rows={2}
            name="description"
            type="text"
            className="mt-1 block resize-none w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
            placeholder="Minimum 10 words"
            autoComplete="name"
            onChange={(e) => handleChange(e, 3)}
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
