import React from 'react'
import SectionWrapper from './sectionWrapper';
import trendy from "/images/trendy.png";
import desk from "/images/deskPlant.png";
import shopping from "/images/icon/shopping.png";

function TrendingPlants() {
  const o2Detail = [
    {
      id: 1,
      img: trendy,
      heading: "For Your Desks Decorations",
      desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: 599,
      position: 290,
      width: 430,
      link: "/",
    },
    {
      id: 2,
      img: desk,
      width: 500,
      position: 290,
      heading: "For Your Desks Decorations",
      desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: 399,
      link: "/",
    },
  ];
  return (
    <SectionWrapper id="o2" sectionHeading={"Our Trendy plants"}>
      <div className='space-y-32'>
        {o2Detail.map((od, index) => {
          return (
            <div
              className={`${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col w-full justify-between items-center border-2 border-white/5 rounded-4xl md:rounded-[120px]  md:h-[350px] glass`}
            >
              <div
                className={`left  justify-center hidden md:flex  relative w-full md:w-1/2 `}
              >
                <img
                  width={`${od.width}`}
                  src={od.img}
                  style={{ position: "absolute", top: `-${od.position}px` }}
                />
              </div>

              <div
                className={`left  justify-center flex    md:hidden   w-full md:w-1/2 `}
              >
                <img
                  width={`${od.width / 2}`}
                  src={od.img}

                />
              </div>

              <div className="right  space-y-2 p-6 md:p-16">
                <div className="space-y-4">
                  <h1 className="font-semibold text-xl md:text-2xl">{od.heading}</h1>
                  <p className="font-semibold text-sm">{od.desc}</p>
                  <h1 className="font-semibold text-2xl">Rs. {od.price}/-</h1>
                </div>
                <div className="flex gap-8">
                  <button className="rounded-md py-1 px-8  w-fit h-10 font-medium border border-white">
                    Explore
                  </button>
                  <a
                    href={od.link}
                    className="rounded-md py-1 px-1  flex justify-center items-center w-10 h-10 font-medium border border-white"
                  >
                    <img src={shopping} width={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div> 
    </SectionWrapper>
  );
}

export default TrendingPlants