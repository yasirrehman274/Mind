import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { TfiTime } from "react-icons/tfi";
import { BlogContext } from "../context/BlogContext";

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const { backendUrl } = useContext(BlogContext);
  const options = { year: "numeric", month: "long", day: "numeric" };

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios(backendUrl + "/api/blog/recent");
        console.log(response);
        setRecentPosts(response.data.recentBlogs);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchRecentPosts();
  }, []);
  return (
    <>
      <div>
        {/* <h2 className="text-xl font-bold mb-4">Recent Posts</h2> */}
        {recentPosts.length === 0 ? (
          <p>No recent posts available.</p>
        ) : (
          <div>
            {recentPosts.map((post, index) => (
              <div key={index} className="flex p-2 gap-4">
                <img
                  src={`http://localhost:5000/uploads/${post.image}`}
                  className="w-28 rounded-lg "
                  alt=""
                />

                <div>
                  <p className="text-sm font-semibold">
                    Islamic Quotes in Urdu Best 30+ Motivational Quotes
                  </p>
                  <div className="pt-1 text-sm flex items-center text-gray-500">
                    <TfiTime />
                    {/* <span className="ml-1">April 16, 2023</span> */}
                    <span className="ml-1">
                      {new Date(post.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RecentPosts;
