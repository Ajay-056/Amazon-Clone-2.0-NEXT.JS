import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div className='flex flex-grow items-center bg-amazon_blue p-1 py-2'>
            <div className='flex flex-grow items-center sm:flex-grow-0'>
                <Image
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={40}
                    className='pt-1 cursor-pointer object-contain h-10 focus:outline-none hover:outline rounded-sm outline-1 outline-white'
                />
            </div>

            {/* Search */}
            <div className='hidden sm:flex w-40 m-auto focus-within:flex-grow items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' autoFocus autoComplete='true' name="prodsearch" id="prodsearch" />
                <SearchIcon className='h-12 p-4' />
            </div>
    
            {/* Bottom nav */}
            <div className='text-white flex items-center text-sm space-x-10 mr-8 px-4 whitespace-nowrap py-1'>
                <div className='cursor-pointer p-1 hover:outline rounded-sm outline-1 outline-white'>
                    <p className='text-slate-300 text-xs'>Hello, Sign In</p>
                    <p className='font-bold'>Account & Lists</p>
                </div>
                <div className='cursor-pointer p-1 hover:outline rounded-sm outline-1 outline-white'>
                    <p className='text-slate-300 text-xs'>Returns</p>
                    <p className='font-bold'>& Orders</p>
                </div>
                <div className='cursor-pointer flex items-end p-1 hover:outline rounded-sm outline-1 outline-white'>
                    <ShoppingCartIcon className='h-7' />
                    <p className='pl-1 text-xs font-bold'>Cart</p>
                </div>
            </div>
        </div>
        
        {/* Bottom Nav */}
        <div></div>
    </header>
  )
}

export default Header