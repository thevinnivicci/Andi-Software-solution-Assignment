import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full h-auto space-y-2 bg-red-600">
      <div className="flex items-center justify-center gap-3 p-1">
        <BsWhatsapp />
        <h1 className="text-white font-Arial">
          +91- +91-7015574125, +91-8810385787
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-3 p-1">
        <button className="bg-red-800 rounded-sm text-white px-5 py-1 mb-2 mt-2">
          Toll Free Panel
        </button>
        <button className="bg-red-800 mx-5 rounded-sm text-white px-5 py-1 mb-2 mt-2">
          Missed Call Panel
        </button>
        <button className="bg-red-800 rounded-sm mx-5 text-white px-5 py-1 mt-2 mb-2">
          SMS Panel
        </button>
        <button className="bg-red-800 mx-5 rounded-sm text-white px-5 py-1 mt-2 mb-2">
          Whatsapp Panel
        </button>
        <button className="bg-red-800 mx-5 rounded-sm text-white px-5 py-1 mt-2 mb-2">
          Payment
        </button>
      </div>
    </div>
  );
};

export default Header;
