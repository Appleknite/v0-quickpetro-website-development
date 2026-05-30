import FiltrationSystem from './services/FiltrationSystem'
import ThermicFluidCleaning from './services/ThermicFluidCleaning'
import FluidAnalysis from './services/FluidAnalysis'
import TechnicalSupport from './services/TechnicalSupport'

interface ServiceContentProps {
  activeService: string
}

export default function ServiceContent({ activeService }: ServiceContentProps) {
  return (
    <section className="bg-surface px-6 py-7 min-h-[260px]">
      {activeService === 'filtration' && <FiltrationSystem />}
      {activeService === 'cleaning' && <ThermicFluidCleaning />}
      {activeService === 'analysis' && <FluidAnalysis />}
      {activeService === 'support' && <TechnicalSupport />}
    </section>
  )
}
