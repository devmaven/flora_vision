import React from "react";
import SectionWrapper from "./sectionWrapper";
import shopping from "/images/icon/shopping.png";
import p_1 from "/images/p1.png";
import p_2 from "/images/p_2.png";
import p_3 from "/images/p_3.png";
import p_4 from "/images/p_4.png";
import p_5 from "/images/p_5.png";
import p_6 from "/images/p_6.png";

function TopSellingPlants() {
  const plants = [
    {
      id: 1,
      name: "Aglaonema plant",
      desc: "The Algaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: "300",
      image: p_1,
      link: "/",
    },
    {
      id: 2,
      name: "Plantain Lilies",
      desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: "380",
      image: p_2,
      link: "/",
    },
    {
      id: 3,
      name: "Cactus",
      desc: "It is known for their ability to thrive in arid environments",
      price: "259",
      image: p_3,
      link: "/",
    },
    {
      id: 4,
      name: "Swiss cheese Plant",
      desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: "400",
      image: p_4,
      link: "/",
    },
    {
      id: 5,
      name: "Sansevieria plant",
      desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: "450",
      image: p_5,
      link: "/",
    },
    {
      id: 6,
      name: "Agave plant",
      desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectu/",
      price: "359",
      image: p_6,
      link: "/",
    },
  ];
  return (
    <SectionWrapper id="top" sectionHeading={"Our Top Selling Plants"}>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-24 md:gap-20  ">
        {plants.map((plant, index) => {
          return (
            <div key={`plant-${index}`} className=" border border-gray-600 rounded-4xl  relative h-96  glass justify-between ">
              <div className="absolute -top-18">
                <img width={"550px"} src={plant.image} />
              </div>
              <div className="absolute bottom-4 p-4 px-12">
                <div className="space-y-1">
                  <h1 className="text-xl">{plant.name}</h1>
                  <p className="text-sm">{plant.desc}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-xl ">Rs. {plant.price}/- </div>
                    <button className="rounded-md w-8 h-8 flex justify-center items-center font-medium border border-white ">
                      <img className="h-4" src={shopping} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default TopSellingPlants;
