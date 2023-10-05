import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import React from "react";
const Contact = () => {
  return (
    <div className="w-full bg-[#1D2E3D] p-40 flex ">
      <div className="w-1/2  h-1/2">
        <div className="border-2 border-blue-200 p-20">
          <div className="">
            <h1 className="text-white text-3xl">
              <span className="border-b-2 border-red-500">CO</span>NTACT
            </h1>
          </div>
          <div className="mt-10">
            <p className="text-gray-300 text-lg">
              For any kind of query, contact us with the details below.
            </p>
          </div>
          <div className=" flex items-center space-x-5 mt-5 ">
            <div className="">
              <BsFillTelephoneOutboundFill className="text-red-500" />
            </div>
            <div>
              <h2 className="text-white text-lg">
                +91-7015574125, +91-8810385787,
              </h2>
              <h2 className="text-white text-lg">
                +91-7206533219 , +91-9817622697
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div>
              <BsFillEnvelopeFill className="text-red-500  " />
            </div>
            <div>
              <h2 className="text-white text-lg  ">
                andisoftwaresolutions@gmail.com
              </h2>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-1/2  h-1/2"></div>
    </div>
  );
};

export default Contact;
