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
          <div className="">
            <h2>QUICK LINKS</h2>
            <p>About Us</p>
            <p>Contact</p>
            <p>Shipping</p>
          </div>
          <div>
            <h2>SHOP</h2>
            <p>New Arrivals</p>
            <p>Bestsellers</p>
            <p>Collections</p>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl">FASHIONISTA</h1>
    </div>
  );
};

export default Footer;
