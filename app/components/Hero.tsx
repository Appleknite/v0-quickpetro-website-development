import { Flame } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full bg-primary border-t border-gray-700 px-4 sm:px-6 py-8 sm:py-12 overflow-x-hidden">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-amber-600/15 border border-amber-600/30 text-accent text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-4 whitespace-nowrap">
        <Flame size={14} />
        <span className="hidden sm:inline">Thermic Fluid Systems Specialists</span>
        <span className="sm:hidden">Thermic Fluid</span>
      </div>

      {/* H1 */}
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-3">
        Optimizing <span className="text-accent">Thermic Fluid Systems</span>
      </h1>

      {/* Sub-paragraph */}
      <p className="text-gray-400 text-sm max-w-lg mb-2 leading-relaxed">
        We help you <strong className="text-accent font-semibold">prevent breakdowns</strong>, <strong className="text-accent font-semibold">reduce downtime</strong>, and protect your equipment — specialized cleaning and filtering for heat transfer fluid systems.
      </p>

      {/* Founder line */}
      <p className="text-[#B8BFC8] text-xs sm:text-sm italic mb-6">
        Founded by <strong className="text-gray-200 not-italic font-medium">Mr. Dhavalkumar Gandhi</strong> — keeping plants running smoothly since 1998.
      </p>

      {/* Stats row */}
      <div className="flex gap-4 sm:gap-7">
        <div className="border-l-2 border-secondary pl-3">
          <div className="font-mono text-xl sm:text-2xl font-semibold text-white">26+</div>
          <div className="text-gray-400 text-xs uppercase tracking-wide">Years Experience</div>
        </div>
        <div className="border-l-2 border-secondary pl-3">
          <div className="font-mono text-xl sm:text-2xl font-semibold text-white">900+</div>
          <div className="text-gray-400 text-xs uppercase tracking-wide">Companies Served</div>
        </div>
      </div>
    </section>
  )
}
