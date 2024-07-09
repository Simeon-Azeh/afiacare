import React, { useState } from "react";
import logo from "./../assets/images/afiacare.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Services", link: "/" },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center justify-between gap-80">
        <img src={logo} className="w-[60px] md:w-[80px] object-cover" alt="" />
        <div className="hidden md:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} />
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HiBars3BottomRight
            size={30} className="cursor-pointer absolute text-[#39827a] top-7 right-7"
          />
          {toggle ? (
            <div className="absolute top-20 right-12 w-[80%]  bg-[#ffffff] p-5 border rounded-md">
              {menu.map((item) => (
                <HeaderItem
                  key={item.name}
                  name={item.name} />
              ))}
              <div className="items-center gap-2 flex mt-5 justify-center">
                <button className="bg-[#39827a] w-[100px] md:w-[120px] rounded-md font-medium px-3 py-2 hover:bg-[#1D6559] duration-300">
                  Login
                </button>
                <button className="bg-[#ffffff] w-[100px] text-[#39827a] md:w-[120px] rounded-md font-medium px-3 py-2 border hover:bg-[#39827a] hover:text-[#ffffff] duration-300">
                  Register
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="items-center gap-5 hidden md:flex">
        <button className="bg-[#39827a] w-[100px] md:w-[120px] rounded-md font-medium px-3 py-2 hover:bg-[#1D6559] duration-300">
          Login
        </button>
        <button className="bg-[#ffffff] w-[100px] text-[#39827a] md:w-[120px] rounded-md font-medium px-3 py-2 border hover:bg-[#39827a] hover:text-[#ffffff] duration-300">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
