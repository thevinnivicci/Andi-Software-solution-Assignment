import React from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.jpg";
import ImageSlider from "./ImageSlider";
const Hero = () => {
  const Banner = [banner1, banner2];

  return <ImageSlider imageUrl={Banner} />;
};

export default Hero;
