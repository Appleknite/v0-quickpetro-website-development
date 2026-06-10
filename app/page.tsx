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
    <div 
      className="min-h-screen flex flex-col overflow-x-hidden bg-primary pt-20 sm:pt-24"
      style={{
        '--header-height': '80px',
      } as React.CSSProperties & { '--header-height': string }}
    >
      <Header />
      <Hero />
      <ServiceNav />
      <main className="bg-surface flex flex-col">
        <section id="filtration" className="pt-20 sm:pt-24"><FiltrationSystem /></section>
        <section id="cleaning"><ThermicFluidCleaning /></section>
        <section id="analysis"><FluidAnalysis /></section>
        <section id="support"><TechnicalSupport /></section>
      </main>
      <Footer />
    </div>
  )
}
