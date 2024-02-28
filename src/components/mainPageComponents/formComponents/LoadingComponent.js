import React from "react";
import { ReactTyped } from "react-typed";

export default function LinkProvideSection() {
  return (
    <div>
      <div className=" size-32 circleLoading mx-auto rounded-full  relative">
        <div className="absolute size-32 top-[-6px] left-[-6px]  circleLoading2 mx-auto rounded-full"></div>
      </div>
      <div className="  w-full mx-auto text-center mt-20">
        <p className=" text-gray-700">Please Wait..</p>
        <p className=" mt-10 text-indigo-500">
          <ReactTyped
            strings={[" Your Protfolio is in a Developing Stage.."]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
        </p>
        <p className=" text-indigo-300">It's take few minutes</p>
      </div>
    </div>
  );
}
