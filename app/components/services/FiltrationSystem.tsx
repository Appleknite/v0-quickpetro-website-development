'use client'

import { useState } from 'react'
import { FileText, Video, Image as ImageIcon, X, ShieldAlert, Cpu, CheckCircle } from 'lucide-react'
import MetricStack from '../MetricStack'
import FlipCards from '../FlipCards'

export default function FiltrationSystem() {
  const [showImages, setShowImages] = useState(false)
  const [showVideos, setShowVideos] = useState(false)

  const metrics = [
    {
      label: 'Precision Rating', value: 'Down to 2 Microns',
      color: 'bg-indigo-600', textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50/60', borderColor: 'border-indigo-100',
      icon: <Cpu size={18} />,
    },
    {
      label: 'Operational Target', value: 'Zero Process Downtime',
      color: 'bg-emerald-600', textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/60', borderColor: 'border-emerald-100',
      icon: <CheckCircle size={18} />,
    },
    {
      label: 'Core Defended', value: 'Sludge & Carbon Control',
      color: 'bg-amber-600', textColor: 'text-amber-600',
      bgColor: 'bg-amber-50/60', borderColor: 'border-amber-100',
      icon: <ShieldAlert size={18} />,
    },
  ]

  const cards = [
    {
      title: 'Online Filtration Setup', tag: 'Continuous',
      tagColor: 'bg-indigo-100 text-indigo-800',
      accentColor: 'bg-indigo-500',
      headerBg: 'bg-gradient-to-r from-indigo-50 to-transparent',
      items: [
        { title: 'No shutdown needed.', body: 'Connects directly into your live thermic fluid circuit and runs continuously while your boiler operates.' },
        { title: 'Filters down to 2 microns.', body: 'Staged wire mesh array — 50, 25, 10, 5 micron — before final 2-micron separation. Fine carbon dust captured here.' },
        { title: 'No extra pump required.', body: 'Cleaned oil returns to the main pump by gravity alone — electrically independent and mechanically simple.' },
        { title: 'Stops sludge before it settles.', body: 'Carbon residues removed in circulation before depositing on mechanical seals or heat exchanger surfaces.' },
        { title: 'Reduces overall maintenance cost.', body: 'Pump filter clogging drops sharply and unplanned downtime is eliminated — extending equipment life across the system.' },
      ],
    },
    {
      title: 'Offline Filtration Setup', tag: 'Batch Deep-Clean',
      tagColor: 'bg-amber-100 text-amber-800',
      accentColor: 'bg-amber-500',
      headerBg: 'bg-gradient-to-r from-amber-50 to-transparent',
      items: [
        { title: 'Built for heavy contamination.', body: 'When sludge accumulation reaches concentrated levels, offline filtration handles the deep-clean pass.' },
        { title: 'Used during scheduled maintenance windows.', body: 'Operates independently during planned shutdowns — no production time pressure.' },
        { title: 'Restores degraded fluid to working condition.', body: 'Severely oxidized thermic oil can be cleaned and returned to acceptable parameters, delaying full replacement.' },
        { title: 'Ideal as a one-time system reset.', body: 'Plants switching to continuous online filtration often begin with an offline deep-clean to establish a clean baseline.' },
        { title: 'Addresses piping and reservoir sludge.', body: 'Directed through sumps, headers, and low-flow zones where settled sludge accumulates and is missed by inline filtration.' },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-[22px] bg-indigo-600 rounded-full flex-shrink-0" />
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Filtration System Overview</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl">
            Maintaining fluid purity to extend industrial equipment life and ensure consistent heat transfer efficiency.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 self-start md:self-center">
          <a href="/TF_Clean_Brochure.pdf" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer">
            <FileText size={14} className="text-indigo-600" /> Catalogue
          </a>
          <button onClick={() => setShowImages(true)}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer">
            <ImageIcon size={14} className="text-indigo-600" /> Images
          </button>
          <button onClick={() => setShowVideos(true)}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer">
            <Video size={14} className="text-indigo-600" /> Videos
          </button>
        </div>
      </div>

      {/* Metrics — grid on desktop, stack on mobile */}
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

      {/* SEO article — hidden */}
      <article aria-label="Thermic Fluid Filtration System — Technical Reference" style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
        <h1>Thermic Fluid Filtration System: How Online Cleaning Units Protect Industrial Heat Transfer Systems</h1>
      </article>

      {/* FAQ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:[{'@type':'Question',name:'What is a thermic fluid filtration system?',acceptedAnswer:{'@type':'Answer',text:'A thermic fluid filtration system is a mechanical separation unit that removes solid particulates and carbon sludge from industrial heat transfer circuits.'}},{'@type':'Question',name:'How often should thermic fluid be filtered?',acceptedAnswer:{'@type':'Answer',text:'Thermic fluid should be filtered continuously during plant operation. An online filtration unit running continuously outpaces the rate of contamination buildup.'}}]})}} />

      {/* Images Modal */}
      {showImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setShowImages(false)}>
          <div className="relative bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowImages(false)} className="absolute top-4 right-4 p-1.5 bg-gray-100 hover:bg-gray-200 hover:text-red-500 rounded-full text-gray-600 transition-colors">
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-primary">Sludge & Carbon Residue Buildup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="/Sludge_img_1.jpg" alt="Thermic fluid sludge in hand" className="w-full h-auto rounded border border-gray-200 shadow-sm" />
              <img src="/Sludge_img_2.jpg" alt="Carbon buildup on pipe" className="w-full h-auto rounded border border-gray-200 shadow-sm" />
            </div>
          </div>
        </div>
      )}

      {/* Videos Modal */}
      {showVideos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto" onClick={() => setShowVideos(false)}>
          <div className="relative bg-zinc-900 rounded-lg max-w-5xl w-full shadow-2xl p-6 my-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowVideos(false)} className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 hover:text-red-500 rounded-full text-white transition-colors z-10">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-semibold mb-6 text-white pr-12">System Guides & Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-300 font-medium">1. Filter Cleaning Process</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-zinc-700 shadow-lg relative">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZyhlDPy6jp0" title="Cleaning the Filtration System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-300 font-medium">2. Machine Installation</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-zinc-700 shadow-lg relative">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ovy8Zw28lUA" title="Machine Installation Guide" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
