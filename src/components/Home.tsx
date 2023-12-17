"use client";
import React from 'react'

//import next image
import Image from 'next/image'

//import type animation
import { TypeAnimation} from 'react-type-animation'

//import icons
import { AiOutlineDesktop} from 'react-icons/ai'

//import components
import CustomButton from './CustomButton';

//import constants
import { typeSequence } from '@/constants';

//import variants
import { fadeIn } from '../components/Variants'

//import framer
import { motion } from 'framer-motion'

//import assets
import logo from '../../public/assets/Abisma.png'
import IsmailCodes from '../../public/assets/IsmailCodes.png'


const Home = () => {
  return (
    <motion.div
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className=' flex items-center justify-center lg:justify-start' id='home'>
      {/* home wrapper */}
        <div className=' h-screen lg:w-[80%] z-20 flex lg:items-start items-center justify-center flex-col lg:ml-20'>
          {/* name */}
            <h1 className=' text-tertiary uppercase font-extrabold text-[150px] lg:text-[250px] xl:text-[350px] tracking-wider relative flex items-center'>
                Abu
                <Image src={IsmailCodes} width={500} height={50} alt='' className=' absolute bottom-0 lg:bottom-10 lg:w-[800px]' />
            </h1>
            <div className=' flex items-center gap-2 justify-start'>
                <AiOutlineDesktop className=' hidden lg:block text-3xl text-accent' />
                {/* type animation */}
            <TypeAnimation
            sequence={typeSequence}
            deletionSpeed={20}
            repeat={Infinity}
            wrapper='div'
            className=' text-2xl lg:text-3xl xl:text-4xl font-comforta text-accent font-bold'
             />
               
             </div>
             {/* link to github profile */}
             <a href="https://github.com/abubakar508"  target="_blank"
            rel="noopener noreferrer">
             <CustomButton title='Explore More' containerStyles=' mt-4 py-3 font-comforta font-bold xl:py-4 xl:px-8' />
             </a>
        </div>
        {/* image  */}
        <div className=' bg-transparent hidden lg:block w-[800px] h-[800px] rounded-full overflow-hidden absolute right-[8%]'>
          <Image src={logo} width={10000} height={100} alt='hero-image' className=' w-full h-full object-cover  invert-0 grayscale' priority quality={100} />
        </div>
    </motion.div>
  )
}

export default Home;

//footer comments
//link explore more button to the github profile using the anchor tag