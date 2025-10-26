import React, { useEffect, useState } from "react";
import { ProductServices } from "../services/api";
import ShopCard from "../components/shop/ShopCard";
import Shop from "./Shop";
import SkeletonCard from "../components/common/SkeletonCard";
import { Link } from "react-router";

const Home = () => {
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
    <div>
      <Link
        className="flex hover:scale-110 duration-300 rounded-lg font-bold mt-10 py-2 items-center mx-auto justify-center text-white bg-emerald-700 w-[200px]"
        to={"/shop"}
      >
        Show All Products
      </Link>

      <div className="flex flex-wrap justify-center items-center pt-10 gap-12">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
          : values
              .slice(0, 12)
              .map((item) => <ShopCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
