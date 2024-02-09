import React from "react";

const Toast = ({ message, bgColor }) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center items-center m-4 ">
      <div
        className={`bg-${bgColor}-300 border text-xs rounded-md shadow-md py-1 px-4`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
