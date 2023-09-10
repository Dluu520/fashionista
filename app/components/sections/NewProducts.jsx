"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewProducts = () => {
  return (
    <div className="flex flex-col w-full p-5 bg-beige  gap-4 ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold font-serif">News</h1>
        <Link href="/" className="underline">
          View All
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 ">
        <div className="relative flex flex-col gap-2">
          <Image
            width="400"
            height="300"
            src={
              "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <h4 className="text-2xl font-bold">Our Latest Blazers</h4>
          <Link className="underline " href="/">
            View more
          </Link>
        </div>
        <div className="relative flex flex-col gap-2">
          <Image
            width={400}
            height={300}
            src={
              "https://images.unsplash.com/photo-1521045452978-3753d26aaee4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            }
          />
          <h4 className="text-2xl font-bold">NEW: FALL COATS</h4>
          <Link className="underline " href="/">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
