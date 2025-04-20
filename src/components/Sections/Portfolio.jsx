import { Link as ScrollLinkPortFolio,useNavigate } from "react-router-dom";
import datas from '../../datas/data.json'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Portfolio() {
  const boxPortImgRefs = useRef([]);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".boxPortImages",
        start: "top 90%",
        end: "bottom 80%"
      },
    });

    boxPortImgRefs.current.forEach((boxPortImages, index) => {
      tl.fromTo(
        boxPortImages,
        { x: 100, y: 200, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1 },
        index * 0.5 // delay between each animation
      );
    });
  }, []);

  const triggerPortFolioRef = useRef(null)
  const portfolioTitle = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      portfolioTitle.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: triggerPortFolioRef.current,
          start: "top 80%",
          end: "top 30%",
        },
      }
    );  
  }, []);

  const navigate = useNavigate()

  const handlePortfolioClick = (e) => {
    const id = e.target.id;
    navigate('/project',{state:{id}})
  }
  return (
    <div ref={triggerPortFolioRef} className="w-full">
      {/* Title.. */}
      <div ref={portfolioTitle} className="flex flex-col w-full justify-start items-start">
        <h1 className="text-smName md:text-mdName font-ralway pb-5 px-4 md:px-0">
          Portfolio
        </h1>
        <p className="text-defaultBase sm:text-smallText md:text-midText lg:text-largeText font-montserrat pb-10 px-4 md:px-0">
          Check out my most recent works.
        </p>
      </div>
      {/* Title ends.. */}

      {/* image gallery starts.. */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {datas.map((data,index)=>{
            return <div ref={(el) => (boxPortImgRefs.current[index] = el)} key={index} className="boxPortImages bg-gray-200 items-center justify-center">
              <div className="overflow-hidden">
                <img
                  src={data.src}
                  id={data.id}
                  onClick={handlePortfolioClick}
                  className="w-full h-[380px] object-fill transition-transform duration-500 transform hover:scale-110 cursor-pointer"
                  alt={`Portfolio item ${index + 1}`}
                />
              </div>
            </div>
          })}
        </div>
      </div>
      {/* image gallery ends.. */}
    </div>
  );
}

export default Portfolio;
