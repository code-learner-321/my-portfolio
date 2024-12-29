import React, { useEffect, useRef } from 'react'
import { FaPhoneVolume } from "@react-icons/all-files/fa/FaPhoneVolume"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
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
            <span className="text-defaultBase pl-2 md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">najubudeenktm@gmail.com</span>
        </div>
        <div ref={socialMediaRef} className="flex flex-row gap-2">
            <SocialMediaContact to={"https://github.com/login"} onClick={handleLinkClick}>
                <FaGithub className='text-accent hover:text-accent-secondary h-7'/> 

            </SocialMediaContact>
            <SocialMediaContact to={"https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"} onClick={handleLinkClick}>
                <FaLinkedinIn className='text-accent hover:text-accent-secondary h-7'/> 

            </SocialMediaContact>
        </div>
        {/* <div className='flex flex-Col items-center justify-center w-full'>
            <span className='text-defaultBase md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat'>
                Or
            </span>
        </div>

        <div className="flex flex-col">
                <h1 className="text-smName md:text-mdName font-ralway pb-5">Send Me An Email</h1>
            </div>

        <div className="flex flex-col md:flex-row w-full">
            <div className="flex gap-4 md:gap-9 flex-col w-full md:w-1/2 pr-0 md:pr-2">
                <input type="text" className='pl-2 md:pl-3 text-defaultBase px-2 md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat' style={{ height: '50px',border: '1px solid #E1E1E1',borderRadius:'5px'}} placeholder='name' />
                <input type="email" className='pl-2 md:pl-3 text-defaultBase px-2 md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat' style={{ height: '50px',border: '1px solid #E1E1E1',borderRadius:'5px'}} placeholder='email' />
            </div>
            <div className="flex flex-col pt-4 md:pt-0 w-full md:w-1/2 md:pl-2">
                <textarea name="" className='pl-3 pt-1 text-defaultBase px-2 md:px-2 sm:text-smallText md:text-midText lg:text-largeText font-montserrat' style={{ border: '1px solid #E1E1E1',borderRadius:'5px'}} id="" placeholder='Message' cols="10" rows="5"></textarea>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center md:items-end md:justify-end w-full">
        <button className="bg-accent hover:bg-accent-secondary py-1 px-3 text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
            Send Email
        </button>
        </div> */}

    </div>
  )
}

export default Contact
