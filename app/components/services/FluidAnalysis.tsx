'use client'

import { FlaskConical, ShieldCheck, MapPin } from 'lucide-react'
import MetricStack from '../MetricStack'
import FlipCards from '../FlipCards'

export default function FluidAnalysis() {
  const metrics = [
    {
      label: 'Testing Spectrum', value: '9 Core Parameters',
      color: 'bg-slate-700', textColor: 'text-slate-600',
      bgColor: 'bg-slate-100/80', borderColor: 'border-slate-200',
      icon: <FlaskConical size={18} />,
    },
    {
      label: 'Accreditation Benchmark', value: 'NABL / ISO 17025',
      color: 'bg-blue-600', textColor: 'text-blue-600',
      bgColor: 'bg-blue-50/60', borderColor: 'border-blue-100',
      icon: <ShieldCheck size={18} />,
    },
    {
      label: 'Regional Footprint', value: 'Ahmedabad Hub, GJ',
      color: 'bg-indigo-600', textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50/60', borderColor: 'border-indigo-100',
      icon: <MapPin size={18} />,
    },
  ]

  const cards = [
    {
      title: 'Comprehensive Fluid Testing', tag: 'Parameters',
      tagColor: 'bg-slate-100 text-slate-800',
      accentColor: 'bg-slate-500',
      headerBg: 'bg-gradient-to-r from-slate-50 to-transparent',
      items: [
        { title: 'Nine parameters, one report.', body: 'Measures flash point, kinematic viscosity, pentane/toluene insolubles, sediment, moisture content, TAN, color, and density in a single diagnostic window.' },
        { title: 'Identifies the exact failure mode.', body: 'Isolates structural cracking from chemical oxidation. The thermic fluid lab report provides an exact molecular signature of your system\'s core vulnerabilities.' },
        { title: 'Prevents wrong service actions.', body: 'Solid analytical data blocks facilities from mistakenly deploying expensive chemical flushing when simple targeted filtration is all that is required.' },
      ],
    },
    {
      title: 'NABL Laboratory Standards', tag: 'Compliance',
      tagColor: 'bg-blue-100 text-blue-800',
      accentColor: 'bg-blue-500',
      headerBg: 'bg-gradient-to-r from-blue-50 to-transparent',
      items: [
        { title: 'What NABL accreditation means.', body: 'Fully complies with ISO/IEC 17025 international protocols. Overseen by DPIIT, Government of India — ensuring legally defensible data.' },
        { title: 'Required for insurance & warranties.', body: 'Non-accredited lab metrics are instantly rejected in Indian corporate insurance disputes, equipment warranty challenges, and statutory audits.' },
        { title: 'Live operational sampling.', body: 'Samples must be drawn hot (60°C–80°C) from an active circulation loop to secure a clear baseline for thermal oil quality parameters.' },
      ],
    },
    {
      title: 'QUICKPETRO Regional Solutions', tag: 'Gujarat',
      tagColor: 'bg-indigo-100 text-indigo-800',
      accentColor: 'bg-indigo-500',
      headerBg: 'bg-gradient-to-r from-indigo-50 to-transparent',
      items: [
        { title: 'Ahmedabad Hub Coordination.', body: 'Samples submitted via QUICKPETRO are routed immediately to our primary NABL accredited oil testing lab network in Ahmedabad, Gujarat.' },
        { title: 'Expert Engineering Oversight.', body: 'Senior engineering specialist Dhaval Gandhi provides custom, design-level diagnostic interpretations mapping your report metrics to local field solutions.' },
        { title: 'Verified System Performance.', body: 'Combining laboratory metrics with real-time field data (Delta P, Delta T) allows Indian manufacturing units to achieve 85–95% thermal efficiency recovery.' },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">

      <div className="flex items-center gap-2 mb-1 pb-5 border-b border-gray-200/80">
        <div className="w-1 h-[22px] bg-slate-700 rounded-full flex-shrink-0" />
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Thermic Fluid Analysis & Testing Services</h2>
          <p className="text-gray-500 text-sm max-w-3xl leading-relaxed mt-1">
            NABL-accredited <strong className="font-semibold text-gray-700">heat transfer oil analysis</strong> for industrial processing plants across India. Ahmedabad-based testing facility delivers precise diagnostic tracking to eliminate thermal system downtime.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="hidden sm:grid grid-cols-3 gap-4 mb-6 mt-6">
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
      <div className="mb-6 mt-4"><MetricStack metrics={metrics} /></div>

      <FlipCards cards={cards} />

      <article aria-label="Thermic Fluid Analysis — Technical Reference" style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
        <h1>Thermic Fluid Analysis: Why NABL-Accredited Testing Is the Starting Point for Every Heat Transfer System Decision</h1>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'LocalBusiness',name:'QUICKPETRO',telephone:'+919825044917',address:{'@type':'PostalAddress',addressLocality:'Ahmedabad',addressRegion:'Gujarat',addressCountry:'IN'}})}} />
    </div>
  )
}
