"use client"
import React from 'react'

//import countup
import CountUp from 'react-countup'

//import components
import SectionHeader from './SectionHeader'

//import next image
import Image from 'next/image'

//import icons
import { SiJavascript, SiTypescript, SiPython, SiSolidity } from 'react-icons/si'

//import framer
import { motion } from 'framer-motion'

// assets
import about from '../../public/assets/about.png'
import { fadeIn } from './Variants'


const About = () => {
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className=' sm:h-max pt-24 lg:pt-20' id='about'>
      {/* section header */}
      <SectionHeader title='About' subTitle='About abisma' />
      {/* about wrapper */}
      <div className=' flex flex-col lg:flex-row items-center lg:justify-center lg:gap-6'>
      <div
      className=''>
        <section className='  w-full md:w-[500px] p-2 text-center lg:text-start'>
          <h1 className=' text-slate-200 text-3xl font-black tracking-wide font-comforta'>
            <span className=' text-accent'>Captivating </span> magnificience is a progenic talent. Birthing real digital ideas.
          </h1>
          <small className=' text-sm font-bold font-comforta'>
            I am a software enginner based in Nairobi, Kenya. My focus is on mobile development, web development & blockchain development where i have dived into smart contract development. Achieveing greater heights in the tech space is an all time urge.
          </small>
        </section>
        <section className=' grid grid-cols-4 gap-1 w-full md:w-[500px] items-center justify-center'>
        <div className=' p-2 w-fit border-r border-accent flex flex-col space-y-2 text-center'>
          <div className=' text-3xl font-black uppercase flex text-accent text-center items-center justify-center'>
          <CountUp start={2} end={4} />+
         
          </div>
          <span className=' text-slate-200 text-[12px] font-medium uppercase'>
            Years of <br /> experience
          </span>

        </div>
        <div className=' p-2 w-fit border-r border-accent flex flex-col space-y-2 text-center'>
          <div className=' text-3xl font-black uppercase flex text-accent text-center items-center justify-center'>
          <CountUp start={2} end={20} />+
         
          </div>
          <span className=' text-slate-200 text-[12px] font-medium uppercase'>
            satisfied <br /> clients
          </span>

        </div>
        <div className=' p-2 w-fit border-r border-accent flex flex-col space-y-2 text-center'>
          <div className=' text-3xl font-black uppercase flex text-accent text-center items-center justify-center'>
          <CountUp start={2} end={30} />+
         
          </div>
          <span className=' text-slate-200 text-[12px] font-medium uppercase'>
            finished <br /> projects
          </span>

        </div>
        <div className=' p-2 w-fit border-r border-accent flex flex-col space-y-2 text-center'>
          <div className=' text-3xl font-black uppercase flex text-accent text-center items-center justify-center'>
          0<CountUp start={20} end={3} />
         
          </div>
          <span className=' text-slate-200 text-[10px] font-medium uppercase'>
            programming <br /> languages
          </span>

        </div>
        </section>
        <div className=' grid grid-cols-4'>
          <div className=' flexCenter flex-col lg:p-2  h-[100px] gap-2'>
            <span className=' text-yellow-400 text-3xl'>
              <SiJavascript />
            </span>
            <span className=' text-sm'>
              JavaScript
            </span>
          </div>
          <div  className=' flexCenter flex-col lg:p-2  h-[100px] gap-2'>
            <span className=' text-3xl text-blue-500'>
              <SiTypescript />
            </span>
            <span className=' text-sm'>
              TypeScript
            </span>
          </div>
          <div  className=' flexCenter flex-col lg:p-2  h-[100px] gap-2'>
            <span className=' bg-gradient-to-tr from-blue-600 to-yellow-400 p-2 rounded-lg text-3xl' >
              <SiPython />
            </span>
            <span className=' text-sm'>
              Python
            </span>
          </div>
          <div  className=' flexCenter flex-col lg:p-2  h-[100px] gap-2'>
            <span className=' text-3xl'>
              <SiSolidity />
            </span>
            <span className=' text-sm'>
              Solidity
            </span>
          </div>
        </div>
      </div>
      <div className=' xl:w-[1000px] xl:h-full'>
        <Image src={about} alt='About image' className=' w-full h-full' />
      </div>
      </div>
    </motion.div>
  )
}

export default About