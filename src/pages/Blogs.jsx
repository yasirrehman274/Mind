import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { BlogContext } from "../context/BlogContext";

const Blogs = () => {
  const [blogs, setuBlogs] = useState([]);
  const [userblogs, setUserBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  const { token, backendUrl } = useContext(BlogContext);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/category/all");
      //console.log(response);
      setCategory(response.data.categories);
    } catch (e) {
      console.error(e);
    }
  };
  const getUserBlogs = async () => {
    try {
      if (token) {
        // console.log("Blog page Token", token);
        setIsLoading(true);
        const response = await axios.get(backendUrl + "/api/blog/user-blog", {
          headers: { token },
        });
        // console.log(response);
        setUserBlogs(response.data.blogs);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const fetchBlogs = async () => {
    try {
      if (!token) {
        //console.log("Blog page Token", token);
        setIsLoading(true);
        const response = await axios.get(backendUrl + "/api/blog/all-blog");
        //console.log(response);
        setuBlogs(response.data.blogs);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategories();
    if (token) {
      getUserBlogs();
    } else {
      //console.log(token);
      fetchBlogs();
    }
  }, [token]);
  const LastPostIndex = currentPage * postPerPage;
  const firstPostIndex = LastPostIndex - postPerPage;
  let currentPosts;
  if (token) {
    currentPosts = userblogs.slice(firstPostIndex, LastPostIndex);
  } else {
    currentPosts = blogs.slice(firstPostIndex, LastPostIndex);
  }
  //console.log("currentPosts", currentPosts);
  //console.log(category);
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {token ? (
        <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]">
          <div className="flex flex-col flex-wrap sm:flex-row gap-1 sm:gap-10 pt-10 border-t bg-[#F9F9FE]">
            {/* Filter Options */}

            {/* Menu */}
            <div className="flex-1">
              <div className="flex justify-center flex-wrap text-base sm:text-2xl mb-9">
                <span
                  className="text-sm  text-white bg-[#0088cc] py-1 px-3 rounded-lg mr-5
        "
                >
                  All Post
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Beauty
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Lifestyle
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Photography
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Travel
                </span>
              </div>
              {/* Map Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-6">
                {currentPosts
                  .filter((item) => {
                    return search.toLocaleLowerCase() === ""
                      ? item
                      : item.title.toLocaleLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <ProductItem
                      key={index}
                      id={item._id}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      category={item.categories}
                      loading={isLoading}
                    />
                  ))}
              </div>
              <Pagination
                totalPosts={userblogs.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className=""></div>
        </div>
      ) : (
        <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]">
          <div className="flex flex-col flex-wrap sm:flex-row gap-1 sm:gap-10 pt-10 border-t bg-[#F9F9FE]">
            {/* Filter Options */}

            {/* Right Side */}
            <div className="flex-1">
              <div className="flex justify-center flex-wrap text-base sm:text-2xl mb-9">
                <span
                  className="text-sm  text-white bg-[#0088cc] py-1 px-3 rounded-lg mr-5
        "
                >
                  All Post
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Aqwal e Zareen
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Aqwal e Zareen
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Aqwal e Zareen
                </span>
                <span
                  className="text-sm text-gray-500 py-1 px-3 rounded-lg mr-5
        "
                >
                  Aqwal e Zareen
                </span>
              </div>
              {/* Map Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-6">
                {currentPosts
                  .filter((item) => {
                    return search.toLocaleLowerCase() === ""
                      ? item
                      : item.title.toLocaleLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <ProductItem
                      key={index}
                      id={item._id}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      category={item.categories}
                      loading={isLoading}
                    />
                  ))}
              </div>
              <Pagination
                totalPosts={blogs.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className=""></div>
        </div>
      )}
    </>
  );
};

export default Blogs;
