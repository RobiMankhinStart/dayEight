import React, { useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";
import cardImg from "../../assets/controller.png";

const ProductCard = () => {
  const [hid, setHid] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setHid(true)}
        onMouseLeave={() => setHid(false)}
        className="relative w-[200px] md:w-[270px]  h-[350px] flex flex-col justify-center gap-5 "
      >
        <div className=" absolute top-6 flex gap-[90px] md:gap-[150px] px-3">
          <p className="bg-[#DB4444] h-7 rounded-md text-sm font-poppins flex items-center px-3 text-white">
            -30%
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <button className="cursor-pointer hover:scale-110 duration-300 p-1 bg-white rounded-full">
              <FaRegHeart className="text-[20px]" />
            </button>
            <button className="cursor-pointer hover:scale-110 duration-300 p-1 bg-white rounded-full">
              <IoEyeOutline className="text-[20px]" />
            </button>
          </div>
        </div>
        <Link
          to={`/detail/:id`}
          className="w-full flex py-[35px] px-10 rounded-md bg-[#f5f5f5]"
        >
          <img
            className=" w-[142px] md:w-[170px]"
            src={cardImg}
            alt="slider_IMG"
          />
        </Link>

        <div>
          <h3 className="font-poppins font-medium text-[16px]">
            HAVIT HV-G92 Gamepad
          </h3>
          <p className="font-poppins font-medium text-[16px] text-[#DB4444]">
            $120
            <span className="line-through ml-3">$160</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex text-[#FFAD33]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>(88)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
