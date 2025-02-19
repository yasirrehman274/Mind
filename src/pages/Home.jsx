import React from "react";
import { Carousel } from "../components/Carousel";
import Slider1 from "../assets/slider1.jpg";
import Slider2 from "../assets/slider2.jpg";
import Slider3 from "../assets/Slider3.jpg";
import BlogAuthorComponent from "../components/BlogAuthorComponent";

let slides = [Slider1, Slider2, Slider3];

const Home = () => {
  return (
    <>
      {/* <div className="px-2 sm:px-[3vw] md:px-[4vw] bg-[#F9F9FE]"> */}
      <div className="">
        <Carousel slides={slides} />
        <BlogAuthorComponent />
      </div>
    </>
  );
};

export default Home;
