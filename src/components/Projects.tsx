"use client";
import React, { useState } from "react";

//import next image
import Image from "next/image";

//import section header
import SectionHeader from "./SectionHeader";

//import components
import CustomButton from "./CustomButton";

//import icons
import { SiGithub, SiVercel } from "react-icons/si";

//import framer
import { motion } from "framer-motion";

//import icons
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { fadeIn } from "./Variants";

const Projects = () => {

  const [click, setClick] = useState(false)
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
      className=" lg:h-max h-screen md:h-max Pt-20 mt-20 lg:Pt-5 relative"
      id="projects"
    >
      <SectionHeader title="Projects" subTitle="Projects prove skils" />
      <section className=" items-center justify-between lg:justify-evenly space-y-20 lg:gap-0 lg:h-[450px] flex flex-col lg:flex-row">
        <div className=" lg:w-[500px] md:w-[400px] lg:h-full p-2 flex flex-col text-center items-center md:text-center md:items-center lg:items-start justify-center space-y-3">
          <h1 className=" text-3xl font-bold ">
            {" "}
            <span className=" text-accent">Projects</span> prove the existence
            of skill & knowledge
          </h1>
          <small className=" md:w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero neque
            molestias eaque sint doloribus nesciunt natus dolorem ea ut id
            corporis, deserunt in culpa quia omnis suscipit quos, totam odit?
          </small>
          <a href="https://github.com/abubakar508" target="_blank"
            rel="noopener noreferrer">
            <CustomButton
              title="View Projects"
              containerStyles="w-fit px-3 py-2 hover:bg-accent-hover"
            />
          </a>
        </div>
        <div className=" flex flex-col-reverse gap-2">
        <div className=" rounded-md p-2 bg-accent cursor-pointer w-[400px] h-[200px] flex items-center justify-between">
          <a href="https://github.com/abubakar508" target="_blank"
            rel="noopener noreferrer">
            <div className=" flex items-center justify-between gap-2">
              <span className=" text-primary text-6xl">
                <SiGithub />
              </span>
              <span className=" text-primary text-sm">
                Link to Github account
              </span>
            </div>
          </a>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            <div className=" flex items-center justify-between gap-2">
              <span className=" text-primary text-6xl">
                <SiVercel />
              </span>
              <span className=" text-primary text-sm">
                Link to Vercel account
              </span>
            </div>
          </a>
        </div>
        <div>
          <CustomButton title="Hire Me" icon={<AiFillCheckCircle/>} containerStyles=" flex items-center justify-center w-full items-center gap-3 py-3 hover:bg-accent-hover"  />
        </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
