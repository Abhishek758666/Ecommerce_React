import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";

const ServiceCard = () => {
  const iconMap = {
    FaTruckFast: FaTruckFast,
    FaArrowRotateRight: FaArrowRotateRight,
    FaMoneyBillWave: FaMoneyBillWave,
    IoMdHelpBuoy: IoMdHelpBuoy,
  };

  const services = [
    {
      name: "Free Shipping Item",
      title: "Orders over NRS 100",
      logo: "FaTruckFast",
    },
    {
      name: "Money Back Guarantee",
      title: "100% money back",
      logo: "FaArrowRotateRight",
    },
    {
      name: "Cash On Delivery",
      title: "Lorem ipsum dolor amet",
      logo: "FaMoneyBillWave",
    },
    {
      name: "Help & Support",
      title: "Call us : 98******",
      logo: "IoMdHelpBuoy",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto flex justify-between my-10">
      {services.map((s, i) => {
        const IconComponent = iconMap[s.logo];
        return (
          <div
            key={i}
            className="flex items-center w-max gap-5 px-10 p-5 border-2 bg-[#D10024]"
          >
            <IconComponent className="text-4xl text-[#fff]" />
            <div className="text-[#fff] font-bold">
              <h1>{s.name}</h1>
              <h1 className="text-zinc-200">{s.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
