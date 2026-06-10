'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'filtration', label: 'Filtration System' },
  { id: 'cleaning', label: 'Thermic Fluid System Cleaning' },
  { id: 'analysis', label: 'Fluid Analysis' },
  { id: 'support', label: 'Get a Quote' },
]

export default function ServiceNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('filtration')
  const menuRef = useRef<HTMLDivElement>(null)

  const scrollTo = (id: string) => {
    // Get header + nav height for offset
    const header = document.querySelector('header')
    const nav = document.querySelector('nav')
    const offset = (header?.offsetHeight ?? 0) + (nav?.offsetHeight ?? 0)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setMobileOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const header = document.querySelector('header')
    const nav = document.querySelector('nav')
    const offset = (header?.offsetHeight ?? 48) + (nav?.offsetHeight ?? 40) + 8

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
    <nav className="sticky top-12 sm:top-14 z-40 bg-surface border-t border-gray-200 shadow-sm">
      {/* Desktop */}
      <div className="hidden sm:flex">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex-1 min-w-max text-xs uppercase tracking-wider font-medium py-3.5 px-4 border-b-2 cursor-pointer transition-all duration-150 whitespace-nowrap ${
              active === id
                ? 'text-accent border-b-accent bg-amber-50'
                : 'text-body border-b-transparent hover:bg-amber-50 hover:text-body'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-body"
        >
          <span className="text-accent uppercase tracking-wider text-xs font-semibold">
            {sections.find((s) => s.id === active)?.label ?? 'Menu'}
          </span>
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {mobileOpen && (
          <div ref={menuRef} className="border-t border-gray-200 bg-white">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-5 py-3.5 text-sm border-b border-gray-100 last:border-b-0 transition-colors ${
                  active === id ? 'text-accent font-semibold bg-amber-50' : 'text-body hover:bg-gray-50'
                }`}
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
