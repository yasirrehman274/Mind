import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { assets } from "../assets/assets";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Table = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="flex justify-between items-center flex-wrap p-5">
            <p className="text-black">Product Details</p>
            <div>
              <input
                className="py-2 px-2 mx-3 outline-none border border-solid border-[#0298cf] rounded-lg text-[#0298cf]"
                type="text"
                name=""
                placeholder="Product"
              />
              <button className="outline-none border-none cursor-pointer py-2 px-4 rounded-lg text-white bg-[#0298cf]">
                + Add New
              </button>
            </div>
          </div>
          <div className="h-screen overflow-hidden">
            <table className="table-fixed border-collapse w-full">
              <thead>
                <tr>
                  <th className="position-static top-0 bg-[#f6f9fc] text-[#8493a5] text-sm border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    S No.
                  </th>
                  <th className="position-static top-0 bg-[#f6f9fc] text-[#8493a5] text-sm border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Image
                  </th>
                  <th className="position-static top-0 bg-[#f6f9fc] text-[#8493a5] text-sm border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Username
                  </th>
                  <th className="position-static top-0 bg-[#f6f9fc] text-[#8493a5] text-sm border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Email
                  </th>
                  <th className="position-static top-0 bg-[#f6f9fc] text-[#8493a5] text-sm border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Department
                  </th>
                  <th className="position-static top-0 bg-[#f6f9fc] text-[#8493a5] text-sm border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    1
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center align-middle">
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="h-16 object-cover rounded-2xl border-[5px] border-solid border-[#ced0d2]"
                        src={assets.Post_14}
                      />
                    </div>
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Rakhi Gupts
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    rakhigupta@gmail.com
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    Engineering
                  </td>
                  <td className="border-b border-solid border-[#dddddd] p-2 break-all text-center">
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#0298cf] mr-2">
                      <FaEdit
                        fontSize={18}
                        className="
                       text-white"
                      />
                    </button>
                    <button className="cursor-pointer py-2 px-3 rounded-lg bg-[#f80000]">
                      <MdDelete fontSize={18} className="text-white" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end w-full py-3 px-5 bg-[#8493a5]">
            <div className="p-3  border-[2px] h-10 w-10 border-solid border-[#d5d0d0]  rounded-full flex justify-center align-content-center bg-[#0298cf] text-white mx-2">
              <FaChevronLeft fontSize={12} />
            </div>

            <div className="p-2 border-[2px] border-solid h-10 w-10 border-[#d5d0d0]   rounded-full flex justify-center align-content-center bg-[#0298cf] text-white mx-2">
              1
            </div>
            <div className="p-2 border-[2px] border-solid h-10 w-10 border-[#d5d0d0]  rounded-full flex justify-center align-content-center bg-[#0298cf] text-white  mx-2">
              2
            </div>

            <div className="p-3 border-[2px] h-10 w-10 border-[#d5d0d0]  rounded-full flex justify-center align-content-center bg-[#0298cf] text-white mx-2">
              <FaChevronRight fontSize={12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
