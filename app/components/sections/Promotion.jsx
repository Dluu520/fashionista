import React from "react";

const Promotion = ({ sale }) => {
  return (
    <div className=" mx-auto">
      <div className="relative flex justify-center p-4 mt-10 items-center bg-red-500  mb-12">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-white z-[2]"
          style={{ clipPath: `polygon(9% 0, 10% 0, 1% 100%, 0 100%)` }}
        />
        <h2 className="text-2xl font-semibold italic ">{sale}</h2>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-white z-[2]"
          style={{ clipPath: `polygon(99% 0, 100% 0, 92% 100%, 91% 100%)` }}
        />
      </div>
    </div>
  );
};

export default Promotion;
