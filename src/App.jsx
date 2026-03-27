import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import AboutStandalone from './Components/AboutStandalone'
import ServicesStandalone from './Components/ServicesStandalone'
import FeaturesSection from './Components/FeaturesSection'
import Services from './Components/Services'
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import WorkProcess from './Components/WorkProcess'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Team from './Components/Team'
import TechSlider from './Components/TechSlider'

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <TechSlider />
      <FeaturesSection />
      <Services />
      <WorkProcess/>
      <Pricing />
      <Testimonial />
      <CTA />
      <Team />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutStandalone />} />
        <Route path="/services" element={<ServicesStandalone />} />
      </Routes>
    </Router>
  )
}

export default App
