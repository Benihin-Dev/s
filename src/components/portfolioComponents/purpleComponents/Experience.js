import React from "react";

export default function Experience({ experienceData }) {
  return (
    <div className="w-full md:w-4/5  pt-2 md:pt-2 mx-auto items-center">
      <div className="flex justify-center items-center "></div>
      <div className="w-full md:4/5 mx-auto block md:flex justify-center items-center">
        <div className=" flex my-5 md:my-0 md:w-2/6 justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-36 w-12  text-orange-300 hoverdance"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>

        <div className="w-11/12 mx-auto justify-center flex items-center flex-col">
          <div className=" w-full flex justify-end">
            <h1 className="text-orange-400 text-xl w-3/5 pb-1 border-b-2 border-purple-200 text-right pt-2 md:pt-10">
              Work Experience{" "}
            </h1>
          </div>

          <div className=" w-full flex justify-end">
            <div className="w-full sm:w-11/12 sm:grid-cols-2  sm:grid h-96 overflow-x-hidden overflow-y-scroll experienceComponent">
              {experienceData.map((data) => (
                <div key={data._id} className="w-11/12 rounded-2xl my-4 md:mx-5 border md:min-h-24 md:max-h-52 overflow-hidden hover:border-slate-400 border-purple-200 shadow-lg pb-2 sm:pb-8 hover:shadow-purple-300">
                  <h1 className="tracking-widest bg-purple-400 pt-5 px-3 text-white">
                   {data.title}
                  </h1>
                  <span className="text-xs text-orange-400 px-3 tracking-wider">
                    {data.year}
                  </span>
                  <p className=" text-sm px-3 text-slate-500">
                   {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
