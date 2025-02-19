import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { PiUserCircle } from "react-icons/pi";
import { TfiTime } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const instagramImages = [
    "https://source.unsplash.com/300x300/?coffee",
    "https://source.unsplash.com/300x300/?couple",
    "https://source.unsplash.com/300x300/?car",
    "https://source.unsplash.com/300x300/?horse",
    "https://source.unsplash.com/300x300/?dog",
    "https://source.unsplash.com/300x300/?camping",
  ];
  return (
    <>
      <div className="relative bg-gray-100 pt-6">
        <div className="grid grid-cols-6">
          <div className="relative group">
            <img
              src={assets.insta1}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src={assets.insta2}
              alt="as"
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src={assets.insta3}
              alt="as"
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src={assets.insta4}
              alt="as"
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src={assets.insta5}
              alt="as"
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src={assets.insta6}
              alt="as"
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-600 transition">
            📷 FOLLOW ON INSTAGRAM
          </button>
        </div>
      </div>

      <div className="relative bg-gray-100 pt-6">
        <div className="grid grid-cols-6">
          {/* Image 1 */}
          <div className="relative group">
            <img
              src={assets.insta1}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta2}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta3}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta4}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta5}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta6}
              alt="as"
              className="w-full h-[150px] object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-600 transition">
            📷 FOLLOW ON INSTAGRAM
          </button>
        </div>
      </div>
      <div className="relative bg-gray-100 pt-6">
        <div className="grid grid-cols-6">
          {/* Image 1 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta1}
              alt="as"
              className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta2}
              alt="as"
              className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta3}
              alt="as"
              className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta4}
              alt="as"
              className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta5}
              alt="as"
              className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative group overflow-hidden">
            <img
              src={assets.insta6}
              alt="as"
              className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl">📷</span>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-600 transition">
            📷 FOLLOW ON INSTAGRAM
          </button>
        </div>
      </div>

      <div className=" bg-[#0F1012] rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10  text-sm px-2 sm:px-[3vw] md:px-[4vw] pt-20 text-white">
          {/* About */}
          <div className="p-2">
            <Link to={"/"}>
              <h1 className="text-xl font-normal mb-2">About</h1>
            </Link>
            <hr className="h-[2px] bg-[#2c2e33] opacity-25 mb-6" />
            <p className="w-full font-light text-[#D5D5D5]">
              Appetite no humoured returned informed. Possession so comparison
              inquietude he he conviction no decisively.
            </p>
          </div>
          {/* Tags */}
          <div className="p-2">
            <Link to={"/"}>
              <h1 className="text-xl font-normal mb-2">Tags</h1>
            </Link>
            <hr className="h-[2px] bg-[#292c33] opacity-25 mb-6" />
            <p className="w-full flex flex-wrap items-center text-white text-xs font-customFont">
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Activities
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Beauty
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Fashion
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Health
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Lifestyle
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Photography
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Sport
              </span>
              <span className="bg-[#383838]  border-[#636363] py-1 px-4 border-solid border-[1px] ml-4 mb-3">
                Travel
              </span>
            </p>
          </div>
          {/* Recent Post */}
          <div className="p-2">
            <Link to={"/"}>
              <h1 className="text-xl font-normal mb-2">Recent Posts</h1>
            </Link>
            <hr className="h-[2px] bg-[#2c2e33] opacity-25 mb-4" />
            <div className="w-full text-white">
              <div className="flex p-2 gap-4">
                <img src={assets.ftpost1} className="w-20" alt="" />

                <div>
                  <p className="text-sm text-[#E4E4E4] leading-4 font-normal">
                    Setting Goals and Staying Motivated
                  </p>
                  <div className="pt-1 text-sm flex items-center text-gray-500">
                    <TfiTime />
                    <span className="ml-1">April 16, 2023</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 gap-4">
                <img src={assets.ftpost2} className="w-20 " alt="" />

                <div>
                  <p className="text-sm text-[#E4E4E4] leading-4 font-normal">
                    Reflecting on the Blessings in My Life
                  </p>
                  <div className="pt-1 text-sm flex items-center text-gray-500">
                    <TfiTime />
                    <span className="ml-1">April 16, 2023</span>
                  </div>
                </div>
              </div>
              <div className="flex p-2 gap-4">
                <img src={assets.ftpost3} className="w-20" alt="" />

                <div>
                  <p className="text-sm text-[#E4E4E4] leading-4 font-normal">
                    My Experience with Anxiety and Depression
                  </p>
                  <div className="pt-1 text-sm flex items-center text-gray-500">
                    <TfiTime />
                    <span className="ml-1">April 16, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social */}
          <div className="p-2">
            <Link to={"/"}>
              <h1 className="text-xl font-normal mb-2">Follow Me</h1>
            </Link>
            <hr className="h-[2px] bg-[#2c2e33] opacity-25 mb-6" />
            <ul className="flex gap-2 text-sm text-gray-700">
              <NavLink to="/" className="flex flex-row items-center gap-1">
                <span
                  style={{ background: "#1ED3FF" }}
                  className="inline-block p-[10px] rounded-sm mx-auto"
                >
                  <FaFacebookF style={{ color: "white", fontSize: "1.1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/blogs" className="flex flex-col items-center gap-1">
                <span
                  style={{ background: "#FF9602" }}
                  className="inline-block p-[10px] rounded-sm mx-auto"
                >
                  <FaTwitter style={{ color: "white", fontSize: "1.1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/about" className="flex flex-col items-center gap-1">
                <span
                  style={{ background: "#FF4F4F" }}
                  className="inline-block p-[10px] rounded-sm mx-auto"
                >
                  <FaLinkedinIn style={{ color: "white", fontSize: "1.1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/about" className="flex flex-col items-center gap-1">
                <span
                  style={{ background: "#C265E9" }}
                  className="inline-block p-[10px] rounded-sm mx-auto"
                >
                  <FaInstagram style={{ color: "white", fontSize: "1.1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            </ul>
          </div>
        </div>

        <div>
          <hr className="h-[1px] bg-[#2c2e33] opacity-15 mb-3" />
          <p className="pt-2 pb-20 text-[13px] text-center text-[#686868]">
            @ 2025 Created with
            <span className="text-[#ff4c60]"> Royal Elementor Addons</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
