import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { BlogContext } from "../context/BlogContext";

const RelatedPostsSlider = ({ categoryId, currentPostId }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { backendUrl } = useContext(BlogContext);
  console.log(categoryId);
  console.log(currentPostId);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await axios(
          backendUrl +
            `/api/blog/related/${categoryId}?excludeId=${currentPostId}`
        );
        console.log("Relatedpost", response);
        setRelatedPosts(response.data);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      }
    };

    fetchRelatedPosts();
  }, [categoryId, currentPostId]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-4">Related Posts</h3>
      <div className="overflow-x-scroll flex space-x-4">
        {relatedPosts.map((post) => (
          <div
            key={post._id}
            className="min-w-[200px] p-2 border rounded-lg shadow-sm"
          >
            <h4 className="font-semibold">{post.title}</h4>
            <p>{post.description.substring(0, 50)}...</p> {/* Show a preview */}
            <a href={`/blog/${post._id}`} className="text-blue-500">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPostsSlider;
