'use client'
import React, { useState } from "react";

//import components
import SectionHeader from "./SectionHeader";

//import Skills data constant
import { skillData } from "@/constants";

//framer
import { motion }from 'framer-motion'
import { fadeIn } from "./Variants";
const Skills = () => {

  const [index, setIndex] = useState(0)
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className=" h-screen lg:h-max md:h-max pt-20 lg:pt-5" id="skills">
      {/* section Header */}
      <SectionHeader title="skills" subTitle="skills is excellence" />
      <section
      className=" flex flex-col items-center justify-center gap-1 mt-5">
        <div className=" flex items-center gap-3 pb-5">
          {/* skill data mapping */}
        {skillData.map((skill : any, skillIndex : number) => (
          <div className={` ${ index === skillIndex && ' text-white bg-accent  p-1 rounded-md transition-all duration-300'} cursor-pointer capitalize xl:text-lg font-comforta`}
          key={skillIndex}
          onClick={() => setIndex(skillIndex)}
          >
            {/* title */}
            {skill.title}
          </div>
        ))}
        </div>
        <div className=" w-full lg:w-1/2 px-10 gap-4 flex flex-col">
          {/* content */}
          {skillData[index].info.map((item :any, itemIndex : number) => (
            <div className=" bg-tertiary rounded-md py-2" key={itemIndex}>
              <div className=" w-full flex flex-col items-center justify-between gap-2">
                {/* content title */}
                <span className=" text-sm text-accent lg:text-lg">
              {item.title}:
              </span>
              {/* content desc */}
              <span className=" text-xl  lg:text-2g flex items-center gap-3">
                {item.icons}
              </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
