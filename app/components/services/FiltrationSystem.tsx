import { FileText, Video } from 'lucide-react'

export default function FiltrationSystem() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-0.5 h-[18px] bg-secondary rounded-sm flex-shrink-0" />
        <h2 className="text-lg font-semibold text-primary">Filtration System</h2>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        Maintaining fluid purity to extend equipment life and ensure consistent heat transfer efficiency.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        <div className="bg-white border border-gray-200 border-t-2 border-t-secondary rounded p-3.5">
          <h4 className="text-sm font-semibold text-primary mb-1">Online Filtration</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Continuous filtration during plant operation — no downtime required.</p>
        </div>

        <div className="bg-white border border-gray-200 border-t-2 border-t-secondary rounded p-3.5">
          <h4 className="text-sm font-semibold text-primary mb-1">Offline Filtration</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Deep-clean filtration for scheduled maintenance windows and heavy contamination.</p>
        </div>
      </div>

      {/* Media pills row */}
      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors">
          <FileText size={13} className="text-secondary" />
          Catalogue
        </button>

        <button className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors">
          <Video size={13} className="text-secondary" />
          Video
        </button>
      </div>
    </div>
  )
}
