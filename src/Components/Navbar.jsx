import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const links = [
    {
      category: "Fashion",
      subcategories: [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches",
        "sunglasses",
      ],
    },
    {
      category: "Beauty",
      subcategories: ["beauty", "fragrances", "skin-care"],
    },
    {
      category: "Electronics",
      subcategories: [
        "laptops",
        "mobile-accessories",
        "smartphones",
        "tablets",
      ],
    },
    {
      category: "Living",
      subcategories: [
        "furniture",
        "home-decoration",
        "kitchen-accessories",
        "groceries",
        "sports-accessories",
        "motorcycle",
        "vehicle",
      ],
    },
  ];

  const handleSelectChange = (event) => {
    navigate(`/categories/${event.target.value}`);
  };

  return (
    <div className=" z-50 max-w-screen-xl sticky top-0 py-4 mx-auto flex justify-between items-center bg-white shadow-sm">
      <Link to="/" className="logo text-3xl text-[#D10024]">
        LOGO
      </Link>
      <div className="nav flex gap-10 capitalize font-semibold">
        {links.map((l, index) => (
          <select
            key={index}
            defaultValue={0}
            className="outline-none"
            onChange={handleSelectChange}
          >
            <option
              disabled
              value={0}
              className="flex items-center cursor-pointer"
            >
              {l.category}
            </option>
            {l.subcategories.map((s, subIndex) => (
              <option key={subIndex} value={s}>
                {s}
              </option>
            ))}
          </select>
        ))}
      </div>
      <div className="menu flex gap-5 text-3xl">
        <IoIosHeart /> <HiShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
