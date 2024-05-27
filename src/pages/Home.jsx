import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Topnav from "../Components/Topnav";
import Navbar from "../Components/Navbar";
import Instance from "../utils/Instance";
import Loader from "./Loader";
import ServiceCard from "../Components/ServiceCard";
import Slider from "../Components/Slider";
import AllProduct from "../Components/AllProduct";

const Home = () => {
  const [category, setCategory] = useState(null);
  const [wallpaper, setWallpaper] = useState(null);

  const getCategoryItems = async () => {
    const response = await Instance.get("/products/categories");
    setCategory(response.data.slice(0, 7));
  };

  const getWallpaper = async () => {
    const { data } = await Instance.get(`products/category/mens-watches`);
    let num = Math.ceil(Math.random() * data.products.length);
    setWallpaper(data.products[num]);
  };

  useEffect(() => {
    getCategoryItems();
    getWallpaper();
  }, []);

  return wallpaper && category ? (
    <>
      <Topnav />
      <Navbar />
      <div className="max-w-screen-xl flex mx-auto mt-10 gap-10">
        <Sidebar category={category} />
        <Header wallpaper={wallpaper} />
      </div>
      <ServiceCard />
      <Slider />
      <AllProduct />
    </>
  ) : (
    <Loader />
  );
};

export default Home;
