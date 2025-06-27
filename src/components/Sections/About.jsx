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
          <li><b>Designing and building</b> websites that meet user needs and provide a great experience.</li>

          <li><b>Developing responsive and visually appealing</b> web solutions using the latest tools.</li>

          <li><b>Deploying high-performance and secure</b> websites for reliability and speed.</li>

          <li><b>Maintaining and improving</b> website functionality to ensure long-term efficiency.</li>

          <li><b>Creating custom WordPress Gutenberg plugins</b> to enhance website functionality and design.</li>

          <li><b>Developing Elementor addons</b> for seamless and dynamic web experiences.</li>
        </ul>

        <p className="text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat pb-4 px-4 md:px-0">
          I also use AI-powered tools to speed up development, improve quality, and enhance productivity, helping me deliver smarter and more effective web solutions.
        </p>


        <h1 className="text-smName md:text-mdName font-ralway pb-5">Here are the skills I've cultivated.</h1>
      </div>

      <div className="flex flex-col md:flex-row">
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
