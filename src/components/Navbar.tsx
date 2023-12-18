"use client";
//import useState & useEffect
import React, { useEffect, useState } from "react";

//import next image
import Image from "next/image";

//import components
import NavMobile from "./NavMobile";
import Socials from "./Socials";

//import constants
import { NavData } from "@/constants";

//import icons
import { RiMenu3Fill } from "react-icons/ri";

//import next link
import { Link } from "react-scroll";

//import assets
import logo from '../../public/assets/LogoExalt.png'

const NavBar = () => {

  //state management
  const [header, setHeader] = useState(false);

  // scroll handler 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    //add event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      //remove event listener
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // state management 
  const [modal, setModal] = useState(false);
  return (
    <nav
      className={` flex items-center justify-between px-3 py-3 fixed w-full z-40 ${
        header ? "  bg-secondary" : ""
      }`}
    >
      {/* navigation logo */}
      <div>
        <Image
          src={logo}
          width={150}
          height={70}
          quality={100}
          priority
          alt="Navigation logo"
          className=" w-[200px] h-[60px]"
        />
      </div>
      {/* navigation links */}
      <div className=" hidden lg:flex">
        {NavData.map((link: any, index : number) => (
          <Link
            to={link.Path}
            key={index}
            smooth
            spy
            offset={-50}
            activeClass="active"
          >
            <span className=" mx-2 text-white hover:text-accent cursor-pointer text-sm lg:text-lg">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      {/* socials */}
      <div className=" hidden lg:flex">
        <Socials />
      </div>
      <div className=" block lg:hidden " onClick={() => setModal(!modal)}>
        <RiMenu3Fill className=" text-4xl text-accent" />
        {modal && <NavMobile closeModal={() => setModal(!modal)} />}
      </div>
    </nav>
  );
};

export default NavBar;
