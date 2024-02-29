import React from "react";
import {  useEffect } from "react";

export default function InnerProjects({ projectData }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-child2");
      elements.forEach((element) => {
        element.classList.remove("slide-in");
      });
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`w-full md:mx-0 k animate-parent2 flex items-center   h-80`}
      >
        {projectData.map((data,index) => (
          <div
            key={index}
            className="animate-child2 slide-in min-w-52 max-w-80 mx-4 md:min-w-64 pb-4 px-5 rounded-2xl hover:border-green-400 border border-green-300 shadow-sm shadow-green-200 hover:shadow-green-300"
          >
            <div className="flex mx-auto w-full my-3 justify-between">
              <div>
                <h2 className=" font-bold text-lg tracking-wider  text-green-500">
                  {data.title}
                </h2>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-slate-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                />
              </svg>
            </div>
            <h2 className=" text-xs text-slate-200">{data.description}</h2>
            <div className="w-full text-right">
              {" "}
              <a
                href={data.projectLink}
                className=" text-right leading-3 text-white bg-green-500 px-2 rounded-md text-xs hover:bg-green-600"
              >
                more..
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
