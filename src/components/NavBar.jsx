import React, { useEffect, useRef, useState } from "react";
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useLocation } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("div ul li a");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const topDistance = window.pageYOffset + rect.top;

        if (
          window.pageYOffset >= topDistance - 60 &&
          window.pageYOffset < topDistance + rect.height - 60
        ) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();
  const currentHash = location.hash;

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleHamOpen = () => setHamburgerOpen(!hamburgerOpen);
  // GSAP NAVIGATION ANIMATION..
  const navigationRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      navigationRef.current,
      { x:100,opacity:0 },
      { x: 0,opacity:1,duration:3, ease: "elastic.out" },
      
    );
  }, []);

  return (
    <>
      <div className="z-10 w-full sticky top-0 mx-auto bg-white">
        <div className="container">
          <ul ref={navigationRef} className="hidden md:flex justify-end gap-5 p-2 text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-ralway">
            <li 
              id="nav-itm"
              className="nav-item hover:text-site-secondary hover:font-bold cursor-pointer"
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li
              id="nav-itm"
              className="nav-item hover:text-site-secondary hover:font-bold cursor-pointer"
            >
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </a>
            </li>
            <li
              id="nav-itm"
              className="nav-item hover:text-site-secondary hover:font-bold cursor-pointer"
            >
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("portfolio")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Portfolio
              </a>
            </li>
            <li
              id="nav-itm"
              className="nav-item hover:text-site-secondary hover:font-bold cursor-pointer"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`${
              hamburgerOpen ? "hidden" : "md:hidden justify-items-end pr-5 py-3"
            } `}
          >
            <button className="flex" onClick={handleHamOpen}>
              <FaAlignJustify className="hamburger text-accent" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${
          hamburgerOpen ? "block" : "hidden"
        } z-10 sticky top-0`}
      >
        <div className="flex w-screen justify-end bg-secondary-light">
          <IoClose
            size={30}
            className="mr-5 mt-5 text-accent"
            onClick={handleHamOpen}
          />
        </div>
        <ul className="bg-secondary-light items-center justify-center flex flex-col w-screen h-screen md:hidden gap-5 p-2 text-defaultBase sm:text-ralway md:text-midText lg:text-largeText font-ralway">
          <li className="hover:text-site-secondary hover:font-bold cursor-pointer">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
                handleHamOpen();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                handleHamOpen();
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" });
                handleHamOpen();
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                handleHamOpen();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
