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
        className="flex flex-col justify-center items-center px-6 mx-auto"
      >
        <h1 className="text-smName md:text-mdName font-ralway pb-5">
          About Me
        </h1>
        {/* <h2>Professional Skills</h2> */}
        <p className="text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat pb-4 px-4 md:px-0">
          I am a passionate and dedicated web developer with a strong foundation in modern web technologies. My expertise includes:
        </p>
        <ul className="text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat pb-10 px-6 md:px-0 list-disc pl-6 space-y-2">
          <li>Design and build websites to meet user needs</li>
          <li>Develop responsive and modern websites using up-to-date tools</li>
          <li>Deploy websites, ensuring strong performance and security</li>
          <li>Maintain and improve websites for optimal functionality</li>
        </ul>
        <h1 className="text-smName md:text-mdName font-ralway pb-5">Here are the skills I've cultivated.</h1>
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
