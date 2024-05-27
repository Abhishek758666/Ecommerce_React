import React from "react";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Topnav = () => {
  return (
    <div className="bg-[#D10024] text-white w-full px-10 py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="left flex gap-10">
          <h1 className="flex gap-2 items-center">
            <IoMail />
            abhishekkhati39@gmail.com
          </h1>
          <span>|</span>
          <h1>abhishekhati.com.np</h1>
        </div>
        <div className="right flex gap-10">
          <h1 className="border-2 border-[#fff] px-3 rounded-lg">SignUp</h1>
          <h1 className=" flex items-center gap-3">
            <FaUser />
            Login
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
