import React, { useEffect, useRef } from "react";

// import myImage from "../../images/ndimage.png";

import myImage from "../../images/thumbconstruction.jpg";

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { Link as SocialMediaLink } from "react-router-dom";

import { gsap } from "gsap";

function Hero() {
  const profileImgRef = useRef(null);
  const heroLeftRef = useRef(null);

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
  };

  if (isMobileDevice()) {
    useEffect(() => {
      gsap.fromTo(
        heroLeftRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 }
      );
    }, []);
  } else {
    useEffect(() => {
      const t = gsap.timeline();
      t.fromTo(
        profileImgRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, delay: 1, duration: 2.5, ease: "bounce" }
      );
      t.fromTo(
        heroLeftRef.current,
        { opacity: 0,x: -100 },
        { opacity: 1,x: 0,ease:"power4.inOut", duration: 2.5 },0
      );
    }, []);
  }

  function isMobileDevice() {
    return /iPhone|Android/i.test(navigator.userAgent);
  }

  return (
    <div className="container overflow-hidden flex flex-row items-center mx-auto min-h-screen">
      {/* left items */}
      <div className="flex flex-col overflow-hidden justify-center items-center w-full md:basis-9/12">
        <div
          ref={heroLeftRef}
          className="left-wrapper md:w-full flex flex-col items-center justify-center font-ralway"
        >
          <div className="">
            <h1 className="flex pb-0 md:pb-4 gap-1 items-center flex-col md:flex-row">
              <span className="text-smName md:text-mdName text-site-secondary">
                HELLO IAM
              </span>
              <span className="text-smName md:text-mdName text-accent">
                NAJUBUDEEN
              </span>
            </h1>
          </div>
          <div className="md:hidden basis-2/4 justify-items-center py-4">
            <img
              src={myImage}
              className="w-[177px] h-[178px] rounded-full border-s border-white shadow-2xl shadow-site-secondary-500/50"
              alt="Bouncing"
            />
          </div>
          <p className="text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
            A Web Designer and Developer with one year of experience and a
            profound passion for coding, always eager to embrace the latest
            technologies and trends.
          </p>
          <div className="flex flex-row gap-5 pt-5">
            <button className="bg-accent hover:bg-accent-secondary py-1 px-3 text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
              Download My Cv
            </button>
            <div className="flex flex-row gap-2">
              <SocialMediaLink
                to={"https://github.com/login"}
                onClick={handleLinkClick}
              >
                <FaGithub className="text-accent hover:text-accent-secondary h-7" />
              </SocialMediaLink>
              <SocialMediaLink
                to={
                  "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                }
                onClick={handleLinkClick}
              >
                <FaLinkedinIn className="text-accent hover:text-accent-secondary h-7" />
              </SocialMediaLink>
            </div>
            <span>{/* for git */}</span>
            <span>{/* for linkedin */}</span>
          </div>
        </div>
      </div>
      {/* right image */}
      <div className="basis-2/4 hidden md:block justify-items-center ">
        <img
          ref={profileImgRef}
          src={myImage}
          className=" md:w-[202px] md:h-[203px] lg:w-[302px] lg:h-[303px] rounded-full border-s border-white shadow-2xl shadow-site-secondary-500/50"
          alt="ds"
        />
      </div>
    </div>
  );
}

export default Hero;
