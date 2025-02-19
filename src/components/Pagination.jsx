import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="text-center my-8">
      <button
        onClick={() => setCurrentPage((pre) => Math.max(pre - 1, 1))}
        className="`text-black bg-gray-400 text-base rounded-lg px-5 py-2 mx-2"
      >
        {"<"}
      </button>
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className={`text-black bg-gray-400 text-base rounded-lg px-5 py-2 mx-2 ${
              page == currentPage ? "active" : ""
            }`}
            key={index}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => setCurrentPage((pre) => Math.min(pre + 1, totalPages))}
        className="`text-black bg-gray-400 text-base rounded-lg px-5 py-2 mx-2"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
