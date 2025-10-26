import React, { useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";
import Button from "../common/Button";

const ShopCard = ({ item }) => {
  const [hid, setHid] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setHid(true)}
        onMouseLeave={() => setHid(false)}
        className="relative w-[270px] h-[350px] flex flex-col justify-center gap-5"
      >
        {/* Top badge and icons */}
        <div className="absolute top-3 flex gap-[150px]  px-3">
          <p className="bg-[#DB4444] h-7 rounded-md text-sm font-poppins flex items-center px-3 text-white">
            -30%
          </p>
          <div className="flex flex-col items-center justify-center gap-1">
            <button className="cursor-pointer hover:scale-110 duration-300 p-1 bg-white rounded-full">
              <FaRegHeart className="text-[20px]" />
            </button>
            <button className="cursor-pointer hover:scale-110 duration-300 p-1 bg-white rounded-full">
              <IoEyeOutline className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Product image */}
        <Link
          to={`/detail/:id`}
          className="w-full py-[35px] px-10 rounded-md bg-[#f5f5f5]"
        >
          <img
            className="w-[172px] h-[172px] object-contain mx-auto"
            src={item.images[0]}
            alt={item}
          />
        </Link>

        {/* Add to Cart button */}
        {/* <button
          
          className={`${
            hid
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3 pointer-events-none"
          } transition-all duration-300 cursor-pointer absolute left-0 right-0 bottom-[27%] py-2 rounded-b-xl text-[16px] font-poppins font-medium bg-black text-white`}
        >
          Add To Cart
        </button> */}
        <Button variant="third" size="myCart">
          Add To Cart
        </Button>

        {/* Product Info */}
        <div>
          <h3 className="  font-poppins font-medium text-[16px] truncate">
            title
          </h3>
          <p className="font-poppins font-medium text-[16px] text-[#DB4444]">
            $20
            <span className="line-through ml-3">$40</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex text-[#FFAD33]">math</div>
            <p>(18)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
