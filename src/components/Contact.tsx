'use client';
import React from 'react'

//import components
import FormField from './FormField';
import SectionHeader from './SectionHeader'
import CustomButton from './CustomButton'

//import icons
import { SiCheckmk } from 'react-icons/si'

//import framer
import { motion } from "framer-motion";
import { fadeIn } from './Variants';

const Contact = () => {
  return (
    <motion.div
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className=' mb-10 pt-20 lg:pt-5 h-screen' id='contact'>
      <SectionHeader title='Contact' subTitle='Reach me' />
      <div className=' flex flex-col justify-between'>
      <div className=' flex flex-col gap-3 items-center justify-center'>
        <div className=' flex flex-col lg:flex-row gap-2 items-center mt-5'>
        <FormField label='First name' inputType='text' inputPlaceHolder='First name' inputStyles=' w-full' />
        <FormField label='Last name' inputType='text' inputPlaceHolder='Last name' inputStyles=' w-full' />
        </div>
        <div>
          <FormField label='Email' inputType='email' inputPlaceHolder='Email' inputStyles=' w-full' />
        </div>
        <div>
          <CustomButton title='Submit' btnType='submit' icon={<SiCheckmk />} containerStyles=' w-full rounded-md px-3 py-3 hover:bg-accent-hover flex items-center gap-2' iconStyles=' rotate-90' />
        </div>
      </div>
      <div className=' flex flex-col mx-3 mt-6 items-center lg:mx-20 justify-center gap-3'>
        <span className=' text-xl lg:text-3xl font-bold uppercase text-center'>Send ETH/AVAX/USDC</span>
        <span className=' text-sm text-tertiary font-bold uppercase text-center'>Buy crypto/blockchain based coffee</span>
        <div className=' flex items-center justify-between flex-col'>
          <span>
            To send USDC:
          </span>
          <span className=' text-accent text-[10px] bg-tertiary p-2 rounded-md'>
          0xEb64c2ce17Cfe1465b77e51E8eB786051d02731e
          </span>
          <span>
            To send ETH:
          </span>
          <span className=' text-accent bg-tertiary text-[10px] p-2 rounded-md'>
          0xE22d6994b6006b396a35630c50D7e100c6c6CE50
          </span>
        </div>
      </div>
      </div>
    </motion.div>
  )
}

export default Contact