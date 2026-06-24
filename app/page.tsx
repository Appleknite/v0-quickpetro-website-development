'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import ServiceNav from './components/ServiceNav'
import FiltrationSystem from './components/services/FiltrationSystem'
import ThermicFluidCleaning from './components/services/ThermicFluidCleaning'
import FluidAnalysis from './components/services/FluidAnalysis'
import TechnicalSupport from './components/services/TechnicalSupport'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#1F2937] pt-14 sm:pt-16">
        <Header />
        <Hero />
        <ServiceNav />
        <main id="main-content" className="bg-[#F8FAFC] flex flex-col" tabIndex={-1}>
          <section id="filtration" aria-labelledby="filtration-heading">
            <FiltrationSystem />
          </section>
          <section id="cleaning" aria-labelledby="cleaning-heading">
            <ThermicFluidCleaning />
          </section>
          <section id="analysis" aria-labelledby="analysis-heading">
            <FluidAnalysis />
          </section>
          <section id="support" aria-labelledby="support-heading">
            <TechnicalSupport />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
