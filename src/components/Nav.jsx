import React from "react";
import logo from "../assets/logo.jpg";
import { useId } from "react";
import { Menu } from "lucide-react";

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
      <div className="w-full">
        <div className="flex items-center justify-center p-2 space-x-5 lg:space-x-10">
          <div>
            <img src={logo} alt="" className="w-[70px]" />
          </div>
          <div className="flex invisible lg:visible lg:space-x-10">
            {navItem.map((item) => (
              <h2 key={id}>{item.content}</h2>
            ))}
          </div>
          <div className="lg:invisible">
            <Menu />
          </div>
        </div>
        <marquee behavior="" direction="" className="text-xl text-blue-500">
          Freelance/Franchise/Reseller Required in all major cities
        </marquee>
      </div>
    </>
  );
};

export default Nav;
