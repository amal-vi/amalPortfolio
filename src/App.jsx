import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Skills from './pages/Skills'
import EducationSection from './pages/EducationSection'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <EducationSection/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
