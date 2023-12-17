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
           
        </div>
    </motion.div>
  )
}

export default NavMobile