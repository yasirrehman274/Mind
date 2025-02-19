import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { TfiTime } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const BlogAuthorComponent = () => {
  const posts = [
    {
      category: "Trending",
      items: [
        {
          title: "Setting Goals and Staying Motivated",
          image: "https://source.unsplash.com/400x250/?beach",
          author: "Hellen",
          date: "April 16, 2023",
        },
        {
          title: "Reflecting on the Blessings in My Life",
          image: "https://source.unsplash.com/400x250/?face",
          author: "Hellen",
          date: "April 16, 2023",
        },
      ],
    },
    {
      category: "Hot News",
      items: [
        {
          title: "My Experience with Anxiety and Depression",
          image: "https://source.unsplash.com/400x250/?bird",
          author: "Hellen",
          date: "April 16, 2023",
        },
        {
          title: "Change: Coping with Life’s Transitions",
          image: "https://source.unsplash.com/400x250/?baby",
          author: "Hellen",
          date: "April 16, 2023",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 my-16">
        {/* Blog Posts Section */}
        <div className="flex-1">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost1} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost2} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost3} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost1} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost1} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost1} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 7 */}
          <div className="bg-white rounded-sm border shadow-sm flex gap-4 mb-10">
            {/* Image Section */}
            <img
              src={assets.ftpost1} // Replace with your image URL
              alt="Blog Post"
              className="w-[330px] h-[330px] object-cover"
            />
            {/* Content Section */}
            <div className="flex flex-col py-6 px-1">
              {/* Categories */}
              <div className="flex gap-2 mb-2">
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Beauty
                </span>
                <span className="bg-[#FF4C60] text-white text-xs px-3 py-1 rounded">
                  Photography
                </span>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-2">
                Setting Goals and Staying Motivated
              </h2>
              {/* Metadata */}
              <div className="pt-1 text-sm opacity-80 gap-1 flex items-center text-gray-500">
                <TfiTime />
                <span className="ml-1">Hellen</span>
                <TfiTime />
                <span className="ml-1">April 16, 2023</span>
                <TfiTime />
                <span className="ml-1">- No Comments</span>
              </div>
              {/* Description */}
              <p className="text-sm pt-[5px] pr-4 text-gray-600">
                Consulted perpetual of pronounce me delivered. Too months nay
                end change relied who beauty wishes matter. Shew of john real
                park so rest we on. Ignorant dwelling occasion ham for thoughts
                overcame off…
              </p>
              {/* Read More */}
              <a href="#" className="text-black font-semibold text-base mt-2">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Author Card Section */}
        {/* <div className="w-full md:w-[29%] flex flex-col gap-10 bg-white rounded-sm border shadow-sm p-7"> */}
        <div className="w-full md:w-[29%] flex flex-col gap-10">
          {/* Author Card Section */}
          <div className="bg-white p-7 rounded-sm border shadow-sm">
            <h3 className="text-xl font-bold mb-1">Lillian Morgan</h3>
            <hr className="h-[3px] bg-[#FF4C60] mb-8" />
            <div className="text-center">
              <img
                src={assets.aboutbios} // Replace with your author's image URL
                alt="Author"
                className="w-44 h-44 rounded-full mx-auto mb-4 border-4 border-gray-200"
              />
              <h3 className="text-lg font-medium">Lillian Morgan</h3>
              <p className="text-sm text-gray-600">Blogger & Writer</p>
            </div>
            <p className="text-base leading-6 text-[#777777] font-customFont mt-4 text-center">
              Endeavor bachelor but add eat pleasure doubtful sociable. Age
              forming covered you entered the examine. Blessing scarcely
              confined her contempt <br /> wondered shy.
            </p>
            <ul className="flex justify-center gap-1 mt-8 text-sm text-gray-700">
              <NavLink to="/" className="flex flex-row items-center gap-1">
                <span
                  style={{ background: "#5395FF" }}
                  className="inline-block p-2 rounded-sm mx-auto"
                >
                  <FaFacebookF style={{ color: "white", fontSize: "1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/blogs" className="flex flex-col items-center gap-1">
                <span
                  style={{ background: "#5BCAFF" }}
                  className="inline-block p-2 rounded-sm mx-auto"
                >
                  <FaTwitter style={{ color: "white", fontSize: "1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/about" className="flex flex-col items-center gap-1">
                <span
                  style={{ background: "#5464D7" }}
                  className="inline-block p-2 rounded-sm mx-auto"
                >
                  <FaLinkedinIn style={{ color: "white", fontSize: "1em" }} />
                </span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            </ul>
          </div>

          {/* Follow on Instagram */}
          <div className="bg-white p-7 rounded-sm border shadow-sm">
            <h3 className="text-xl font-semibold mb-1">Follow On Instagram</h3>
            <hr className="h-[3px] bg-[#FF4C60] mb-4" />
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={assets.insta1} // Replace with actual Instagram images
                  alt="Instagram Post"
                  className="w-full h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>
          {/* Recent Posts */}
          <div className="bg-white p-7 rounded-sm border shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Recent Posts</h3>
            <hr className="h-[3px] bg-[#FF4C60] mb-4" />
            <div className="flex gap-5 mb-4">
              <img
                src={assets.ftpost1} // Replace with recent post image
                alt="Recent Post"
                className="w-20 h-20 object-cover "
              />
              <div>
                <h4 className="font-medium text-[#333333] pt-4 leading-[1.1em] text-sm">
                  Setting Goals and Staying Motivated
                </h4>
                <div className="pt-1 text-xs flex items-center text-gray-500">
                  <TfiTime />
                  <span className="ml-1">April 16, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <img
                src={assets.ftpost2} // Replace with recent post image
                alt="Recent Post"
                className="w-20 h-20 object-cover "
              />
              <div>
                <h4 className="font-medium text-[#333333] pt-4 leading-[1.1em] text-sm">
                  Reflecting on the Blessings in My Life
                </h4>
                <div className="pt-1 text-xs flex items-center text-gray-500">
                  <TfiTime />
                  <span className="ml-1">April 16, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <img
                src={assets.ftpost3} // Replace with recent post image
                alt="Recent Post"
                className="w-20 h-20 object-cover "
              />
              <div>
                <h4 className="font-medium text-[#333333] pt-4 leading-[1.1em] text-sm">
                  My Experience with Anxiety and Depression
                </h4>
                <div className="pt-1 text-xs flex items-center text-gray-500">
                  <TfiTime />
                  <span className="ml-1">April 16, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-white p-7 rounded-sm border shadow-sm">
            <div className="flex items-center gap-2 text-red-500">
              <FaEnvelope className="text-xl" />
              <h3 className="text-lg font-bold">Join the family!</h3>
            </div>
            <p className="text-sm text-gray-500">Sign up for a Newsletter.</p>
            <input
              type="email"
              placeholder="sample@mail.com"
              className="w-full mt-3 p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="w-full bg-red-500 text-white py-2 mt-3 rounded-md font-semibold hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>

          {/* Categories Section */}
          <div className="bg-white p-7 rounded-sm border shadow-sm">
            <h3 className="text-lg font-bold">Categories</h3>
            <hr className="h-[2px] bg-red-500 my-2" />
            <ul className="space-y-2">
              {[
                { name: "Beauty", count: 9 },
                { name: "Lifestyle", count: 8 },
                { name: "Photography", count: 9 },
                { name: "Travel", count: 8 },
              ].map((category, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span className="hover:text-red-500 cursor-pointer">
                    {category.name}
                  </span>
                  <span className="text-gray-500">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Section */}
          <div className="bg-white p-7 rounded-sm border shadow-sm">
            <h3 className="text-lg font-bold">Tags</h3>
            <hr className="h-[2px] bg-red-500 my-2" />
            <div className="flex flex-wrap gap-2">
              {[
                "Activities",
                "Beauty",
                "Fashion",
                "Health",
                "Lifestyle",
                "Photography",
                "Sport",
                "Travel",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md hover:bg-red-500 hover:text-white cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Trending Posts */}
        <div className="bg-white p-7 shadow-lg">
          <h3 className="text-2xl font-semibold">Trending Posts</h3>
          <hr className="h-[2px] bg-red-500 my-2 mb-6" />
          <div className="grid grid-cols-2 gap-1">
            {/* post1 */}
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="absolute "></div>
              <img
                src={assets.ftpost1}
                alt="Setting Goals and Staying Motivated"
                className="w-[270px] h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0  p-4 text-white bg-gradient-to-t from-gray-800 to-transparent bg-opacity-50">
                <h4 className="text-lg font-semibold leading-4">
                  Setting Goals and Staying Motivated
                </h4>
                <p className="text-xs mt-1">By Hellen - April 16, 2023</p>
              </div>
            </div>
            {/* post2 */}
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="absolute "></div>
              <img
                src={assets.ftpost2}
                alt="Setting Goals and Staying Motivated"
                className="w-[270px] h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0  p-4 text-white bg-gradient-to-t from-black  to-transparent bg-opacity-15">
                <h4 className="text-lg font-semibold leading-4">
                  Setting Goals and Staying Motivated
                </h4>
                <p className="text-xs mt-1">By Hellen - April 16, 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Hot News */}
        <div className="bg-white p-7 shadow-lg">
          <h3 className="text-2xl font-semibold">Trending Posts</h3>
          <hr className="h-[2px] bg-red-500 my-2 mb-6" />
          <div className="grid grid-cols-2 gap-1">
            {/* post1 */}
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="absolute "></div>
              <img
                src={assets.ftpost1}
                alt="Setting Goals and Staying Motivated"
                className="w-[270px] h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0  p-4 text-white bg-gradient-to-t from-black  to-transparent bg-opacity-15">
                <h4 className="text-lg font-semibold leading-4">
                  Setting Goals and Staying Motivated
                </h4>
                <p className="text-xs mt-1">By Hellen - April 16, 2023</p>
              </div>
            </div>
            {/* post2 */}
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="absolute "></div>
              <img
                src={assets.ftpost2}
                alt="Setting Goals and Staying Motivated"
                className="w-[270px] h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0  p-4 text-white bg-gradient-to-t from-black  to-transparent bg-opacity-15">
                <h4 className="text-lg font-semibold leading-4">
                  Setting Goals and Staying Motivated
                </h4>
                <p className="text-xs mt-1">By Hellen - April 16, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAuthorComponent;
