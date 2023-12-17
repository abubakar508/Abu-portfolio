import React from 'react'

// components
import SideNav from '@/components/SideNav'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div>
        <SideNav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />

    </div>
  )
}

export default page