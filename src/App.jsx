import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Atom from './components/Atom'
import SolarSystem from './components/SolarSystem'

function App() {
  return (
    <>
      <section className="hero-layout">
        <div className="hero-text">
          <Hero />
        </div>

        <div className="hero-atom">
          <Atom />
        </div>
      </section>

      <SolarSystem />

      <About />

      <Certifications />

      <Skills />
    </>
  )
}

export default App
