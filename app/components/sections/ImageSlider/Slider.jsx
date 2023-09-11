"use client";
import Image from "next/image";
import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { SliderData } from "./SliderData";

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
    <div id="Category" className="max-w-[1240px] mx-auto my-auto">
      <h1 className="text-2xl font-bold text-center p-4">Featured</h1>
      <div className="relative flex justify-center p-4 m-10">
        {SliderData.map((slide, index) => {
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
              {index === current && (
                <div class="relative flex justify-center gap-5 h-[40dvh] sm:h-[80dvh] ">
                  <FaArrowCircleLeft
                    onClick={prevSlide}
                    className="absolute top-[50%] left-[10px] text-black/70 cursor-pointer select-none z-[2]"
                    size={50}
                  />
                  <Image
                    width="500"
                    height="200"
                    objectFit="cover"
                    src={slide.image}
                  />
                  <div className="absolute top-0 left-0 bottom-0  hover:bg-black/30 w-full flex justify-center items-center group ease-in-out duration-600">
                    <button className="group-hover:block text-2xl text-white font-bold  border-4 p-4 w-[50%] ">
                      {slide.header}
                    </button>
                  </div>
                  <FaArrowCircleRight
                    onClick={nextSlide}
                    className="absolute top-[50%] right-[10px] text-black/70 cursor-pointer select-none z-[2]"
                    size={50}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
