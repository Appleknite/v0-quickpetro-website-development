'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceNav from './components/ServiceNav'
import ServiceContent from './components/ServiceContent'
import Footer from './components/Footer'

export default function Home() {
  const [activeService, setActiveService] = useState<'filtration' | 'cleaning' | 'analysis' | 'support'>('filtration')

  return (
    <div className="min-h-screen flex flex-col pb-20">
      <Header />
      <Hero />
      <ServiceNav activeService={activeService} onServiceChange={setActiveService as any} />
      <ServiceContent activeService={activeService} />
      <Footer />
    </div>
  )
}
