import React, { useState } from "react";
import logo from "./../assets/images/logo.svg";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "TV",
    },
    {
      id: 3,
      name: "Movies",
    },
    {
      id: 4,
      name: "News",
    },
    {
      id: 5,
      name: "My Stuff",
    },
    {
      id: 6,
      name: "Hubs",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 px-10 bg-gradient-to-b from-[#1e2126] to-transparent w-full z-30 absolute">
      <ul className="hidden md:flex gap-8">
        {menu.map((item) => (
          <li
            key={item.id}
            className={`
            "text-white text-[18px] hover:bg-white
         hover:text-black px-3 pb-2 py-1 ${item.id==1?"bg-gray-700 text-white" : null} rounded-md transition-all duration-500 ease-in-out"
            `}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <h2
          className="bg-gray-700 text-white font-medium flex items-center rounded-md cursor-pointer  p-3 gap-2"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? (
            <IoIosArrowDown className="mt-1" />
          ) : (
            <IoIosArrowUp className="mt-1" />
          )}
          Home
        </h2>

        {toggle ? (
          <ul className="absolute bg-gray-700 px-10 rounded-md p-3 w-[200px] m-auto left-0 right-0 ml-2 mr-auto">
            {menu.map((item) => (
             
              <li className='text-gray-400 text-[18px] 
              font-medium cursor-pointer mb-3 mt-2 
               hover:bg-gray-600 hover:text-white
              px-3  pb-2 py-1 rounded-md transition-all duration-500'>{item.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex gap-10">
        <div className="flex items-center">
          <FiSearch
            className="
        text-white text-[26px] "
          />
        </div>
        <h2 className="px-[8px] text-xl text-gray-300 border-[2px] border-white rounded-full items-center justify-center flex">
          Ni
        </h2>
        <img src={logo} alt="" className="w-[65px]" />
      </div>
    </div>
  );
};

export default Header;
