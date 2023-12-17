import React from 'react'

//import types
import { SectionHeaderProps } from '@/types'

const SectionHeader = ({title, subTitle} : SectionHeaderProps) => {
  return (
    <div className=' flex flex-col items-center justify-center space-y-2 w-full'>
        <h1 className=' text-3xl font-extrabold font-montserrat text-accent uppercase'>
            {title}
        </h1>
        <small className=' font-medium text-3xl text-accent font-lovers'>
            {subTitle}
        </small>
    </div>
  )
}

export default SectionHeader