import React from "react";
import logo from "../assets/logo.jpg";
import { useId } from "react";

const Nav = () => {
  const navItem = [
    {
      id: 1,
      content: "Product &Services",
    },
    {
      id: 2,
      content: "Digital Marketing",
    },
    {
      id: 3,
      content: "Cloud Software",
    },
    {
      id: 4,
      content: "Our Clients",
    },
    {
      id: 5,
      content: "Our Partner",
    },
    {
      id: 6,
      content: "Contact us",
    },
  ];
  const id = useId();
  return (
    <>
      <div className="w-full flex justify-center gap-20 p-2">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-4 items-center">
          <h2 className="bg-red-500 p-2">Home</h2>
          {navItem.map((item) => (
            <h2 className="text-lg hover:bg-gray-100 " key={item.id}>
              {item.content}
            </h2>
          ))}
        </div>
      </div>
      <div className="w-full">
        <marquee behavior="" direction="" className="text-xl text-blue-500">
          Freelance/Franchise/Reseller Required in all major cities
        </marquee>
      </div>
    </>
  );
};

export default Nav;
