// import React from "react";

import { useEffect, useState } from "react";
import ShopCard from "../components/shop/ShopCard";
import SkeletonCard from "../components/common/SkeletonCard";
import { ProductServices } from "../services/api";

const Shop = () => {
  const [values, setalues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const res = await ProductServices.products();
        setalues(res.products);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(values);
  return (
    <div className="pb-[140px]">
      <div className="container">
        <div className="mainDiv">
          <div className="flex gap-4 items-center rounded-sm">
            <div className="w-5 h-10 bg-[#DB4444]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">
              This Month
            </h3>
          </div>

          <h3 className="mt-12 mb-10 text-[36px] font-inter font-semibold">
            Explore Our Products
          </h3>

          <div className="flex flex-wrap justify-center items-center pt-10 gap-12">
            {loading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : values
                  .slice(0, 12)
                  .map((item) => <ShopCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
