import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Hero from './Component/pages/Hero'
import About from './Component/pages/About'
import Skill from './Component/pages/Skill'
import Services from './Component/pages/Services'
import Project from './Component/pages/Project'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
      <div id='home'>
        <Hero/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id='skill'>
        <Skill/>
      </div>
      <div id='services'>
        <Services/>
      </div>
      <div id='project'>
        <Project/>
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default App