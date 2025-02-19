import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PiUserCircle } from "react-icons/pi";
import { TfiTime } from "react-icons/tfi";

const ProductItem = ({ id, title, description, image, category, loading }) => {
  //console.log(category[0]?.name || "No Category");
  const somedes = description.substring(0, 90);
  if (loading) {
    return <h2 className="text-3xl text-red-700">Loading....</h2>;
  }
  return (
    <>
      <Link className="text-gray-700 cursor-pointer" to={`/singleblog/${id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out rounded-lg hover:rounded-lg"
            src={`http://localhost:5000/uploads/${image}`}
            alt=""
          />
        </div>
        <div className="py-6 px-4 bg-white rounded-b-lg">
          {/* <p>{category[0]?.name || "No Category"}</p> */}
          {/* <ul>
            {category.map((categories) => (
              <li key={categories._id}>{categories.name}</li>
            ))}
          </ul> */}
          <span
            className="text-xs text-white bg-[#0088cc] border-[#E8E8E8] py-1 px-3 rounded-lg
        "
          >
            {category[0]?.name || "No Category"}
          </span>

          <p className="pt-3 text-xl font-bold text-black tracking-[0.3px] leading-5">
            {title}
          </p>
          <div className="pt-1 text-sm flex items-center text-gray-500">
            <PiUserCircle />
            <span className="mx-1">admin -</span>
            <TfiTime />
            <span className="ml-1">April 16, 2023</span>
          </div>
          <p className="text-sm pb-3 text-gray-500">
            {somedes.length >= 50 ? `${somedes}...` : somedes}
          </p>
          <button className="text-base font-semibold text-[#605be5] p-2 rounded-lg border border-[#605be5]">
            Read More
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
