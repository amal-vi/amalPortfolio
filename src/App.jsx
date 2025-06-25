import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Skills from './pages/Skills'
import EducationSection from './pages/EducationSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <EducationSection/>
    </>
  )
}

export default App
