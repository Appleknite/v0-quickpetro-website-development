'use client'

import React from 'react'
import { X } from 'lucide-react'
import LegaKCatalogue from './LegaKCatalogue'

export default function LegaKCatalogModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    // Close only if clicking on the backdrop itself, not the content
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-lg shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close catalogue"
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto overflow-x-auto flex-1">
          <LegaKCatalogue />
        </div>
      </div>
    </div>
  )
}
