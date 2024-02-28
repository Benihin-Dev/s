import React, { useState, useEffect } from "react";
import { useMainPageData } from "./MainPageDataProvider";
import { useTempletCollections } from "./TempletCollectionsProvider";

import FreeTemplets from "./FreeTemplets";
import PremiumTemplets from "./PremiumTemplets";
import ShowSelectedTemplet from "./ShowSelectedTemplet";

export default function HomePage() {
  const { activeState, setActiveState } = useMainPageData();
  const {
    homeActiveComponent,
    setHomeActiveComponent,
    selectedTemplet,
    setSelectedTemplet,
  } = useTempletCollections();

  const [isHover, setIsHover] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  // console.log(previewMood);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="mx-auto px-3 sm:px-5 overflow-hidden h-screen pt-20 sm:w-4/5  relative">
      <ul
        className={`${
          homeActiveComponent === "templetSelected" ? "hidden" : ""
        } flex   font-ubuntu`}
      >
        <li
          onClick={() => {
            setHomeActiveComponent("free");
          }}
          className={`${
            homeActiveComponent === "free"
              ? "border-[#6995e0d1]  border-b-4"
              : "border-transparent"
          } border-b-4 border-[#ffffff9c]  px-5 pb-2 text-[#063991] hover:border-[#6994e0e1] duration-200`}
        >
          Free
        </li>
        <li
          onClick={() => {
            setHomeActiveComponent("premium");
          }}
          className={`${
            homeActiveComponent === "premium"
              ? "border-orange-300  border-b-4"
              : ""
          } border-b-4 border-[#ffffff9c]  px-5 pb-2 text-orange-400 hover:border-orange-300 duration-200`}
        >
          Premium
        </li>
      </ul>
      <div
        className={`${
          homeActiveComponent === "free"
            ? "pt-8 border-t"
            : homeActiveComponent === "premium"
            ? "pt-8 border-t"
            : ""
        }    h-screen scrollbarSize overflow-auto relative `}
      >
        {homeActiveComponent === "free" ? (
          <FreeTemplets />
        ) : homeActiveComponent === "premium" ? (
          <PremiumTemplets />
        ) : homeActiveComponent === "templetSelected" ? (
          <ShowSelectedTemplet />
        ) : (
          ""
        )}
      </div>
      <div className=" absolute top-1 left-0 bgimage"></div>
    </div>
  );
}
