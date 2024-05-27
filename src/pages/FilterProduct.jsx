import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import Instance from "../utils/Instance";
import { Link, useParams } from "react-router-dom";
import Topnav from "../Components/Topnav";
import Navbar from "../Components/Navbar";
import Loader from "./Loader";
import noImg from "/noImg.png";
import SecLoader from "../Components/SecLoader";

const FilterProduct = () => {
  const [filterProducts, setFilterProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cate } = useParams();

  const getProductbyCategory = async () => {
    setLoading(true);
    try {
      const response = await Instance.get(`/products/category/${cate}`);
      setFilterProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductbyCategory();
  }, [cate]); // Add cate as a dependency

  return (
    <div>
      <Topnav />
      <Navbar />
      {loading ? (
        <SecLoader />
      ) : (
        <div className="max-w-screen-xl mx-auto products text-center flex flex-wrap gap-10 justify-center mt-10">
          {filterProducts.map((p, i) => (
            <Link
              to={`/products/${p.id}`}
              className="card w-[17rem] min-h-[15rem] p-2 bg-zinc-100 flex flex-col justify-between"
              key={i}
            >
              <div className="image max-h-[18rem] flex justify-center items-center overflow-hidden">
                <img
                  src={`${p.images[0]}`}
                  className="object-cover h-full object-center"
                />
              </div>
              <h1>{p.title}</h1>
              <h2 className="text-xl text-center text-[#D10024] font-bold">
                {p.price}$
              </h2>
              <div className="btns flex justify-between">
                <button className="flex justify-center items-center rounded-full hover:text-white hover:bg-[#D10024] duration-300 text-xl border-[1px] bg-white h-10 w-10">
                  <HiShoppingCart />
                </button>
                <button className="flex justify-center items-center rounded-full hover:text-white hover:bg-[#D10024] duration-300 text-xl border-[1px] bg-white h-10 w-10">
                  <IoIosHeart />
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterProduct;
