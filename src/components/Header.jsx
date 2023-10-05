import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full h-[100px] bg-red-600">
      <div className="flex items-center justify-center gap-3 p-1">
        <BsWhatsapp />
        <h1 className="text-white font-Arial">
          +91- +91-7015574125, +91-8810385787
        </h1>
      </div>
      <div className="w-full flex items-center justify-center mt-3">
        <button className="bg-red-800 mx-5 text-white px-5 py-1">
          Toll Free Panel
        </button>
        <button className="bg-red-800 mx-5 text-white px-5 py-1">
          Missed Call Panel
        </button>
        <button className="bg-red-800 mx-5 text-white px-5 py-1">
          SMS Panel
        </button>
        <button className="bg-red-800 mx-5 text-white px-5 py-1">
          Whatsapp Panel
        </button>
        <button className="bg-red-800 mx-5 text-white px-5 py-1">
          Payment
        </button>
      </div>
    </div>
  );
};

export default Header;
