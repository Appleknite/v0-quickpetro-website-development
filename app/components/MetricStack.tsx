'use client'

import { useEffect, useRef, useState } from 'react'

interface Metric {
  label: string
  value: string
  color: string   // bg tailwind class for icon bg
  textColor: string
  bgColor: string // card bg
  borderColor: string
  icon: React.ReactNode
}

export default function MetricStack({ metrics }: { metrics: Metric[] }) {
  const [idx, setIdx] = useState(0)
  const [peeked, setPeeked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Peek animation on scroll into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !peeked) {
          setPeeked(true)
          // Peek: briefly show idx+1 offset then snap back
          setTimeout(() => {
            el.style.transform = 'translateX(18px)'
            el.style.transition = 'transform 0.25s ease'
          }, 400)
          setTimeout(() => {
            el.style.transform = 'translateX(0)'
          }, 700)
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [peeked])

  const next = () => setIdx((i) => (i + 1) % metrics.length)
  const m = metrics[idx]

  return (
    // Mobile only — desktop uses grid (handled in parent)
    <div className="sm:hidden">
      <div
        ref={ref}
        onClick={next}
        className={`${m.bgColor} ${m.borderColor} border rounded-xl p-4 flex items-center gap-3 cursor-pointer select-none active:scale-[0.98] transition-transform`}
      >
        <div className={`p-2 ${m.color} rounded-lg text-white flex-shrink-0`}>{m.icon}</div>
        <div className="min-w-0">
          <p className={`text-[11px] font-medium uppercase tracking-wider ${m.textColor}`}>{m.label}</p>
          <p className="text-base font-bold text-gray-900">{m.value}</p>
        </div>
        <div className="ml-auto flex gap-1">
          {metrics.map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? m.color.replace('bg-', 'bg-') : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-1.5">Tap to see next</p>
    </div>
  )
}
