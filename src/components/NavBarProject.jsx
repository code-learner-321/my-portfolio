import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify"
import { IoClose } from "@react-icons/all-files/io5/IoClose"

function NavBarProject() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleHamOpen = () => setHamburgerOpen(!hamburgerOpen);

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        
        // If we're on the project page, navigate to home first
        if (location.pathname === '/project') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
                navigate('/#' + sectionId);
            }
        }
        
        // Close mobile menu if open
        if (hamburgerOpen) {
            handleHamOpen();
        }
    };

    const getNavItemClass = (sectionId) => {
        const baseClasses = 'nav-item cursor-pointer';
        const activeClasses = 'text-site-secondary font-bold';
        const hoverClasses = 'hover:text-site-secondary hover:font-bold';
        
        return `${baseClasses} ${activeSection === sectionId ? activeClasses : hoverClasses}`;
    };

    return (
        <>
            <div className="w-full sticky top-0 mx-auto bg-white z-50">
                <div className="container">
                    <ul className='hidden md:flex justify-end gap-5 p-2 text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-ralway'>
                        <li className={getNavItemClass('home')}>
                            <button 
                                className="w-full focus:outline-none" 
                                onClick={() => handleNavClick('home')}
                            >
                                Home
                            </button>
                        </li>
                        <li className={getNavItemClass('about')}>
                            <button 
                                className="w-full focus:outline-none" 
                                onClick={() => handleNavClick('about')}
                            >
                                About Me
                            </button>
                        </li>
                        <li className={getNavItemClass('portfolio')}>
                            <button 
                                className="w-full focus:outline-none" 
                                onClick={() => handleNavClick('portfolio')}
                            >
                                Portfolio
                            </button>
                        </li>
                        <li className={getNavItemClass('contact')}>
                            <button 
                                className="w-full focus:outline-none" 
                                onClick={() => handleNavClick('contact')}
                            >
                                Contact Me
                            </button>
                        </li>
                    </ul>
                    <div className={`${hamburgerOpen ? 'hidden' : 'md:hidden justify-items-end pr-5 py-3'} `}>
                        <button className="flex" onClick={handleHamOpen}>
                            <FaAlignJustify className='hamburger text-accent' />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${hamburgerOpen ? 'block' : 'hidden'} z-50`}>
                <div className="flex w-screen justify-end bg-secondary-light">
                    <IoClose size={30} className='mr-5 mt-5 text-accent' onClick={handleHamOpen} />
                </div>
                <ul className='bg-secondary-light items-center justify-center flex flex-col w-screen h-screen md:hidden gap-5 p-2 text-defaultBase sm:text-ralway md:text-midText lg:text-largeText font-ralway'>
                    <li className={getNavItemClass('home')}>
                        <button 
                            className="w-full focus:outline-none" 
                            onClick={() => handleNavClick('home')}
                        >
                            Home
                        </button>
                    </li>
                    <li className={getNavItemClass('about')}>
                        <button 
                            className="w-full focus:outline-none" 
                            onClick={() => handleNavClick('about')}
                        >
                            About Me
                        </button>
                    </li>
                    <li className={getNavItemClass('portfolio')}>
                        <button 
                            className="w-full focus:outline-none" 
                            onClick={() => handleNavClick('portfolio')}
                        >
                            Portfolio
                        </button>
                    </li>
                    <li className={getNavItemClass('contact')}>
                        <button 
                            className="w-full focus:outline-none" 
                            onClick={() => handleNavClick('contact')}
                        >
                            Contact Me
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBarProject
