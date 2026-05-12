import React from 'react'
import brand_logo from '/images/brand/brand_logo.png'
import search from '/images/icon/search.png'
import shopping from '/images/icon/shopping.png'
import ham from '/images/icon/ham.png'
function NavBar() {
  return (
    <nav>
      <div className="flex justify-between items-center py-8 px-4">
        <div className="flex items-center">
          <img src={brand_logo} className="w-32" />
        </div>

        <ul className="hidden lg:flex gap-x-12 text-lg font-indie">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <select>
              <option value="default">Plant Type</option>
            </select>
          </li>
          <li>
            <a href="">More</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="flex gap-8 items-center ">
          <button className="hidden lg:flex">
            <img src={search} width={20} />
          </button>
          <button className="hidden lg:flex">
            <img src={shopping} width={20} />
          </button>
          <button>
            <img src={ham} width={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar