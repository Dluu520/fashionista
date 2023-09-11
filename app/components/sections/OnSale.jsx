import Image from "next/image";
import React from "react";

const OnSale = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 ">
      <div className="flex flex-col sm:flex-row w-full justify-evenly ">
        <div className="relative flex  justify-center  ">
          <Image
            src="https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
            width={400}
            height={400}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center mt-10 sm:m-0 ">
          <Image
            // "https://zainodemo.wpcomstaging.com/wp-content/themes/zaino/assets/images/product-feature.jpg"
            src={
              "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            }
            width={250}
            height={250}
            className=""
          />
          <h2 className="text-xl font-bold p-3 underline">Canvas Backpack</h2>
          <button className="border bg-white px-3 py-1 border-black hover:cursor-pointer">
            Sale
          </button>
          <div className="flex gap-2 p-4 ">
            <strike className="font-light font-serif ">$200.00</strike>
            <p className="underline font-light font-serif  ">$179.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSale;
