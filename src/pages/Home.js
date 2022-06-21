import HeaderBanner from "../components/HeaderBanner"
import Projects from "../components/Projects"
import About from "../components/About"
import MovingText from "../components/Moving-text"

function Home() {
  return (
     <main>
       <HeaderBanner />
       <MovingText />
       <Projects />
       <About/>
       <MovingText />
    </main>
  );
}

export default Home;