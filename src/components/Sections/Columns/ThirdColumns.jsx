import React, { useEffect, useRef } from 'react'
import ThirdColumn from "../../../datas/columnThree.json";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ThirdColumns() {
    const thirdColBoxesAll = useRef([]);

     useEffect(() => {
          thirdColBoxesAll.current.forEach((thirdBox, index) => {
           gsap.fromTo(
            thirdBox,
             { x: 100, opacity: 0 },
             {
               x: 0,
               opacity: 1,
               stagger:0.2,
               ease:"power1.inOut",
               scrollTrigger: {
                 trigger: thirdBox,
                 start: "top 98%",
                 end: "bottom 85%",
                 scrub: true,
               },
             }
           );
         });
       }, []);

  return (
    <div className="flex flex-col gap-2 p-1">
      {/* whole card wrapper..*/}

      {ThirdColumn.map((data,index) => {
        return (
          <div key={data.id}>
            <div ref={ e => thirdColBoxesAll.current[index] = e } className="thirdBox max-w-sm rounded overflow-hidden shadow-2xl">
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

export default ThirdColumns
