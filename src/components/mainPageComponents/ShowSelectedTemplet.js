import React from "react";
import { useMainPageData } from "./MainPageDataProvider";
import { useTempletCollections } from "./TempletCollectionsProvider";

import { MdKeyboardBackspace } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { ImMobile } from "react-icons/im";
import { CiGrid32 } from "react-icons/ci";

export default function ShowSelectedTemplet() {
  const { activeState, setActiveState } = useMainPageData();

  const {
    blue,
    green,
    purple,
    yellow,
    pink,
    pinkDark,
    yellowDark,
    greenDark,
    blueDark,
    whiteDark,
    homeActiveComponent,
    setHomeActiveComponent,
    selectedTemplet,
    setSelectedTemplet,
  } = useTempletCollections();

  const picsLookup = {
    blue: blue,
    green: green,
    purple: purple,
    yellow: yellow,
    pink: pink,
    pinkDark: pinkDark,
    yellowDark: yellowDark,
    greenDark: greenDark,
    blueDark: blueDark,
    whiteDark: whiteDark,
  };

  const pics = picsLookup[selectedTemplet] || null;

  return (
    <div className="rounded  pb-0 pt-0 mb-40 sm:w-8/12 lg:w-/12  mx-auto font-ubuntu ">
      <div className=" w-10/12 ">
        <MdKeyboardBackspace
          onClick={() => {
            setHomeActiveComponent("free");
          }}
          className="size-7 w-16 text-gray-500 border mb-2 hover:border-blue-400 rounded shadow px-3 py-1 "
        />
      </div>
      <div className="w-full px-0 overflow-hidden">
        <div className=" ">
          <div
            onClick={() => {
              setActiveState("review");
            }}
            className="flex relative imageShowParent"
          >
            <img
              src={pics[0]}
              alt=""
              className="border hidden  sm:block  hover:border-gray-700  h-full border-gray-400"
            />
            <img
              src={pics[1]}
              alt=""
              className="imageShowChild hidden opacity-50 sm:block border absolute top-0 right-[-14vw] h-[30vw] border-gray-400 hover:border-black"
            />
            <img
              src={pics[1]}
              alt=""
              className="border sm:hidden  w-full  border-gray-400 hover:border-gray-700"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 mb-0">
        <div
          onClick={() => {
            setActiveState("review");
          }}
          className="flex gap-5 justify-center mb-2 items-center w-full mx-auto rounded bg-indigo-200 hover:bg-indigo-300 text-blue-800 py-1 border"
        >
          <CiGrid32 className="size-5 font-bold " />
          <button className=" ">Preview</button>
        </div>

        <div
          onClick={() => {
            setActiveState("form");
          }}
          className="flex gap-5 justify-center items-center w-full mx-auto rounded bg-blue-500 hover:bg-blue-600 text-white py-1 border"
        >
          <button className=" ">Make a Protfolio</button>
        </div>
      </div>
    </div>
  );
}
