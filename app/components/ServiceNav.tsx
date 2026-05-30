'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

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
      // Gives a 5px buffer for rounding errors
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
    <div className="sticky top-0 z-50 relative bg-surface border-t border-gray-200">
      <nav
        ref={scrollRef}
        /* 'scrollbar-none' hides native layout bars while maintaining full touch-swipe capabilities */
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none touch-pan-x"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {services.map((service) => {
          const isActive = activeService === service.id

          return (
            <button
              key={service.id}
              onClick={() => onServiceChange(service.id)}
              className={`flex-1 min-w-[160px] sm:min-w-max text-xs uppercase tracking-wider font-medium py-3.5 px-4 border-b-2 cursor-pointer transition-all duration-150 whitespace-nowrap snap-start ${
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

      {/* Visual scroll cue - Subtle fade gradient + pulsing indicator arrow */}
      {canScrollRight && (
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-surface via-surface/80 to-transparent pointer-events-none flex items-center justify-end pr-2">
          <ChevronRight size={16} className="text-body/60 animate-pulse bg-surface/50 rounded-full backdrop-blur-sm shadow-sm" />
        </div>
      )}
    </div>
  )
}