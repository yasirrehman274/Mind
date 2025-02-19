import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { BlogContext } from "../context/BlogContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const { setToken } = useContext(BlogContext);
  const navigate = useNavigate();
  const logoutuser = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };
  return (
    <>
      <div className="flex items-center py-2 px-[4%] justify-between">
        <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
        <Link
          to={"/"}
          className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Home
        </Link>
        <button
          onClick={logoutuser}
          className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default AdminNavbar;
