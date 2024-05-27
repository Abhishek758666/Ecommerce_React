import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import Instance from "../utils/Instance";
import { useParams } from "react-router-dom";
import Topnav from "../Components/Topnav";
import Navbar from "../Components/Navbar";
import Loader from "./Loader";

const SingleProducts = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = async () => {
    const response = await Instance.get(`products/${id}`);
    setSingleProduct(response.data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return singleProduct ? (
    <>
      <Topnav />
      <Navbar />
      <div className="max-w-screen-xl flex gap-10 mt-10 mx-auto">
        <div className="image w-[50%] h-[70vh] overflow-hidden">
          <img
            src={`${singleProduct.images[0]}`}
            alt=""
            className="object-center h-[100%] object-cover"
          />
        </div>
        <div className="details w-[50%] flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-black w-[60%]">{singleProduct.title}</h1>
          <span className="font-semibold text-zinc-400">
            Category: {singleProduct.category}
          </span>
          <p>{singleProduct.description}</p>
          <div className="btns flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              Price: {singleProduct.price}$
            </h1>
            <button className="flex items-center gap-2 bg-[#D10024] text-white px-5 py-2 rounded-lg">
              <HiShoppingCart className="text-xl" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default SingleProducts;
