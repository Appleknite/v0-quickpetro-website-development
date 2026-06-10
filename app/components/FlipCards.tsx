'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface Card {
  title: string
  tag: string
  tagColor: string
  accentColor: string  // bullet color class
  headerBg: string
  items: { title: string; body: string }[]
}

export default function FlipCards({ cards }: { cards: Card[] }) {
  const [idx, setIdx] = useState(0)
  const c = cards[idx]

  return (
    <>
      {/* Desktop: side by side */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
        {cards.map((card, i) => (
          <CardBody key={i} card={card} />
        ))}
      </div>

      {/* Mobile: flip single card */}
      <div className="md:hidden mb-2">
        <div className="relative">
          <CardBody card={c} />
          <button
            onClick={() => setIdx((i) => (i + 1) % cards.length)}
            className="absolute top-3 right-3 flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-[10px] font-semibold text-gray-600 shadow-sm"
          >
            {idx + 1}/{cards.length} <ChevronRight size={11} />
          </button>
        </div>
        <div className="flex justify-center gap-1.5 mt-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-amber-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function CardBody({ card }: { card: Card }) {
  return (
    <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden">
      <div className={`${card.headerBg} px-4 py-3.5 border-b border-gray-100 flex justify-between items-center`}>
        <h4 className="text-sm font-bold text-gray-900 tracking-tight">{card.title}</h4>
        <span className={`${card.tagColor} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>{card.tag}</span>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {card.items.map((item, i) => (
            <li key={i} className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
              <span className={`w-1.5 h-1.5 rounded-full ${card.accentColor} mt-1.5 flex-shrink-0`} />
              <span>
                <strong className="font-semibold text-gray-900 block mb-0.5">{item.title}</strong>
                {item.body}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
