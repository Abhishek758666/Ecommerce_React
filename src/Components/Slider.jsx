import React, { useEffect, useState } from "react";
import Instance from "../utils/Instance";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#D10024",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Sliderr = () => {
  const [accessories, setAccessories] = useState(null);
  const getAccessories = async () => {
    const { data } = await Instance.get(
      "/products/category/mobile-accessories"
    );
    setAccessories(data.products);
  };

  useEffect(() => {
    getAccessories();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    accessories && (
      <div className="w-[85vw] p-20 mx-auto">
        <h1 className="py-5 text-3xl font-bold text-[#d10024] capitalize">
          top products
        </h1>
        <Slider {...settings}>
          {accessories &&
            accessories.map((a, i) => (
              <Link
                to={`/products/${a.id}`}
                className="card w-[17rem] min-h-[15rem] p-2 bg-zinc-100 flex flex-col justify-between"
                key={i}
              >
                <div className="image h-[18rem] overflow-hidden">
                  <img
                    src={`${a.images[0]}`}
                    className="object-cover h-full object-center"
                  />
                </div>
                <h1 className="text-center">{a.title}</h1>
                <h2 className="text-xl text-center text-[#D10024] font-bold">
                  {a.price}$
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
        </Slider>
      </div>
    )
  );
};

export default Sliderr;
