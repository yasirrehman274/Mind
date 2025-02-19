import React, { useState, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../context/BlogContext";

const Forgotpassword = () => {
  const { navigate, backendUrl } = useContext(BlogContext);
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        backendUrl + "/api/user/forgot-password",
        {
          email,
        }
      );
      console.log(response);
      if (response.data.status) {
        alert("Check Email Address");
        console.log(response);
        navigate("/resetPassword");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
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
            <p className="prata-regular text-3xl">Forgot Password</p>
            <hr className="border-none h-[1.5px] w-[8] bg-gray-800" />
          </div>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="bg-black text-white font-light px-8 py-2 mt-4">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Forgotpassword;
