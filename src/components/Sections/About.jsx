import React, { useEffect, useRef } from "react";
import FirstColumn from "./Columns/FirstColumns";
import SecondColumn from "./Columns/SecondColumns";
import ThirdColumn from "./Columns/ThirdColumns";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const aboutTitle = useRef(null);
  const triggerRef = useRef(null);

  
  useEffect(() => {
    gsap.fromTo(
      aboutTitle.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );  
  }, []);

  // function isMobileDevice() {
  //   return /iPhone|Android/i.test(navigator.userAgent);
  // }
  return (
    <>
      <div ref={triggerRef} className="h-1 bg-transparent"></div>
      <div
        ref={aboutTitle}
        className="flex flex-col justify-center items-center mx-auto"
      >
        <h1 className="text-smName md:text-mdName font-ralway pb-5">
          About Me
        </h1>
        <p className="text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat pb-10">
          Here are the skills I've cultivated.
        </p>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-2/3">
          <FirstColumn />
        </div>
        <div className="w-full md:w-2/3">
          <SecondColumn />
        </div>
        <div className="w-full md:w-2/3">
          <ThirdColumn />
        </div>
      </div>
    </>
  );
}

export default About;
