import React, { useState, useEffect } from "react";

import { Link, scrollSpy } from "react-scroll";

export default function NavBar({ aboutData }) {
  const [value, setValue] = useState(true);
  function handlemenu() {
    setValue(!value);
  }

  const [activeSection, setActiveSection] = useState("about-section");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 shadow md:shadow-none shadow-slate-50 opacity-90 sm:opacity-90 rounded-2xl bg-transparent z-10 block md:flex w-11/12  sm:w-4/5 mx-auto mt-5 justify-between items-center">
      <div className="flex mr-2 items-center justify-between">
        <img
          src={aboutData.profile}
          className="navBarImg size-9 border  bg-white items-start  rounded-full  flex justify-center overflow-hidden"
        />

        <div className="block md:hidden">
          {value === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer hover:text-yellow-500 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
                onClick={() => {
                  handlemenu();
                }}
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer hover:text-yellow-500  text-black"
              onClick={() => {
                handlemenu();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      <ul
        className={`block yellowli ${
          value
            ? "hidden md:flex w-2/3 gap-20 items-center py-2"
            : "block md:flex md:w-2/3  "
        }transparentwhite shadow-lg  px-5  relative md:gap-12 text-center md:w-2/3 rounded-3xl md:bg-transparent md:bg-opacity-80 md:items-end md:justify-around py-2`}
      >
        <li
          className={
            activeSection === "about-section"
              ? "border-b-2 border-yellow-300 "
              : ""
          }
        >
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            About
          </Link>
        </li>
        <li
          className={
            activeSection === "education-section"
              ? "border-b-2 border-yellow-300"
              : ""
          }
        >
          <Link
            to="education-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Education
          </Link>
        </li>
        <li
          className={
            activeSection === "projects-section"
              ? "border-b-2 border-yellow-300"
              : ""
          }
        >
          <Link
            to="projects-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Projects/Skills
          </Link>
        </li>
        <li
          className={
            activeSection === "contact-section"
              ? "border-b-2 border-yellow-300"
              : ""
          }
        >
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Experience
          </Link>
        </li>
      </ul>
    </div>
  );
}
