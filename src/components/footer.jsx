import React from 'react'

function Footer() {
  return (
    <div className="p-6 md:p-12 space-y-12">
      <div className="up grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto justify-between">
        <div className="space-y-2">
          <div className="">
            <img src="/images/brand/brand_logo.png" width={300} />
          </div>
          <div className=" text-center md:text-left">
            <p>
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
          </div>
        </div>
        <div className="mx-auto text-center md:mx-0 md:text-left">
          <div className="">
            <h1 className="font-bold">Quick Link’s</h1>
          </div>
          <div className="">
            <ul className="justify-evenly underline space-y-1 mt-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Type’s Of plant’s</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="">
            <h1 className="font-bold text-center md:text-left">
              For Every Update.
            </h1>
          </div>
          <div className="flex mt-2 items-center  pr-[2px] outline rounded-lg h-10">
            <input
              className=" h-10 w-[55%] px-2"
              type="text"
              placeholder="Enter Email"
            />
            <button className="bg-white w-[45%] h-9 text-black font-semibold px-2 rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="down flex flex-col gap-4 md:flex-row justify-between">
        <div>
          <ul className="flex justify-evenly gap-x-12  font-extrabold">
            <li>
              <a href="/">FB</a>
            </li>
            <li>
              <a href="/">TW</a>
            </li>
            <li>
              <a href="/">LI</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p>FloraVision © all right reserve</p>
        </div>
      </div>
    </div>
  );
}

export default Footer