import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { navigate, backendUrl } = useContext(BlogContext);
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        backendUrl + "/api/user/reset-password/" + token,
        {
          password,
        }
      );
      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
        >
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">Reset Password</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Password"
            required
          />
          <button className="bg-black text-white font-light px-8 py-2 mt-4">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
