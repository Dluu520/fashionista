import React from "react";

const Hero = ({ title, message, button }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-image">
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]"
        style={{ clipPath: `polygon(86% 0, 100% 0, 14% 100%, 0% 100%)` }}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5  text-white z-[2]">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]"
          style={{ clipPath: `polygon(100% 24%, 100% 100%, 36% 100%, 0 100%)` }}
        />
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">{button}</button>
      </div>
    </div>
  );
};

export default Hero;
