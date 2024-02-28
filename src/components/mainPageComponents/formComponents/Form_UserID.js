import React, { useState } from "react";
import { useUserInfoCollections } from "../UserInfoProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form_UserID() {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userIdState, setUserIdState] = useState(false);
  const { currentForm, setCurrentForm, userData, setUserData } =
    useUserInfoCollections();
  const [userid, setUserId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userid) {
      console.log("Type Anything");
      return;
    } else {
      try {
        setLoading(true);
        const response1 = await axios.get(
          `https://snapfolio-server.onrender.com/snapfolio/${userid}`
        );
        const fetchedUserData = await response1.data;
        if (fetchedUserData !== null) {
          setLoading(false);
          setUserIdState(true);
          console.log(fetchedUserData);
        } else {
          setLoading(false);
          console.log("No Data under the UID");
          setUserData((prevData) => ({
            ...prevData,
            about: {
              ...prevData.about,
              userid: userid,
            },
          }));
          setCurrentForm("aboutSection");
          // console.log(userData);
        }
      } catch (error) {
        console.error("Error fetching guest user data:", error);
      }
    }
    // navigate("/guest-link-show", { state: { fetchedGuestUserData } });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" w-full mt-10">
        <div className="border p-5 mb-6 border-indigo-200 shadow-[#eeeeee57] shadow rounded relative">
          <div className=" mb-4 ">
            <label
              htmlFor="description"
              className="block text-lg  text-gray-400"
            >
              Please make a Unique UserId for your Protfolio !..
            </label>
            <input
              name="userid"
              type="text"
              className={` ${
                userIdState === true ? " border-red-300" : " border-gray-300"
              } ${
                loading && " pointer-events-none"
              } mt-1 block w-full  px-3 py-2 border  rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm`}
              placeholder="#Unique name"
              autoComplete="titleName"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-full flex justify-end relative">
            <button
              className={` ${
                loading === true
                  ? "text-transparent pointer-events-none"
                  : "text-white"
              } py-1 w-full border  border-indigo-400  hover:bg-indigo-700 bg-indigo-500 rounded px-8 `}
            >
              Create
            </button>
            {loading && (
              <div className="flex justify-center items-center w-8 h-5 absolute bottom-[20%] left-[45%]">
                <div className=" w-2 bg-white border border-indigo-500 rounded-md loadingChild"></div>
                <div className=" w-2 bg-white border border-indigo-500 rounded-md loadingChild"></div>
                <div className=" w-2 bg-white border border-indigo-500 rounded-md loadingChild"></div>
                <div className=" w-2 bg-white border border-indigo-500 rounded-md loadingChild"></div>
                <div className=" w-2 bg-white border border-indigo-500 rounded-md loadingChild"></div>
              </div>
            )}
          </div>
          {userIdState && (
            <h1 className=" absolute top-[-25px] text-red-500">
              Try Different UserID !..
            </h1>
          )}
        </div>
      </form>
    </>
  );
}
