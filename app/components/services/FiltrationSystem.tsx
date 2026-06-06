import { useState } from 'react'
import { FileText, Video, Image as ImageIcon, X } from 'lucide-react'

export default function FiltrationSystem() {
  // State to control pop-ups
  const [showImages, setShowImages] = useState(false)
  const [showVideos, setShowVideos] = useState(false)

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

        {/* Videos Button */}
        <button 
          onClick={() => setShowVideos(true)}
          className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 hover:border-secondary hover:text-secondary rounded-sm px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors"
        >
          <Video size={13} className="text-secondary" />
          Videos
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

      {/* Video Pop-up (Modal) */}
      {showVideos && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowVideos(false)} 
        >
          <div 
            className="relative bg-zinc-900 rounded-lg max-w-5xl w-full shadow-2xl p-6 my-8"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setShowVideos(false)}
              className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 hover:text-red-500 rounded-full text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-semibold mb-6 text-white pr-12">System Guides & Tutorials</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Video 1: Cleaning */}
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-300 font-medium">1. Filter Cleaning Process</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-zinc-700 shadow-lg relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/ZyhlDPy6jp0" 
                    title="Cleaning the Filtration System" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Video 2: Installation */}
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-300 font-medium">2. Machine Installation</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-zinc-700 shadow-lg relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/Ovy8Zw28lUA" 
                    title="Machine Installation Guide" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}