import React from "react";
import banner from "../assets/banner1.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <img src={banner} alt="banner1" className="w-[85%]" />
    </div>
  );
};

export default Hero;
