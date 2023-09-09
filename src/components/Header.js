import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
        <div className="flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="pt-1 sm:pr-4 cursor-pointer object-contain h-8 sm:h-10 focus:outline-none hover:outline rounded-sm outline-1 outline-white"
          />
        </div>

        {/* Top nav search */}
        <div className="hidden sm:flex  w-40 m-auto items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <select
            aria-describedby="searchDropdownDescription"
            className="h-full bg-gray-200 rounded-sm w-11 text-sm text-gray-600 rounded-l-sm"
            data-nav-selected="0"
            id="searchDropdownBox"
            name="url"
            tabIndex="0"
            title="Search in"
          >
            <option selected value="search-alias=aps">
              All
            </option>
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=fashion">Amazon Fashion</option>
            <option value="search-alias=nowstore">Amazon Fresh</option>
            <option value="search-alias=amazon-pharmacy">
              Amazon Pharmacy
            </option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias=mobile-apps">Apps &amp; Games</option>
            <option value="search-alias=audible">Audible Audiobooks</option>
            <option value="search-alias=baby">Baby</option>
            <option value="search-alias=beauty">Beauty</option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=automotive">Car &amp; Motorbike</option>
            <option value="search-alias=apparel">
              Clothing &amp; Accessories
            </option>
            <option value="search-alias=collectibles">Collectibles</option>
            <option value="search-alias=computers">
              Computers &amp; Accessories
            </option>
            <option value="search-alias=electronics">Electronics</option>
            <option value="search-alias=furniture">Furniture</option>
            <option value="search-alias=lawngarden">
              Garden &amp; Outdoors
            </option>
            <option value="search-alias=gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">
              Grocery &amp; Gourmet Foods
            </option>
            <option value="search-alias=hpc">Health &amp; Personal Care</option>
            <option value="search-alias=kitchen">Home &amp; Kitchen</option>
            <option value="search-alias=industrial">
              Industrial &amp; Scientific
            </option>
            <option value="search-alias=jewelry">Jewellery</option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=luggage">Luggage &amp; Bags</option>
            <option value="search-alias=luxury-beauty">Luxury Beauty</option>
            <option value="search-alias=dvd">Movies &amp; TV Shows</option>
            <option value="search-alias=popular">Music</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">
              Office Products
            </option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=shoes">Shoes &amp; Handbags</option>
            <option value="search-alias=software">Software</option>
            <option value="search-alias=sporting">
              Sports, Fitness &amp; Outdoors
            </option>
            <option value="search-alias=specialty-aps-sns">
              Subscribe &amp; Save
            </option>
            <option value="search-alias=home-improvement">
              Tools &amp; Home Improvement
            </option>
            <option value="search-alias=toys">Toys &amp; Games</option>
            <option value="search-alias=under-ten-dollars">Under ₹500</option>
            <option value="search-alias=videogames">Video Games</option>
            <option value="search-alias=watches">Watches</option>
          </select>
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
            autoComplete="true"
            name="prodsearch"
            id="prodsearch"
            placeholder="Search Amazon Clone !!!"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Top nav right side */}
        <div className="text-white flex items-center text-xs sm:text-sm space-x-2 sm:space-x-10 sm:mr-8 sm:px-4 whitespace-nowrap py-1">
          <div className="hidden sm:block cursor-pointer p-1 hover:outline rounded-sm outline-1 outline-white">
            <p onClick={signIn} className="text-slate-300 text-xs">
              Hello, Sign In
            </p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="hidden sm:block cursor-pointer p-1 hover:outline rounded-sm outline-1 outline-white">
            <p className="text-slate-300 text-xs">Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="flex items-center sm:hidden cursor-pointer pr-4 sm:pr-0">
            <p>Sign In -&gt;</p>
            <UserCircleIcon className="h-7 pl-2" />
          </div>
          <div className="relative cursor-pointer flex items-end pr-10 sm:pr-0 hover:outline rounded-sm outline-1 outline-white">
            <span className="absolute bottom-5 flex justify-center place-items-center right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-7" />
            <p className="pl-1 text-sm font-bold hidden sm:inline">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 sm:space-x-5 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="cursor-pointer flex items-center focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Fresh
        </p>
        <p className="link cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Today's Deals
        </p>
        <p className="link cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Amazon miniTV
        </p>
        <p className="link hidden md:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Sell
        </p>
        <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Gift Cards
        </p>
        <p className="link hidden md:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Coupons
        </p>
        <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Gift Ideas
        </p>
        <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Pet Supplies
        </p>
        <p className="link hidden md:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Amazon Pay
        </p>
        <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Buy Again
        </p>
        <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Amazon Business
        </p>
        <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none hover:outline outline-1 outline-offset-8 outline-white">
          Sports, Fitness & Outdoors
        </p>
      </div>
    </header>
  );
}

export default Header;
