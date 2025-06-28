import React, { useEffect, useRef } from 'react'
import nodejs from "/images/nodejs.png";

import ps from "/images/ps.png";
import figma from "/images/figma.png";

import phpmysql from "/images/phpmysql.png";
import mongodb from "/images/mongodb.png";

import wp from "/images/wp.png";

import kotlin from "/images/kotlin.png";
import xml from "/images/xml.png";
import jetpackcompose from "/images/jetpackcompose.png";
import ColumnTwo from "../../../datas/columnTwo.json";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SecondColumns() {
  const boxSecondRefs = useRef([]);

  useEffect(() => {
    boxSecondRefs.current.forEach((secondBox, index) => {
      gsap.fromTo(
        secondBox,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger:0.2,
          ease:"power1.inOut",
          scrollTrigger: {
            trigger: secondBox,
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 p-1">
      {/* whole card wrapper..*/}

      {ColumnTwo.map((data,i) => {
        return (
          <div key={data.id}>
            <div ref={(el) => (boxSecondRefs.current[i] = el)} className="secondBox max-w-sm rounded overflow-hidden shadow-2xl">
              <div className="px-6 py-6 w-full md:w-[250px] lg:w-[280px] lg:md:w-[280px] bg-secondary-light">
                <div className="font-bold text-xl mb-2 text-2xl text-site-secondary">
                  {data.title}
                </div>
                <div className="inline-flex flex-col gap-2 text-gray-700">
                  {data.skills.map((skill) => {
                    return Object.keys(skill).map((langlists) => {
                      return skill[langlists].map((langlist) => {
                        return (
                          <div className="flex flex-row gap-1 pr-4 items-center rounded-3xl bg-site-primary shadow-2xl shadow-nutral-black font-ralway border py-1 text-xs overflow-hidden">
                            <div className="">
                              {/* {langlist.imgPath} */}
                              <img
                                src={langlist.imgPath}
                                className=" md:w-[46px] md:h-[40px] lg:w-[46px] lg:h-[40px]  border-s"
                                alt="html"
                              />
                            </div>
                            <div className="text-smtextSizeskills sm:text-smtextSizeskills md:text-mdtextSizeskills lg:text-lgtextSizeskills">
                              {langlist.title}
                            </div>
                          </div>
                        );
                      });
                    });
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      
    </div>
  )
}

export default SecondColumns
