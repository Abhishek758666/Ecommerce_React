import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] bg-[#1b1b1b] text-[#fff] pt-[10vh] px-10">
      <div className="flex flex-wrap justify-evenly w-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Socials</h1>
          <p className="w-[20rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            deleniti.
          </p>
          <div className="links flex gap-5 text-2xl">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href=""></a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">About Me</h1>
          <div className="flex flex-col mt-5 gap-2">
            <a href="">Other Projects</a>
            <a href="">Portfolio</a>
            <a href=""></a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <div className="flex flex-col mt-5 gap-2">
            <h1 className="flex items-center gap-2">
              <FaLocationDot />
              Patan Dhoka, Lalitpur
            </h1>
            <h1 className="flex items-center gap-2">
              <FaPhoneAlt /> +977 9876543210
            </h1>
            <h1 className="flex items-center gap-2">
              <MdEmail />
              abhishekkhati39@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <hr className="my-10 bg-zinc-100 h-[1px] w-full" />
      <p className="block text-center">
        © 2024 NepMart superstore. Made by Abhishek Khati
      </p>
    </div>
  );
};

export default Footer;
