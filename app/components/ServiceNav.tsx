'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'filtration', label: 'Filtration System' },
  { id: 'cleaning', label: 'System Cleaning' },
  { id: 'analysis', label: 'Fluid Analysis' },
  { id: 'support', label: 'Get a Quote' },
]

export default function ServiceNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('filtration')

  const scrollTo = (id: string) => {
    const header = document.querySelector('header')
    const nav = document.querySelector('nav[aria-label="Services"]')
    const offset = (header?.offsetHeight ?? 0) + (nav?.offsetHeight ?? 0)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [])

  useEffect(() => {
    const header = document.querySelector('header')
    const nav = document.querySelector('nav[aria-label="Services"]')
    const offset = (header?.offsetHeight ?? 56) + (nav?.offsetHeight ?? 44) + 8

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="sticky top-14 sm:top-16 z-40 bg-white border-b border-gray-200 shadow-sm"
      aria-label="Services"
    >
      {/* Desktop */}
      <div className="hidden sm:flex max-w-6xl mx-auto" role="tablist">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            aria-controls={id}
            onClick={() => scrollTo(id)}
            className={[
              'flex-1 min-w-max text-xs uppercase tracking-wider font-semibold py-3.5 px-4 border-b-2',
              'cursor-pointer transition-all duration-150 whitespace-nowrap',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset',
              active === id
                ? 'text-[#D97706] border-b-[#D97706] bg-amber-50'
                : 'text-gray-700 border-b-transparent hover:bg-amber-50/60 hover:text-[#D97706]',
            ].join(' ')}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-service-menu"
          className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-gray-800"
        >
          <span className="text-[#D97706] uppercase tracking-wider text-xs font-semibold">
            {sections.find((s) => s.id === active)?.label ?? 'Services'}
          </span>
          {mobileOpen ? (
            <X size={18} aria-hidden="true" />
          ) : (
            <Menu size={18} aria-hidden="true" />
          )}
        </button>

        {mobileOpen && (
          <div
            id="mobile-service-menu"
            role="menu"
            className="border-t border-gray-100 bg-white shadow-md"
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                role="menuitem"
                onClick={() => scrollTo(id)}
                className={[
                  'w-full text-left px-5 py-4 text-sm border-b border-gray-100 last:border-b-0 transition-colors',
                  active === id
                    ? 'text-[#D97706] font-semibold bg-amber-50'
                    : 'text-gray-800 hover:bg-gray-50',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
