import React, { useEffect, useRef, useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import Instance from "../utils/Instance";
import { useParams } from "react-router-dom";
import Topnav from "../Components/Topnav";
import Navbar from "../Components/Navbar";
import Loader from "./Loader";
import Footer from "../Components/Footer";
import { CiHeart } from "react-icons/ci";

const SingleProducts = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const imgcontainer = useRef(null);

  const changeimage = (e) => {
    const src = e.target.getAttribute("src");
    imgcontainer.current.removeAttribute("src");
    imgcontainer.current.setAttribute("src", src);

    // console.log(imgcontainer.current);
  };

  const getSingleProduct = async () => {
    const response = await Instance.get(`products/${id}`);
    setSingleProduct(response.data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return singleProduct && singleProduct.images ? (
    <>
      <Topnav />
      <Navbar />
      <div className="max-w-screen-xl flex gap-10 my-10 mx-auto">
        <div className="image w-[13rem] flex flex-col gap-3 p-4 overflow-y-auto h-max max-h-[70vh] overflow-hidden">
          {singleProduct.images.map((img, i) => {
            return (
              <img
                key={i}
                src={`${img}`}
                alt=""
                className="object-center w-full object-cover border-[2px]"
                onClick={changeimage}
              />
            );
          })}
        </div>
        <div className="image w-[50%] flex justify-end h-[70vh] overflow-hidden">
          <img
            ref={imgcontainer}
            src={`${singleProduct.images[0]}`}
            alt=""
            className="object-center h-[100%] hover:scale-125 duration-300 object-cover"
          />
        </div>
        <div className="details w-[50%] flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-black w-[60%]">{singleProduct.title}</h1>
          <h1 className="text-xl font-semibold">
            Price: {singleProduct.price}$
          </h1>
          <span className="font-semibold text-zinc-400">
            Category: {singleProduct.category}
          </span>
          <p>{singleProduct.description}</p>
          <div className="btns flex justify-between items-center">
            <button className="flex text-lg items-center gap-2 bg-[#fff]  px-5 py-2 rounded-lg">
              <CiHeart className="text-2xl" /> Add to wishlist
            </button>
            <button className="flex items-center gap-2 bg-[#D10024] text-white px-5 py-2 rounded-lg">
              <HiShoppingCart className="text-xl" /> Add to Cart
            </button>
          </div>
          <button className="flex items-center justify-center w-full gap-2 bg-[#D10024] text-white px-5 py-2 rounded-lg">
            <span>Buy it now</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default SingleProducts;
