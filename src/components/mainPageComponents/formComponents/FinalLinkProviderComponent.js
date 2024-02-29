import React, { useState } from "react";
import { useTempletCollections } from "../TempletCollectionsProvider";
import { useUserInfoCollections } from "../UserInfoProvider";
import { FaRegCopy } from "react-icons/fa";
import clipboardy from "clipboardy";

export default function FinalLinkProviderComponent() {
  const { selectedTemplet } = useTempletCollections();
  const [copyIconColour, setcopyIconColour] = useState("text-indigo-600 ");
  const { setCurrentForm, userData } = useUserInfoCollections();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <div className="border p-5 mb-8 border-[#dec9ff5f] shadow-[#8d8d8d] shadow rounded relative">
        <div className=" mb-3 relative">
          <p className=" my-5 text-indigo-500 text-xl">
            Congratulation, Your Portfolio website has been created
            Successfully!..
          </p>
          <label htmlFor="contact" className="block text-sm  text-gray-500">
            Your Portfolio Link
          </label>
          <div className=" flex justify-center items-center">
            <input
              name="email"
              type="text"
              className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 sm:text-sm"
              autoComplete="name"
              readOnly
              value={`https://snap-folio-flfvk6cyc-benihins-projects.vercel.app/${selectedTemplet}/${userData.about.userid}`}
            />
            <FaRegCopy
              onClick={() => {
                const linkToCopy = `https://snap-folio-flfvk6cyc-benihins-projects.vercel.app/${selectedTemplet}/${userData.about.userid}`;
                clipboardy
                  .write(linkToCopy)
                  .then(() => {
                    setcopyIconColour(" text-indigo-300");
                  })
                  .catch((error) => {
                    console.error("Error copying link:", error);
                    alert("Failed to copy link. Please try again.");
                  });
              }}
              className={`${copyIconColour} py-1 px-1 size-8`}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
