'use client'

import { FileText } from 'lucide-react'
import { useState } from 'react'
import CatalogModal from '../CatalogModal'

export default function ThermicFluidCleaning() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-0.5 h-[18px] bg-secondary rounded-sm flex-shrink-0" />
        <h2 className="text-lg font-semibold text-primary">Thermic Fluid System Cleaning</h2>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        Full system cleaning to remove carbon deposits, sludge, and degraded fluid — restoring peak efficiency.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
        <div className="bg-white border border-gray-200 border-t-2 border-t-secondary rounded p-3.5">
          <h4 className="text-sm font-semibold text-primary mb-1">Full System Cleaning</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Complete circuit flush and chemical clean for heavily fouled systems.</p>
        </div>

        <div className="bg-white border border-gray-200 border-t-2 border-t-secondary rounded p-3.5">
          <h4 className="text-sm font-semibold text-primary mb-1">Radiator & Heat Exchanger</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Targeted cleaning of heat transfer surfaces to restore thermal performance.</p>
        </div>

        <div className="bg-white border border-gray-200 border-t-2 border-t-secondary rounded p-3.5">
          <h4 className="text-sm font-semibold text-primary mb-1">Vessel Cleaning</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Expansion tank and storage vessel decontamination and inspection.</p>
        </div>
      </div>

      {/* Media pills row */}
      <div className="flex gap-2">
        <button 
          onClick={() => setIsCatalogOpen(true)}
          className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary hover:bg-amber-50 rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors cursor-pointer"
        >
          <FileText size={13} className="text-secondary" />
          Catalogue
        </button>
      </div>

      {/* Catalog Modal */}
      <CatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
    </div>
  )
}
