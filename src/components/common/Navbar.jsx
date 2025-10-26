import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="py-7 bg-[#5a3939] lg:block hidden">
      <div className="container">
        <div className="mainRow flex items-center justify-between">
          <h2 className="text-white  text-[36px] font-dmSans font-bold">
            <span className="text-gray-300">R</span>o
            <span className="text-gray-300">B</span>i
          </h2>
          <div className="flex items-center gap-10">
            <Link
              to={"/shop"}
              className="hover:text-gray-300 hover:scale-105 duration-300 text-[18px] font-dmSans font-normal text-white"
            >
              Shop
            </Link>
            {/* <button className="hover:text-gray-300 hover:scale-105 duration-300 text-[18px] font-dmSans font-normal text-white">
              Services
            </button>
            <button className="hover:text-gray-300 hover:scale-105 duration-300 text-[18px] font-dmSans font-normal text-white">
              Contact me
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
