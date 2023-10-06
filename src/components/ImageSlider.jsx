import React, { useState } from "react";

function ImageSlider({ imageUrl }) {
  const [ImageIndex, setImageIndex] = useState(0);
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  }
  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrl.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div className="relative w-full lg:mb-20">
      <img
        src={imageUrl[ImageIndex]}
        alt="banner"
        className="w-[100%] lg:p-10"
      />

      <div className="flex space-x-5 justify-center mt-[-12px] lg:mt-[-80px] ">
        <div
          onClick={showPrevImage}
          className="w-2 h-2 border-2 border-gray-500 bg-gray-300 rounded-full flex justify-center items-center text-gray-300 cursor-pointer"
        >
          .
        </div>
        <div
          onClick={showNextImage}
          className="w-2 h-2 border-2 border-gray-500 bg-gray-300 rounded-full flex justify-center items-center text-gray-300 cursor-pointer"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
