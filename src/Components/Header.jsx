import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import Instance from "../utils/Instance";
import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  const getQuery = async () => {
    const { data } = await Instance.get(`products/search?q=${input}`);
    setQuery(data.products);
  };

  useEffect(() => {
    getQuery();
  }, [input]);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center gap-10 py-4 relative">
        <div className="flex items-center gap-5 relative">
          {input && (
            <div className="absolute bg-zinc-100 max-h-[70vh] overflow-y-auto w-[90%] left-[46%] -translate-x-1/2 top-full z-10">
              <ul className="flex flex-col">
                {query &&
                  query.map((q, i) => (
                    <Link
                      to={`/products/${q.id}`}
                      key={i}
                      className="p-3 border-b-2 hover:bg-[#dadada]"
                    >
                      {q.title}
                    </Link>
                  ))}
              </ul>
            </div>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search...."
            className="border-2 w-[50vw] px-10 py-2"
          />
          <RiSearch2Line className="text-3xl" color="#D10024" />
        </div>
        <div className="flex items-center gap-4">
          <IoIosCall className="text-sm bg-zinc-200 w-[3rem] h-[3rem] p-2 rounded-full flex items-center justify-center text-[#D10024]" />
          <div className="text-right">
            <h1 className="text-zinc-400">Free Support</h1>
            <h1>9876543210</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "25rem",
          background: `linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.5),rgba(255,255,255,0.7)),url(${wallpaper.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
        className="w-full shadow-inner shadow-[#b0b0b074] bg-zinc-600 p-5 flex flex-col items-start justify-center gap-5"
      >
        <h1 className="text-4xl w-[30%] text-[#d10024] font-black">
          {wallpaper.title}
        </h1>
        <p className="w-[50%]">{wallpaper.description.slice(0, 100)}...more</p>

        <Link
          to={`/products/${wallpaper.id}`}
          className="px-5 py-2 bg-[#d10024] text-white"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
