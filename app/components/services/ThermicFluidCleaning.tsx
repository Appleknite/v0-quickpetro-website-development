'use client'

import { useState, useEffect, useRef } from 'react'
import { FileText, Flame, ShieldCheck, Zap } from 'lucide-react'
import CatalogModal from '../CatalogModal'
import MetricStack from '../MetricStack'
import FlipCards from '../FlipCards'

export default function ThermicFluidCleaning() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  // Close catalog on outside click (desktop)
  const handleBackdropClick = () => setIsCatalogOpen(false)

  const metrics = [
    {
      label: 'Recovery Rating', value: '85% – 95% Efficiency',
      color: 'bg-blue-600', textColor: 'text-blue-600',
      bgColor: 'bg-blue-50/60', borderColor: 'border-blue-100',
      icon: <Zap size={18} />,
    },
    {
      label: 'Thermal Defense', value: 'Removes Carbon Crust',
      color: 'bg-cyan-600', textColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50/60', borderColor: 'border-cyan-100',
      icon: <Flame size={18} />,
    },
    {
      label: 'Process Method', value: 'Lab-Guided Diagnostics',
      color: 'bg-emerald-600', textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/60', borderColor: 'border-emerald-100',
      icon: <ShieldCheck size={18} />,
    },
  ]

  const cards = [
    {
      title: 'Full System Cleaning', tag: 'Total Flush',
      tagColor: 'bg-blue-100 text-blue-800',
      accentColor: 'bg-blue-500',
      headerBg: 'bg-gradient-to-r from-blue-50 to-transparent',
      items: [
        { title: 'Addresses severe fouling.', body: 'When carbon deposits, sludge, and resinous varnish have built up across the full circuit, a complete chemical flush restores system design parameters.' },
        { title: 'Customized flushing fluid.', body: 'Cleaning chemistry matched to your base oil type — HA, olefin, Group 2+, or Group 3+ — because a mismatched flush can damage system metallurgy.' },
        { title: 'Clears piping and heater coils.', body: 'Baked-on carbon on heater surfaces creates hot spots that accelerate thermal cracking. Removing this layer directly improves heat transfer.' },
        { title: 'Lab-guided process.', body: 'A fluid sample is tested before cleaning to identify contamination type so the correct cleaning protocol is selected, not guessed.' },
        { title: '85–95% performance recovery.', body: 'Plants that complete a full system clean followed by fresh fluid charging consistently recover heat transfer efficiency.' },
      ],
    },
    {
      title: 'Radiator & Heat Exchanger', tag: 'Targeted',
      tagColor: 'bg-cyan-100 text-cyan-800',
      accentColor: 'bg-cyan-500',
      headerBg: 'bg-gradient-to-r from-cyan-50 to-transparent',
      items: [
        { title: 'Carbon crust is the core problem.', body: 'Heat exchanger surfaces accumulate baked-on carbon over time, acting as thermal insulation and forcing higher fuel use.' },
        { title: 'Targeted surface cleaning.', body: 'Chemical contact time focused on fouled transfer surfaces where the thermal penalty is highest.' },
        { title: 'Restores delta T.', body: 'A shrinking temperature differential across the heat exchanger is a direct measurement of fouling severity. Cleaning brings it back to design values.' },
        { title: 'Prevents thermal cracking.', body: 'Localized overheating at fouled exchanger surfaces is a primary cause of flash point drop in thermic fluid.' },
        { title: 'Works across industries.', body: 'Textile, pharma, edible oil, chemical — heat exchanger fouling follows the same pattern and responds to the same targeted approach.' },
      ],
    },
    {
      title: 'Vessel Cleaning', tag: 'Decontaminate',
      tagColor: 'bg-emerald-100 text-emerald-800',
      accentColor: 'bg-emerald-500',
      headerBg: 'bg-gradient-to-r from-emerald-50 to-transparent',
      items: [
        { title: 'Expansion tanks accumulate sludge.', body: 'The expansion tank sits at the coolest point in the circuit — a collection point for oxidation byproducts and settled carbon.' },
        { title: 'Moisture must be removed.', body: 'Water in the expansion tank causes fluid emulsification and accelerates corrosion. Decontamination includes draining, cleaning, and drying.' },
        { title: 'Storage vessel inspection is critical.', body: 'Vessels that have held degraded fluid develop internal deposits that resist draining. Physical inspection confirms fitness for fresh fluid.' },
        { title: 'Prevents recontamination of fresh fluid.', body: 'Charging new thermic oil into a dirty vessel is the most common reason a newly serviced system degrades faster than expected.' },
        { title: 'Sludge disposal compliance.', body: 'Concentrated sludge removed from vessels is controlled waste. Proper disposal protocols are part of the service scope.' },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-[22px] bg-blue-600 rounded-full flex-shrink-0" />
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Thermic Fluid System Cleaning</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl">
            Full system cleaning to remove carbon deposits, sludge, and degraded fluid — restoring peak efficiency.
          </p>
        </div>
        <button
          onClick={() => setIsCatalogOpen(true)}
          className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer self-start md:self-center"
        >
          <FileText size={14} className="text-blue-600" /> Catalogue
        </button>
      </div>

      {/* Metrics */}
      <div className="hidden sm:grid grid-cols-3 gap-4 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className={`${m.bgColor} border ${m.borderColor} rounded-xl p-4 flex items-center gap-3`}>
            <div className={`p-2 ${m.color} rounded-lg text-white`}>{m.icon}</div>
            <div>
              <p className={`text-[11px] font-medium uppercase tracking-wider ${m.textColor}`}>{m.label}</p>
              <p className="text-base font-bold text-gray-900">{m.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-6"><MetricStack metrics={metrics} /></div>

      {/* Cards */}
      <FlipCards cards={cards} />

      {/* CatalogModal — closes on outside click (handled inside CatalogModal via backdrop) */}
      <CatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />

      {/* SEO article */}
      <article aria-label="Thermic Fluid System Cleaning — Technical Reference" style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
        <h1>Thermic Fluid System Cleaning: A Complete Guide for Industrial Heat Transfer Systems</h1>
      </article>
    </div>
  )
}
