import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {
  MapPin,
  Facebook,
  InstagramIcon,
  Youtube,
  Linkedin,
} from "lucide-react";

import React from "react";
const Contact = () => {
  return (
    <div className="w-full bg-[#1D2E3D] p-10 lg:px-40 lg:py-14 sm:flex-col lg:flex lg:flex-row space-y-5 lg:space-y-0 items-center ">
      <div className="w-full h-1/2 lg:w-1/2">
        <div className="border-2 border-blue-200 p-10">
          <div className="text-center lg:text-start">
            <h1 className="text-white text-3xl">
              <span className="border-b-2 border-red-500">CO</span>NTACT
            </h1>
          </div>
          <div className="mt-10">
            <p className="text-gray-300 text-lg">
              For any kind of query, contact us with the details below.
            </p>
          </div>
          <div className=" flex items-center space-x-20 mt-5 ">
            <div className="">
              <BsFillTelephoneOutboundFill className="text-red-500" />
            </div>
            <div className="text-center">
              <h2 className="text-white text-lg">+91-7015574125,</h2>
              <h2 className="text-white text-lg"> +91-8810385787,</h2>
              <h2 className="text-white text-lg">+91-7206533219 ,</h2>
              <h2 className="text-white text-lg">+91-9817622697</h2>
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
          <div className="flex items-center space-x-5">
            <div>
              <MapPin className="w-5 text-red-500" />
            </div>
            <div>
              <h2 className="text-white text-lg">
                ANDi Software Solutions Panipat & Noida
              </h2>
            </div>
          </div>
          <div>
            <div className="text-red-500 text-lg mt-5">Follow us:</div>
            <div className="flex items-center space-x-4 mt-2">
              <Facebook className="text-white" />
              <InstagramIcon className="text-white" />
              <Youtube className="text-white" />
              <Linkedin className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-1/2  p-10">
        <div>
          <iframe
            className="w-full h-[400px] lg:h-[350px] "
            h-full
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.2990139901904!2d76.96429217525228!3d29.3908076492442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbd321b7550d%3A0x85c88d61864b11b3!2sANDi%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1696600015199!5m2!1sen!2sin"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
