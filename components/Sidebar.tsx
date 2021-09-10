/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://vibhormalik.netlify.app/profilepic.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan ">
        <span className="text-green">Vibhor </span>
        Malik
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center">
        Backend Developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social icon */}
      <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Haryana, India</span>
        </div>
        <p className="my-2">vibh1103@gmail.com</p>
        <p className="my-2">+91 9315538805</p>
      </div>

      {/* Email Button  */}
      <button
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 my-2 text-white focus:outline-none"
        onClick={() => window.open("mailto:vibh1103@gmail.com")}
      >
        Email Me
      </button>
      <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 my-2 text-white">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
