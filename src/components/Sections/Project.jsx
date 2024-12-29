import React from "react";
import NavBarProject from "../NavBarProject";
import { Link, useLocation, useNavigate } from "react-router-dom";
import datas from "../../datas/data.json";

function Projects() {
  const location = useLocation();
  const id = location.state?.id || [];
  const navigate = useNavigate();
  const handlePreview = () => {
    navigate("/");
  };

  return (
    <>
      <NavBarProject />
      <div className="w-full bg-secondary-light ">
        <div className="container mx-auto">
          <h1 className="text-smName md:text-mdName font-ralway px-4 md:px-0 py-6">
            Construction Site
          </h1>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="w-full md:w-7/12">
                {datas.map((getProjSrc) => {
                  if (getProjSrc.id == id) {
                    return getProjSrc.properties.map((getSrc) => {
                      return (
                        <img
                          src={getSrc.projectSrc}
                          className="px-4 md:px-0"
                          alt=""
                        />
                      );
                    });
                  }
                })}
              </div>
              <div className="w-full flex-col md:w-5/12">
                {/* <h3 className="text-smProjectsecondaryHeading font-ralway w-full px-12 py-4">
                  Color Scheme
                </h3> */}
                {datas.map((data, index) => {
                  if (data.id == id) {
                    return (
                      <div key={index}>
                        {data.properties.map((dataProps) => {
                          return (
                            <>
                            <div className="pb-0 md:pb-4">
                              <h3 className="text-smProjectsecondaryHeading font-ralway w-full px-12 py-4">
                                Color Scheme
                              </h3>
                              {
                                dataProps.colorscheme == "" ? <div className="flex pl-4 md:pl-16">Color Scheme Not Available</div> : <span className="flex pl-4 md:pl-16"><img src={dataProps.colorscheme} className="w-1/2 h-[40px]" /></span>
                              }
                              
                            </div>
                            <div className="pb-0 md:pb-4">
                              <h3 className="text-smProjectsecondaryHeading font-ralway w-full px-12 py-4">
                                Fonts
                              </h3>
                              {
                                dataProps.font == "" ? <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">Font Not Availeble</span> : <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">{dataProps.font}</span>
                              }
                              
                            </div>
                            <div className="pb-0 md:pb-4">
                              <h3 className="text-smProjectsecondaryHeading font-ralway w-full px-12 py-4">
                                Live Preview
                              </h3>
                                  { dataProps.preview == "" ? <div className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">Not Available for now</div> : <Link to="/" className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat" target="_blank" >View Site</Link> }
                                  
                            </div>

                            <div className="pb-0 md:pb-4">
                              <h3 className="text-smProjectsecondaryHeading font-ralway w-full px-12 py-4">
                                PROJECT FILES
                              </h3>
                              <div className="flex flex-col items-start pl-4 md:pl-12 gap-2">
                                {
                                  dataProps.designtemplate == "" ? <span className=""></span> : dataProps.designtemplate
                                }
                                {
                                  dataProps.wp == "" ? <span className=""></span> : dataProps.wp
                                }
                                {
                                  dataProps.react == "" ? <span className=""></span> : dataProps.react
                                }
                                {
                                  dataProps.htmltemplate == "" ? <span className=""></span> : dataProps.htmltemplate
                                }

                              </div>
                            </div>
                            </>
                          );
                        })}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
