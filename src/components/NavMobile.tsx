'use client'
import React from 'react'

//import types
import { NavMobileProps } from '@/types'

//import icons
import { BsX} from 'react-icons/bs'

//import constants
import { NavData } from '@/constants'

//import link
import { Link } from 'react-scroll'

//import components
import Socials from './Socials'

//import framer
import { motion } from 'framer-motion'

//import variants
import { fadeIn } from './Variants'
import CustomButton from './CustomButton'
import Image from 'next/image'

//Assets
import logo from '../../public/assets/LogoExalt.png'


const NavMobile = ({closeModal} : NavMobileProps) => {
  return (
    <motion.div
    variants={fadeIn('left', 0.1)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.3}}
    className=' fixed inset-0 bg-tertiary'>
        <span className=' w-fit' onClick={closeModal}>
            <BsX className=' text-white text-5xl' />
        </span>
        <div className=' w-full h-[100px] flex items-center justify-center absolute'>
            <Image src={logo} alt='nav_mobile_logo' width={200} height={100} />
        </div>
        <div className=' flex flex-col space-y-6 text-4xl uppercase font-semibold flexCenter h-screen'>
            {NavData.map((link: any, index: number) => (
                <Link to={link.Path}
                onClick={closeModal}
                key={index}
                smooth
                spy
                activeClass='active'
                >
                <span className=' hover:text-accent hover:border-b-2 border-accent cursor-pointer'>
                    {link.name}
                </span>
                </Link>
            ))}
             
            <div>
            <a href="https://github.com/abubakar508"  target="_blank"
            rel="noopener noreferrer">
             <CustomButton title='Explore More' containerStyles=' mt-4 py-3 font-comforta font-bold xl:py-4 xl:px-8' />
             </a>
                </div> 
                <div className=' absolute bottom-10 flex items-center flex-col'>
            <Socials />
            <span className=' text-lg capitalize text-neutral-400'>
                Made with abisma
            </span>
            <span className=' text-lg capitalize text-neutral-400'>
                All Rights Reserved
            </span>
        </div>          
        </div>
       
    </motion.div>
  )
}

export default NavMobile