import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-router-dom'
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify"
import { IoClose } from "@react-icons/all-files/io5/IoClose"

function NavBarProject() {
    const [hamburgerOpen,setHamburgerOpen] = useState(false);
    const handleHamOpen = () => setHamburgerOpen(!hamburgerOpen);
  return (
    <>
     <div className="w-full sticky top-0 mx-auto bg-white">
      <div className="container">
        <ul className='hidden md:flex justify-end gap-5 p-2 text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-ralway'>
            <li className='nav-item hover:text-site-secondary hover:font-bold cursor-pointer'>
                <ScrollLink to="/#home" activeClass="active" spy={true} smooth={true} offset={-80} duration={500} >
              Home
              </ScrollLink>
            </li>
            <li className='nav-item hover:text-site-secondary hover:font-bold cursor-pointer'>
              <ScrollLink to="/#about" activeClass="active" spy smooth offset={0} duration={500}>
                  About Me
              </ScrollLink>
                
            </li>
            <li className='nav-item hover:text-site-secondary hover:font-bold cursor-pointer'>
              <ScrollLink to="/#portfolio" activeClass="active" spy={true} smooth={true} duration={500} >
                  Portfolio
              </ScrollLink>
            </li>
            <li className='nav-item hover:text-site-secondary hover:font-bold cursor-pointer'>
            <ScrollLink to='/#contact' spy={true} activeClass="active" smooth={true} offset={50} duration={500} >
              Contact Me
            </ScrollLink>
            </li>
        </ul>
        <div className={`${hamburgerOpen ? 'hidden':'md:hidden justify-items-end pr-5 py-3'} `}>
            <button className="flex" onClick={handleHamOpen}>
              <FaAlignJustify className='hamburger text-accent' />
            </button>
        </div>
      </div>
      </div>
      <div className={`md:hidden ${hamburgerOpen ? 'block' : 'hidden'}`}>
      <div className="flex w-screen justify-end bg-secondary-light">
        <IoClose size={30} className='mr-5 mt-5 text-accent' onClick={handleHamOpen}/>
      </div>
        <ul className='bg-secondary-light items-center justify-center flex flex-col w-screen h-screen md:hidden gap-5 p-2 text-defaultBase sm:text-ralway md:text-midText lg:text-largeText font-ralway'>
        <ScrollLink to='/#home'>
          <li className='hover:text-site-secondary hover:font-bold cursor-pointer'>
              Home
          </li>
        </ScrollLink>
        <ScrollLink to='/#about'>
          <li>
              About Me
          </li>
        </ScrollLink>
        <ScrollLink to='/#portfolio'>
          <li>
              Portfolio
          </li>
        </ScrollLink>
        <ScrollLink to='/#'>
          <li>
              Contact Me
          </li>
        </ScrollLink>
      </ul> 
      </div> 
    </>
  )
}

export default NavBarProject
