"use client";
import { NavData } from '@/constants';
import React, { useState } from 'react'


// react scroll components
import { Link } from 'react-scroll';


const SideNav = () => {
  const [link, setLink] = useState(false);
  return (
    <div className=' hidden lg:flex w-fit p-2 h-screen fixed  right-[2%] items-center justify-center z-50'>
    <div className=' flex flex-col  space-y-5'>
    {NavData.map((link, index) => (
          <Link
            to={link.Path}
            key={index}
            smooth
            spy
            offset={-50}
            activeClass="btnActive"
          >
            <div className=" w-5 h-5 bg-accent/50 rounded-full">
            </div>
          </Link>
        ))}
    </div>
    </div>
  )
}

export default SideNav;