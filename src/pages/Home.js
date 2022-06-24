import HeaderBanner from "../components/HeaderBanner"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Testimonials from "../components/Testimonials"
import MovingText from "../components/Moving-text"

function Home() {
  return (
     <main>
       <HeaderBanner />
       <MovingText />
       <Projects />
       <About/>
       <MovingText />
       <Testimonials />
       <Contact />
    </main>
  );
}

export default Home;