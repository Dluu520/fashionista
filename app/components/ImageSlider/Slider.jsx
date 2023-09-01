"use client";
import Image from "next/image";
import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="Category" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Search by Category</h1>
      <div className="relative flex justify-center p-4 scale-x-[-1]">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              class=""
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000 "
                  : "opacity-0 "
              }
            >
              {" "}
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[50px] text-black/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  width="500"
                  height="200"
                  objectFit="cover"
                  src={slide.image}
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[50px] text-black/70 cursor-pointer select-none z-[2]"
                size={50}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
