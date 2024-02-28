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
          className=" h-48 userProfileImg visibleAnimation  items-start  mt-10  flex justify-center overflow-hidden"
        />
      </div>
      <div className="w-full aboutUser upFromDown mt-1 mt sm:mt-12 md:mt-32  lg:mt-48 xl:mt-64 sm:pl-6 md:w-7/12 ">
        <span className="text-lg text-slate-600 tracking-widest">hello...</span>
        <h1 className="text-4xl md:text-5xl text-slate-700">
          I'm{" "}
          <span className="name text-pink-700 tracking-normal">
            {aboutData.name}{" "}
          </span>
          <p className=" text-lg sm:text-2xl p-0 text-blue-500 w-fi tracking-widest">
            {" "}
            <ReactTyped
              strings={[aboutData.titleName + ".."]}
              typeSpeed={100}
              backSpeed={40}
              loop
            />
          </p>
          <p className=" text-xs md:text-sm text-pink-400">
            {aboutData.description}
          </p>
        </h1>
        <div className="mt-2 sm:mt-1  flex justify-end items-center">
          <a href={aboutData.cv}>
            <button className=" border rounded-2xl border-pink-400 hover:bg-pink-400 text-slate-600 hover:text-white text-xs sm:text-normal py-1 px-3">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/12"></div>
      <img
        src={aboutData.profile}
        className="hidden sm:flex h-52 visibleAnimation profileImg userProfileImg mt-8 md:mt-28 md:w-4/12 justify-center overflow-hidden"
      />
    </div>
  );
}
