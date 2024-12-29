import NavBar from "../NavBar";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Portfolio from "../Sections/Portfolio";
import Contact from './Contact';
import '../Sections/style.css'


function Home() {
  return (
    <>
        <NavBar />
        <div className="w-full bg-secondary-light">
          <section id="home" className="container mx-auto">
          <Hero/>
        </section>
      </div>
      <div className="w-full bg-white my-20">
        <section id="about" className="container overflow-hidden flex flex-col justify-center items-center mx-auto min-h-screen">
          <About/>
        </section>
      </div>
      <div className="w-full bg-secondary-light py-20">
          <Portfolio/>
        </div>

      <div className="w-full bg-white py-14">
        <section id="contact" className="container flex flex-col pb-11 px-4 md:px-0 gap-4 justify-center items-center mx-auto min-h-screen">
          <Contact/>
        </section>
      </div>
    </>
  )
}

export default Home
