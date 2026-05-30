'use client'

import { useState, useRef, useEffect } from 'react'

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }
  }

  useEffect(() => {
    checkScroll()
    const nav = scrollRef.current
    if (nav) {
      nav.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        nav.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  return (
    <div className="sticky top-0 z-50 relative">
      <nav
        ref={scrollRef}
        className="bg-surface border-t border-gray-200 flex overflow-x-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {services.map((service) => {
          const isActive = activeService === service.id

          return (
            <button
              key={service.id}
              onClick={() => onServiceChange(service.id)}
              className={`flex-1 min-w-max sm:flex-1 text-xs uppercase tracking-wider font-medium py-3 px-2 sm:px-3 border-b-2 cursor-pointer transition-all duration-150 whitespace-nowrap ${
                isActive
                  ? 'text-accent border-b-accent bg-amber-100'
                  : 'text-body border-b-transparent bg-transparent hover:bg-amber-50 hover:text-body'
              }`}
            >
              {service.label}
            </button>
          )
        })}
      </nav>

      {/* Visual scroll cue - gradient fade on right edge */}
      {canScrollRight && (
        <div className="absolute top-0 right-0 h-full w-8 sm:w-12 bg-gradient-to-l from-surface via-surface to-transparent pointer-events-none" />
      )}
    </div>
  )
}
