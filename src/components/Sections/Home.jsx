import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../NavBar";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Portfolio from "../Sections/Portfolio";
import Contact from './Contact';
import '../Sections/style.css'

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a section to scroll to
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }, 100); // Small delay to ensure the page is fully loaded
      }
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="w-full bg-secondary-light">
        <section id="home" className="container mx-auto min-h-screen">
          <Hero/>
        </section>
      </div>
      <div className="w-full bg-white my-20">
        <section id="about" className="container overflow-hidden flex flex-col justify-center items-center mx-auto min-h-screen">
          <About/>
        </section>
      </div>
      <div className="w-full bg-secondary-light py-20">
        <section id="portfolio" className="container overflow-hidden flex flex-col justify-center items-center mx-auto min-h-screen">
          <Portfolio/>
        </section>
      </div>
      <div className="w-full bg-white py-14">
        <section id="contact" className="container flex flex-col pb-11 px-4 md:px-0 gap-4 justify-center items-center mx-auto min-h-screen">
          <Contact/>
        </section>
      </div>
    </>
  );
}

export default Home
