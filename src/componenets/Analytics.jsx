import React from "react";
import laptopImage from "../assets/laptop.jpg"
const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="container mx-auto text-center grid md:text-left md:grid-cols-2 items-center">
        <div className="img-wrapper">
          <img className="w-full" src={laptopImage} alt="" />
        </div>
        <div className="text-wrapper flow-content--s">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h2 className="text-3xl font-bold">Manage Data Analytics Centrally</h2>
          <p className="max-w-[550px] mx-auto md:mx-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            minus neque mollitia totam unde praesentium libero reprehenderit
            adipisci delectus similique eum, beatae, nesciunt sapiente saepe.
          </p>
          <a href="" className="btn inline-block  bg-black text-[#00df9a] py-4 px-8 text-md rounded-md">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
