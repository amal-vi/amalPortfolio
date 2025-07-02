import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Skills from './pages/Skills'
import EducationSection from './pages/EducationSection'
import Projects from './pages/Projects'
import Footer from './components/Footer'

import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
            <Footer/>

    </>
  )
}

export default App
