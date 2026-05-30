'use client'

interface ServiceNavProps {
  activeService: string
  onServiceChange: (service: string) => void
}

const services = [
  { id: 'filtration', label: 'Filtration System' },
  { id: 'cleaning', label: 'Thermic Fluid Cleaning' },
  { id: 'analysis', label: 'Fluid Analysis' },
  { id: 'support', label: 'Technical Support' },
]

export default function ServiceNav({ activeService, onServiceChange }: ServiceNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-primary border-t border-gray-700 flex">
      {services.map((service) => {
        const isActive = activeService === service.id

        return (
          <button
            key={service.id}
            onClick={() => onServiceChange(service.id)}
            className={`flex-1 text-xs uppercase tracking-wider font-medium py-3 px-2 border-b-2 cursor-pointer transition-all duration-150 ${
              isActive
                ? 'text-accent border-b-accent bg-amber-900/10'
                : 'text-gray-400 border-b-transparent bg-transparent hover:bg-surface hover:text-body'
            }`}
          >
            {service.label}
          </button>
        )
      })}
    </nav>
  )
}
