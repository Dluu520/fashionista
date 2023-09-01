"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const [textColor, setTextColor] = React.useState("white");
  const handleNav = () => {
    setNav(!nav);
  };

  React.useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0  w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Fashionista
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ">
          <li className="p-4 ">
            <Link href="/men">Shop</Link>
          </li>
          <li className="p-4 ">
            <Link href="/women">Wishlist</Link>
          </li>
          <li className="p-4 ">
            <Link href="/teens">Cart</Link>
          </li>
          <li className="p-4 ">
            <Link href="/search">Search</Link>
          </li>
        </ul>
        {/* Mobile Buttons */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose
              size={20}
              style={{ color: `${textColor}` }}
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenu
              size={20}
              style={{ color: `${textColor}` }}
            ></AiOutlineMenu>
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bototm-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bototm-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/men">SHOP</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/women">Wishlist</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/teens">Cart</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
