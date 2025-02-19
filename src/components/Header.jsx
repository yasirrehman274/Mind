import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      {/* <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]"> */}
      <div className="">
        {/*---------- Start Top Bar --------- */}
        <div className="flex items-center justify-between py-5 font-medium pt-14">
          {/*---------- Social Icon Start --------- */}
          <ul className="hidden sm:flex md:flex lg:flex gap-2 text-sm text-gray-700">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <span className="bg-[#1ED3FF] inline-block p-2 rounded-lg mx-auto">
                <FaFacebookF className="text-[1.2em] text-white" />
              </span>
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <span className="bg-[#FF9602] inline-block p-2 rounded-lg mx-auto">
                <FaTwitter className="text-[1.2em] text-white" />
              </span>
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <span className="bg-[#FF4F4F] inline-block p-2 rounded-lg mx-auto">
                <FaLinkedinIn className="text-[1.2em] text-white" />
              </span>
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <span className="bg-[#C265E9] inline-block p-2 rounded-lg mx-auto">
                <FaInstagram className="text-[1.2em] text-white" />
              </span>
            </NavLink>
          </ul>
          {/*---------- Social Icon End --------- */}

          {/*---------- LOGO --------- */}
          <Link to={"/"}>
            {/* <img src={assets.Logo1_2} className="w-48" alt="" /> */}
            <img src={assets.logo} className="w-48" alt="" />
          </Link>
          {/*---------- LOGO --------- */}

          {/*---------- Search & Login --------- */}
          <div className="flex items-center gap-6">
            <img
              onClick={() => setShowSearch(true)}
              src={assets.search_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            <div className="group relative">
              <Link to={"login"}>
                <img
                  src={assets.menu_icon}
                  className="w-5 cursor-pointer"
                  alt=""
                />
              </Link>
            </div>
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden"
              alt=""
            />
          </div>
          {/*---------- Search & Login --------- */}
        </div>
        {/*---------- Top Bar End--------- */}

        <div className="flex items-center justify-center font-medium">
          <ul className="flex flex-wrap sm:flex  gap-5 text-sm font-semibold rounded-tl-3xl rounded-br-3xl p-5 text-white bg-[#FF4C60]">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>HOME</p>
            </NavLink>
            <NavLink to="/blogs" className="flex flex-col items-center gap-1">
              <p>BLOG LAYOUT</p>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>CATEGORIES</p>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>ABOUT</p>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>CONTACT</p>
            </NavLink>
          </ul>

          <div className="flex items-center gap-6"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
