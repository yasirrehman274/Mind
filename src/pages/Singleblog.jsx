import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PiUserCircle } from "react-icons/pi";
import { TfiTime } from "react-icons/tfi";
import { assets } from "../assets/assets";
import RecentPosts from "../components/RecentPosts";
import RelatedPostsSlider from "../components/RelatedPostsSlider";

const Singleblog = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(" ");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/get-blog/${id}`)
      .then((res) => {
        setIsLoading(true);
        //console.log(res.data.blog);
        setMovie(res.data.blog);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie_section">
        <div className="loading"> Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]">
        <div className="flex flex-col sm:flex-row justify-between sm:gap-6 pt-24">
          {/* Filter Options */}

          <div className="bg-white p-5 rounded-lg border-solid border-2 border-[#EEEEFC]">
            <img
              className="hover:scale-110 transition ease-in-out rounded-lg hover:rounded-lg"
              src={`http://localhost:5000/uploads/${movie.image}`}
              alt=""
            />
            <h1 className="text-3xl font-semibold p-2 text-black">
              {movie.title}
            </h1>
            <div className="pt-1 text-sm flex items-center text-gray-500 p-2">
              <PiUserCircle />
              <span className="mx-1">admin -</span>
              <TfiTime />
              <span className="ml-1">April 16, 2023</span>
            </div>
            <p className="text-gray-500 p-2">{movie.description}</p>
          </div>
          {/* Right Side */}
          <div className="bg-white min-w-[360px] p-5 rounded-lg border-solid border-2 border-[#EEEEFC]">
            <h1 className="text-2xl font-bold p-2">Recent Posts</h1>
            <hr className="w-full h-[3px] bg-[#0088cc] ml-2 mb-3" />
            <RecentPosts />
          </div>
        </div>
      </div>
      {/* Related posts slider */}
      <div>
        <RelatedPostsSlider categoryId={movie.categories} currentPostId={id} />
      </div>
    </>
  );
};

export default Singleblog;
