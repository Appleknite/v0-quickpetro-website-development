'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface CardItem {
  title: string
  body: string
}

interface Card {
  title: string
  tag: string
  tagColor: string
  accentColor: string
  headerBg: string
  items: CardItem[]
}

function CardBody({ card }: { card: Card }) {
  return (
    <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm overflow-hidden h-full">
      <div
        className={`${card.headerBg} px-4 py-3.5 border-b border-gray-100 flex justify-between items-center`}
      >
        <h4 className="text-sm font-bold text-gray-900 tracking-tight">{card.title}</h4>
        <span
          className={`${card.tagColor} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}
        >
          {card.tag}
        </span>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {card.items.map((item, i) => (
            <li key={i} className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${card.accentColor} mt-1.5 flex-shrink-0`}
                aria-hidden="true"
              />
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

export default function FlipCards({ cards }: { cards: Card[] }) {
  const [idx, setIdx] = useState(0)
  const c = cards[idx]

  // Native swipe mechanics
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setIdx((i) => (i + 1) % cards.length)
    }
    if (isRightSwipe) {
      setIdx((i) => (i - 1 + cards.length) % cards.length)
    }
  }

  return (
    <>
      {/* Desktop: side-by-side */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
        {cards.map((card, i) => (
          <CardBody key={i} card={card} />
        ))}
      </div>

      {/* Mobile: swipeable single card */}
      <div className="md:hidden mb-2" role="region" aria-label="Service detail cards">
        <div 
          className="relative touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <CardBody card={c} />
          <button
            onClick={() => setIdx((i) => (i + 1) % cards.length)}
            aria-label={`Next card (${idx + 1} of ${cards.length})`}
            className="absolute top-3 right-3 flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-[10px] font-semibold text-gray-600 shadow-sm"
          >
            {idx + 1}/{cards.length} <ChevronRight size={11} aria-hidden="true" />
          </button>
        </div>
        <div
          className="flex justify-center gap-1.5 mt-3"
          role="tablist"
          aria-label="Card navigation"
        >
          {cards.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Card ${i + 1}: ${cards[i].title}`}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === idx ? 'bg-amber-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
