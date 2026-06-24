'use client'

import { Flame, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="w-full bg-[#1F2937] border-t border-gray-700/50 px-4 sm:px-6 py-10 sm:py-16 overflow-x-hidden"
      aria-label="QuickPetro thermic fluid system specialists"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 bg-amber-600/15 border border-amber-600/30 text-[#F59E0B] text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-5">
          <Flame size={13} aria-hidden="true" />
          <span>Thermic Fluid System Specialists</span>
        </div>

        {/* Headline */}
        <h1
          className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4 max-w-2xl"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          Keep Your{' '}
          <span className="text-[#F59E0B]">Thermic Fluid Systems</span>{' '}
          Running at Peak Efficiency
        </h1>

        {/* Sub-copy */}
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mb-2 leading-relaxed">
          Prevent breakdowns, reduce downtime, and protect your equipment with specialized{' '}
          <strong className="text-gray-200 font-medium">
            thermic fluid cleaning, filtration, and NABL-accredited analysis
          </strong>{' '}
          for industrial heat transfer systems.
        </p>

        <p className="text-gray-500 text-xs sm:text-sm mb-8">
          Founded by{' '}
          <strong className="text-gray-300 font-medium">Dhavalkumar Gandhi</strong> — keeping
          industrial plants running smoothly since 1998.
        </p>

        {/* Stats */}
        <div
          className="flex gap-6 sm:gap-10 mb-9"
          role="list"
          aria-label="QuickPetro credentials"
        >
          {[
            { value: '26+', label: 'Years Experience' },
            { value: '900+', label: 'Companies Served' },
          ].map(({ value, label }) => (
            <div
              key={label}
              role="listitem"
              className="border-l-2 border-[#D97706] pl-4"
            >
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-white leading-none mb-1">
                {value}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => scrollTo('support')}
            className="flex items-center gap-2 bg-[#F59E0B] text-gray-900 font-semibold text-sm px-5 py-3 rounded-md hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Send Enquiry
            <ArrowRight size={15} aria-hidden="true" />
          </button>
          <a
            href="https://wa.me/919825044917"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp QuickPetro"
            className="flex items-center gap-2 bg-green-500 text-white font-semibold text-sm px-5 py-3 rounded-md hover:bg-green-400 transition-colors no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.525 5.857L.057 23.882a.5.5 0 0 0 .613.613l6.109-1.46A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.372l-.36-.213-3.727.892.908-3.636-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Trust bar */}
        <div className="border-t border-gray-700/60 pt-5">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">
            Trusted by India's leading manufacturers
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            {[
              'Asahi India Glass Ltd.',
              'Patanjali Ayurved Ltd.',
              'Meghmani Organics Ltd.',
            ].map((name) => (
              <span
                key={name}
                className="bg-gray-800/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1.5 rounded"
              >
                {name}
              </span>
            ))}
            <span className="text-gray-500 text-xs">& 900+ other companies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
