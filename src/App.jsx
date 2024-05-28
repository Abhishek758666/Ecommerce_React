import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import FilterProduct from "./pages/FilterProduct";
import SingleProducts from "./pages/SingleProducts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:cate" element={<FilterProduct />} />
        <Route path="/products/:id" element={<SingleProducts />} />
      </Routes>
    </>
  );
};

export default App;

// main #D10024
