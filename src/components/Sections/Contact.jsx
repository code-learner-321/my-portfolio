import React, { useEffect, useRef } from 'react'
import { FaPhoneVolume } from "@react-icons/all-files/fa/FaPhoneVolume"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { Link as SocialMediaContact } from 'react-router-dom'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contact() {
    const handleLinkClick = (event) => {
        event.preventDefault();
        window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
      }

      const triggerContactRef = useRef(null)
      const contactTitleRef = useRef(null)
      const phoneRef = useRef(null)
      const emailRef = useRef(null)
      const socialMediaRef = useRef(null)

      useEffect(() => {
        const tContact = gsap.timeline()
          tContact.fromTo(
            contactTitleRef.current,
            { opacity: 0,x: -500 },
            {
              opacity: 1,
              x: 0,
              stagger:0.5,
              scrollTrigger: {
                trigger: triggerContactRef.current,
                start: "top 30%",
                end: "bottom bottom",
                scrub: true,
              },
            }
          ); 
          tContact.fromTo(
            phoneRef.current,
            { opacity: 0,y: -500 },
            {
              opacity: 1,
              y: 0,
              stagger:1,
              scrollTrigger: {
                trigger: triggerContactRef.current,
                start: "top 30%",
                end: "bottom bottom",
                scrub: true,
              },
            }
          ); 
          tContact.fromTo(
            emailRef.current,
            { opacity: 0,y: -500,x:500 },
            {
              opacity: 1,
              y: 0,
              x:0,
              stagger:0.9,
              scrollTrigger: {
                trigger: triggerContactRef.current,
                start: "top 30%",
                end: "bottom bottom",
                scrub: true,
              },
            }
          );
          tContact.fromTo(
            socialMediaRef.current,
            { opacity: 0,y: '100%' },
            {
              opacity: 1,
              y: '0%',
              stagger:0.5,
              scrollTrigger: {
                trigger: triggerContactRef.current,
                start: "top 30%",
                end: "bottom bottom",
                scrub: true,
              },
            }
          );  
        }, []);

  return (
    <div ref={triggerContactRef} className='container flex overflow-hidden flex-col pb-11 px-4 md:px-0 gap-4 justify-center items-center mx-auto min-h-screen'>
        <h1 ref={contactTitleRef} className="text-smName md:text-mdName font-ralway pb-5">Contact Me</h1>
        <div ref={phoneRef} className="flex flex-row">
            <FaPhoneVolume className='text-accent h-6'/> 
            <span className="text-defaultBase pl-2 md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">91+ 9445551546</span>
        </div>
        <div ref={emailRef} className="flex flex-row">
            <FiMail className='text-accent h-7'/> 
            <span className="text-defaultBase pl-2 md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">najubudeveloper@gmail.com</span>
        </div>
        <div ref={socialMediaRef} className="flex flex-row gap-2">
            <SocialMediaContact to={"https://github.com/code-learner-321"} onClick={handleLinkClick}>
                <FaGithub className='text-accent hover:text-accent-secondary h-7'/> 
            </SocialMediaContact>
        </div>
    </div>
  )
}

export default Contact
