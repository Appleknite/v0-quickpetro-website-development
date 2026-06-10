'use client'

import { Flame } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-primary border-t border-gray-700 px-4 sm:px-6 py-8 sm:py-12 overflow-x-hidden">
      <div className="inline-flex items-center gap-1.5 bg-amber-600/15 border border-amber-600/30 text-accent text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-4 whitespace-nowrap">
        <Flame size={14} />
        <span className="hidden sm:inline">Thermic Fluid Systems Specialists</span>
        <span className="sm:hidden">Thermic Fluid</span>
      </div>

      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-3">
        Optimizing <span className="text-accent">Thermic Fluid Systems</span>
      </h1>

      <p className="text-gray-400 text-sm max-w-lg mb-2 leading-relaxed">
        We help you <strong className="text-accent font-semibold">prevent breakdowns</strong>, <strong className="text-accent font-semibold">reduce downtime</strong>, and protect your equipment — specialized cleaning and filtering for heat transfer fluid systems.
      </p>

      <p className="text-[#B8BFC8] text-xs sm:text-sm italic mb-6">
        Founded by <strong className="text-gray-200 not-italic font-medium">Mr. Dhavalkumar Gandhi</strong> — keeping plants running smoothly since 1998.
      </p>

      <div className="flex gap-4 sm:gap-7 mb-8">
        <div className="border-l-2 border-secondary pl-3">
          <div className="font-mono text-xl sm:text-2xl font-semibold text-white">26+</div>
          <div className="text-gray-400 text-xs uppercase tracking-wide">Years Experience</div>
        </div>
        <div className="border-l-2 border-secondary pl-3">
          <div className="font-mono text-xl sm:text-2xl font-semibold text-white">900+</div>
          <div className="text-gray-400 text-xs uppercase tracking-wide">Companies Served</div>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => scrollTo('support')}
          className="flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Send Enquiry
        </button>
        <a
          href="https://wa.me/919825044917"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-green-600 transition-colors no-underline"
        >
          WhatsApp Us
        </a>
      </div>

      {/* Trust bar */}
      <div className="border-t border-gray-700 pt-5">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Trusted by</p>
        <div className="flex flex-wrap gap-2 items-center">
          {['Asahi India Glass Ltd.', 'Patanjali Ayurved Ltd.', 'Meghmani Organics Ltd.'].map((name) => (
            <span
              key={name}
              className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded"
            >
              {name}
            </span>
          ))}
          <span className="text-gray-500 text-xs ml-1">& 900+ other companies</span>
        </div>
      </div>
    </section>
  )
}
