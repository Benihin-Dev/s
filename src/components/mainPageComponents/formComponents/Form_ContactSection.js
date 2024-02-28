import React, { useState } from "react";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";
import FinalLinkProviderComponent from "./FinalLinkProviderComponent";

import { useUserInfoCollections } from "../UserInfoProvider";

export default function Form_ContactSection() {
  const [componentState, setComponentState] = useState("normal");
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      contacts: {
        ...prevData.contacts,
        [name]: value,
      },
    }));
  };

  const PostUserDataOnDatabase = async () => {
    try {
      setComponentState("loading");
      const response = await axios.post(
        "https://snapfolio-server.onrender.com/snapfolio",
        userData
      );

      if (response.status === 200) {
        console.log("Data submitted successfully!", response.data);
        setComponentState("submitionFinished");
      } else {
        console.error("Error submitting data:", response.statusText);
        setComponentState("submitionFinished");
      }
    } catch (error) {
      console.error("Error:", error);
      setComponentState("submitionFinished");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    PostUserDataOnDatabase();
    setCurrentForm("finalSection");
  };

  return (
    <>
      {componentState === "loading" ? (
        <LoadingComponent />
      ) : componentState === "normal" ? (
        <form onSubmit={handleSubmit} className=" w-full">
          <div className="border p-5 mb-8 border-[#dec9ff5f] shadow-[#eeeeee57] shadow rounded relative">
            <h1 className=" absolute top-[-12px] text-sm bg-white text-gray-300">
              Contact Details
            </h1>
            <div className=" mb-3">
              <label htmlFor="contact" className="block text-sm  text-gray-500">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                placeholder="example@gmail.com"
                autoComplete="name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="mobile" className="block text-sm  text-gray-500">
                Mobile Number
              </label>
              <input
                name="phone"
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                placeholder="+96 45 456 7856"
                autoComplete="name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className=" mb-3">
              <label
                htmlFor="linkdedIn"
                className="block text-sm  text-gray-500"
              >
                LinkedIn Link
              </label>
              <input
                name="linkedin"
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                placeholder="https://www.linkedin.com/example"
                autoComplete="name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="GitHub" className="block text-sm  text-gray-500">
                GitHub Link
              </label>
              <input
                name="github"
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                placeholder="https://www.github.com/example"
                autoComplete="name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className=" mb-3">
              <label
                htmlFor="Whatsapp"
                className="block text-sm  text-gray-500"
              >
                Whatsapp
              </label>
              <input
                name="whatsapp"
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                placeholder="https://www.whatsapp.com/example"
                autoComplete="name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className=" mb-3">
              <label
                htmlFor="instagram"
                className="block text-sm  text-gray-500"
              >
                Instagram
              </label>
              <input
                name="instagram"
                type="text"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
                placeholder="https://www.instagram.com/example"
                autoComplete="name"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="w-full flex justify-end relative">
              <button
                className={` ${
                  componentState === "loading"
                    ? " text-transparent pointer-events-none"
                    : "text-gray-200"
                } w-full border border-indigo-400 py-1 mt-3  hover:bg-indigo-700 bg-indigo-500 rounded px-8 `}
              >
                Submit all Details
              </button>
            </div>
          </div>
        </form>
      ) : componentState === "submitionFinished" ? (
        <FinalLinkProviderComponent />
      ) : (
        // <LoadingComponent />

        ""
      )}
    </>
  );
}
