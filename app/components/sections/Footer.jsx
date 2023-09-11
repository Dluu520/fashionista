import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex  flex-col justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-5 p-10">
        <div className="flex flex-col gap-10 p-10">
          <div>
            <h5> 10% off your first order</h5>
            <p>Subscribe to our mailing list for 10% off your first order.</p>
          </div>
          <div>
            <h5> 30 days returns</h5>
            <p>Shop with certainty with our 30 day returns policy.</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-row gap-10 p-10">
          <div className="flex flex-col justify-center items-center">
            <h2>QUICK LINKS</h2>
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Shipping</Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2>SHOP</h2>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Bestsellers</Link>
            <Link href="/">Collections</Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2>FOLLOW US</h2>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Pinterest</Link>
          </div>
        </div>
      </div>
      <h1 className="text-2xl">FASHIONISTA</h1>
    </div>
  );
};

export default Footer;
