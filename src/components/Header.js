import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

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
        <div className="hidden sm:flex  w-40 m-auto focus-within:flex-grow items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            autoComplete="true"
            name="prodsearch"
            id="prodsearch"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Top nav right side */}
        <div className="text-white flex items-center text-xs sm:text-sm space-x-2 sm:space-x-10 sm:mr-8 sm:px-4 whitespace-nowrap py-1">
          <div className="hidden sm:block cursor-pointer p-1 hover:outline rounded-sm outline-1 outline-white">
            <p className="text-slate-300 text-xs">Hello, Sign In</p>
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
          <div className="relative cursor-pointer flex items-end pr-10 sm:pr-0">
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
