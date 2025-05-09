import React from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import FAQ from './components/sections/FAQ'
import Hero from './components/sections/Hero'
import Pricing from './components/sections/Pricing'
import Services from './components/sections/Services'
import Testimonial from './components/sections/Testimonial'
import TrialCTA from './components/sections/TrialCTA'
import TrustedSection from './components/sections/TrustedSection'

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <TrustedSection />
      <Testimonial />
      <Pricing />
      <FAQ />
      <TrialCTA />
    </Layout>

  )
}

export default App
