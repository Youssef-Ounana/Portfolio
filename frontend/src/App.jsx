import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'



const App = () => {
  return (
    <div className="bg-black text-white">
        <Navbar/>
        <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
