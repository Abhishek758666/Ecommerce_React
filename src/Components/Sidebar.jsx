import React, { useEffect, useState } from "react";
import Instance from "../utils/Instance";
import { Link } from "react-router-dom";

const Sidebar = ({ category }) => {
  return (
    <div className="w-[20rem] mt-5 h-max border-[1px]">
      <h1 className="p-4 bg-[#D10024] text-white font-bold text-2xl">
        Categories
      </h1>
      <div className="flex flex-col">
        {category &&
          category.map((c, i) => {
            return (
              <Link
                to={`categories/${c.name.toLowerCase().split(" ").join("-")}`}
                key={i}
                className="hover:bg-zinc-200 p-4 duration-300 cursor-pointer"
              >
                {c.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
