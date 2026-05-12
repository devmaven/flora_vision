import React from 'react'
import SectionWrapper from './sectionWrapper';


function O2Plants() {
  return (
    <SectionWrapper id="o2" sectionHeading={"Our Best o2"}>
      <div className=" flex relative flex-col md:flex-row md:h-[512px] gap-y-8  justify-between items-center border-2 md:rounded-[92px] px-4 py-12 md:p-10 glass border-gray-600">
        <div className="left w-1/2">
          <img className="w-[520px] md:absolute -top-10" src={"/images/p_1.png"} />
        </div>
        <div className="right space-y-1 text-md w-full md:w-1/2">
          <div className="space-y-4">
            <h1 className="text-xl font-bold">
              We Have Small And Best O2 Plants Collection’s
            </h1>
            <p>
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </p>
            <p>
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:flex-row justify-between">
            <button className="border w-full  md:w-fit h-8 px-6 flex justify-center items-center py-1 rounded-lg">
              Explore
            </button>
            <div className="flex justify-between items-center gap-x-4">
              <button>
                <img
                  className="rotate-[180deg]"
                  src={"/images/right.svg"}
                  width={12}
                />
              </button>
              <p className="text-xs">
                {" "}
                <span className="text-sm">01/</span>04
              </p>
              <button>
                <img src={"/images/right.svg"} width={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default O2Plants