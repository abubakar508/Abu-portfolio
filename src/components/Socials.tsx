"use client";
import React from 'react'

//import icons
import { RiGithubFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill, RiMailFill} from 'react-icons/ri'

const Socials = () => {
    const socialData = [
        {
            icon: <RiGithubFill />,
            link: 'https://github.com/abubakar508'
        },
        {
            icon: <RiTwitterFill />,
            link: 'https://www.x.com/machabubakar'
        },
        {
            icon: <RiLinkedinFill />,
            link: 'https://www.linkedin.com/in/ismail508/'
        },
        {
            icon: <RiInstagramFill />,
            link: 'www.instagram.com'
        },
        {
            icon: <RiMailFill />,
            link: 'mailto:abubakarismail508@gmail.com'
        },
        
        
    ]
  return (
    <div className=' flex items-center gap-2 justify-between px-2'>
        {socialData.map((socials : any, index : number) => (
            <a href={socials.link} target="_blank"
            rel="noopener noreferrer" key={index}>
            <div className=' text-3xl mx-4 text-white hover:text-accent-hover cursor-pointer'>
                {socials.icon}
            </div>
            </a>
        ))}
    </div>
  )
}

export default Socials