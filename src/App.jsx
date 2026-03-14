import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ActivityTicker from "./components/ActivityTicker/ActivityTicker"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import SystemDesign from "./components/SystemDesign/SystemDesign"
import Lab from "./components/Lab/Lab"
import Footer from "./components/Footer/Footer"
import Certificates from "./components/Certificates/Certificates"
import Timeline from "./components/TimeLine/TimeLine"

function App() {

  return (
    <>
      <Navbar />

      <Hero />

      <ActivityTicker />

      <About />

      <Skills />

      <Projects />

      <SystemDesign />

      <Certificates/>

      <Timeline/>

      <Lab />

      <Footer />
    </>
  )
}

export default App