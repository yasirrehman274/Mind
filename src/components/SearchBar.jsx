import React, { useState } from "react";
import { assets } from "../assets/assets";

const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]">
        <div className="border-t border-b bg-gray-50 text-center">
          <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none bg-inherit text-sm"
              placeholder="Search"
              type="text"
            />
            <img className="w-4" src={assets.search_icon} alt="" />
          </div>
          {/* <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        /> */}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
