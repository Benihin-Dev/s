import React, { useState, useEffect } from "react";
import InnerProjects from "./InnerProjects";
import Skills from "./Skills";

export default function Projects({ projectData, skillData }) {
  const [selecteditem, setselecteditem] = useState(1);
  
  return (
    <div className="w-full mb-5 md:mb-10 items-center">
      <div className="flex justify-center items-center ">
        <h1 className="w-4/5 md:w-2/5 h-5 mt-2 md:mt-10 border-b-2 border-blue-500"></h1>
      </div>
      <div className="w-full md:4/5 flex justify-center items-center">
        <div className="w-11/12 sm:w-4/5 flex items-center mx-auto mt-5 h-96">
          <div className=" w-full md:w-4/6">
            <ul className="flex justify-center w-full mx-auto mt-5 md:mt-10 gap-10 items-center md:w-4/5 ">
              <li
                onClick={() => {
                  setselecteditem(2);
                }}
                className={`${
                  selecteditem === 2
                    ? "text-blue-300 hover:text-blue-500 text-xl font-bold border-b-2 border-blue-500"
                    : "text-blue-300 text-xl font-bold"
                }  `}
              >
                Skills
              </li>
              <li
                onClick={() => {
                  setselecteditem(1);
                }}
                className={`${
                  selecteditem === 1
                    ? "text-blue-300 hover:text-blue-500 text-xl font-bold border-b-2 border-blue-500"
                    : "text-purple-300 text-xl font-bold"
                }  `}
              >
                Projects
              </li>
            </ul>

            <div>
              {selecteditem === 2 ? (
                <Skills skillData={skillData} />
              ) : (
                <InnerProjects projectData={projectData} />
              )}
            </div>
          </div>

          <div className=" hidden md:w-2/6  md:flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-40 w-6 hoverdance text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
