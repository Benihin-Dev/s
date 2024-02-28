import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function About({ aboutData }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const elements = document.querySelectorAll(".userProfileImg");
      const element1 = document.querySelector(".aboutUser");

      elements.forEach((element) => {
        element.classList.remove("visibleAnimation");
      });
      element1.classList.remove("upFromDown");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="block sm:flex w-4/5 mt-12 mx-auto md:mt-5 overflow-hidden">
      <div className="sm:hidden w-full flex justify-end items-center">
        <img
          src={aboutData.profile}
          className=" h-48 userProfileImg visibleAnimation items-start  mt-10  flex justify-center overflow-hidden"
        />
      </div>
      <div className="w-full aboutUser upFromDown mt-1 mt sm:mt-12 md:mt-32  lg:mt-48 xl:mt-64 sm:pl-6 md:w-7/12 ">
        <span className="text-lg text-slate-400 tracking-widest">hello...</span>
        <h1 className="text-4xl md:text-5xl text-gray-500">
          I'm{" "}
          <span className="name text-[#eeee38] tracking-normal">
            {aboutData.name}{" "}
          </span>
          <p className=" text-lg sm:text-2xl p-0 text-pink-500 w-fi tracking-widest">
            {" "}
            <ReactTyped
              strings={[aboutData.titleName + ".."]}
              typeSpeed={100}
              backSpeed={40}
              loop
            />
          </p>
          <p className=" text-justify text-xs md:text-sm text-gray-500">
            {aboutData.description}
          </p>
        </h1>
        <div className="mt-2 sm:mt-1  flex justify-end items-center">
          <a href={aboutData.cv}>
            <button className=" border rounded-2xl border-[#eeee38] hover:bg-[#eeee38]  text-black hover:text-black text-xs sm:text-normal py-1 px-3">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/12"></div>
      <img
        src={aboutData.profile}
        className="hidden sm:flex h-80 visibleAnimation profileImg userProfileImg mt-8 md:mt-28 md:w-4/12 justify-center"
      />
    </div>
  );
}
