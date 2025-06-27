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
      <div className="w-full bg-secondary-light">
        <div className="container mx-auto py-8">
          <h1 className="text-smName md:text-mdName font-ralway px-4 md:px-0 py-6">
            Project Details
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
                {datas.map((data, index) => {
                  if (data.id == id) {
                    return (
                      <div key={index}>
                        {data.properties.map((dataProps) => {
                          return (
                            <>
                              {dataProps.type == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Type
                                  </h3>
                                  <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
                                    {dataProps.type}
                                  </span>
                                </div>
                              )}

                              {dataProps.colorscheme == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Color Scheme
                                  </h3>
                                  <span className="flex pl-4 md:pl-16">
                                    <img
                                      src={dataProps.colorscheme}
                                      className="w-1/2 h-[40px]"
                                    />
                                  </span>
                                </div>
                              )}
                              {dataProps.font == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Typeface
                                  </h3>

                                  <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
                                    {dataProps.font}
                                  </span>
                                </div>
                              )}

                              {dataProps.width == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Width
                                  </h3>
                                  <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
                                    {dataProps.width}
                                  </span>
                                </div>
                              )}

                              {dataProps.contentWidth == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Content Width
                                  </h3>
                                  <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
                                    {dataProps.contentWidth}
                                  </span>
                                </div>
                              )}

                              {dataProps.wpTheme == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Wordpress Theme
                                  </h3>
                                  {
                                    <span className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat">
                                      {dataProps.wpTheme}
                                    </span>
                                  }
                                </div>
                              )}

                              {dataProps.wpPluginsUsed.length === 0 ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    WordPress Plugins Used
                                  </h3>
                                  {dataProps.wpPluginsUsed.map((itms, ind) => {
                                    return (
                                      <ul className="list-disc px-24 py-2">
                                        <li>{itms}</li>
                                      </ul>
                                    );
                                  })}
                                </div>
                              )}

                              {
                                dataProps.libraries.length === 0 ? (
                                    <span></span>
                                ):(
                                    <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    React Libraries Used
                                  </h3>
                                  {dataProps.libraries.map((itms, ind) => {
                                    return (
                                      <ul className="list-disc px-24 py-2">
                                        <li>{itms}</li>
                                      </ul>
                                    );
                                  })}
                                </div>
                                )
                              }
                              {dataProps.preview == "" ? (
                                <span></span>
                              ) : (
                                <div className="pb-0 md:pb-4">
                                  <h3 className="text-smProjectsecondaryHeading font-ralway font-medium w-full px-12 py-4">
                                    Live Preview
                                  </h3>
                                  <Link
                                    to={dataProps.preview}
                                    className="pl-4 md:pl-16 text-defaultBase px-8 md:px-8 sm:text-smallText md:text-midText lg:text-largeText font-montserrat"
                                    target="_blank"
                                  >
                                    View Site
                                  </Link>
                                </div>
                              )}
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
