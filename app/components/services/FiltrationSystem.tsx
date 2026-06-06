import { useState } from 'react'
import { FileText, Video, Image as ImageIcon, X } from 'lucide-react'

export default function FiltrationSystem() {
  // State to control the pop-up visibility
  const [showImages, setShowImages] = useState(false)

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
        <a 
          href="/TF_Clean_Brochure.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors cursor-pointer"
        >
          <FileText size={13} className="text-secondary" />
          Catalogue
        </a>

        {/* Images Button */}
        <button 
          onClick={() => setShowImages(true)}
          className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors"
        >
          <ImageIcon size={13} className="text-secondary" />
          Images
        </button>

        <button className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors">
          <Video size={13} className="text-secondary" />
          Video
        </button>
      </div>

      {/* Image Pop-up (Modal) */}
      {showImages && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setShowImages(false)} 
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setShowImages(false)}
              className="absolute top-4 right-4 p-1.5 bg-gray-100 hover:bg-gray-200 hover:text-red-500 rounded-full text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-semibold mb-4 text-primary">Sludge & Carbon Residue Buildup</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Updated Image Paths */}
              <img 
                src="/Sludge_img_1.jpg" 
                alt="Thermic fluid sludge in hand" 
                className="w-full h-auto rounded border border-gray-200 shadow-sm"
              />
              <img 
                src="/Sludge_img_2.jpg" 
                alt="Carbon buildup on pipe" 
                className="w-full h-auto rounded border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}