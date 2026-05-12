import React from "react";
import SectionWrapper from "./sectionWrapper";
import agla from "/images/p1.png";
import i_1 from "/images/i_1.png";
import Ratings from "./ratings";

function HeroSection() {
  return (
    <SectionWrapper id="hero">
      <div className="w-full flex flex-col lg:flex-row gap-x-8 gap-y-30 justify-between ">
        <div className="space-y-30 md:w-1/2">
          <div className=" h-50  p-4">
            <h1 className="text-4xl text-center md:text-left md:text-6xl text-gray-300 font-bold">
              Earth's Exhale
            </h1>

            <p className="mt-4 text-center md:text-left text-lg">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.'
            </p>

            <div className="flex flex-col-reverse md:flex-row gap-4 mt-4">
              <button className="rounded-md py-1 px-8 font-medium border border-white">
                Buy Now
              </button>
              <div className="flex gap-2 justify-center">
                <button className="flex justify-center items-center rounded-full h-10 w-10 border border-white">
                  <img width={12} src={"/images/play.png"} />
                </button>
                <button className="font-indie flower">Live Demo...</button>
              </div> 
            </div>
          </div>
          <div className="w-64 border space-y-4 glass rounded-4xl h-38 p-4 mx-auto md:mx-0">
            <div className="flex w-full gap-4  items-center">
              <div
                className="w-12 h-12 flex bg-cover  rounded-full"
                style={{ backgroundImage: `url(${i_1})` }}
              ></div>
              <div>
                <p className="text-md">Ronnei Hamill</p>
                <Ratings rate={4.5} />
              </div>
            </div>
            <div>
              <p className=" text-xs">
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my'
              </p>
            </div>
          </div>
        </div>

        <div className=" rounded-5xl md:w-[350px] h-[450px]  flex-row  mx-auto  md:mx-0  border border-gray-500 glass   ">
          <div className=" -translate-y-15 flex justify-center">
            <img width={"100%"} src={agla} alt="plant" />
          </div>
          <div className=" space-y-2 px-12 -translate-y-24">
            <div className="space-y-1">
              <p className="text-md">Indoor Plant</p>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">Aglaonema plant</h2>
                <button>
                  <img src={"/images/right.svg"} width={14} />
                </button>
              </div>
            </div>
            <div>
              <button className="rounded-md py-1 px-8 font-medium border border-white ">
                Buy Now
              </button>
            </div>
            <ul className="flex gap-x-2 justify-center mt-8">
              <li className="w-3 h-1 rounded-full bg-white"></li>
              <li className="w-1 h-1 rounded-full bg-white"></li>
              <li className="w-1 h-1 rounded-full bg-white"></li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
