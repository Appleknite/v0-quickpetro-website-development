'use client'

import { useState, useRef } from 'react'
import { Upload } from 'lucide-react'

export default function TechnicalSupport() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = () => {
    // Form data is ready to be sent to backend
    // This is just a placeholder for frontend-only state management
  }

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-0.5 h-[18px] bg-secondary rounded-sm flex-shrink-0" />
        <h2 className="text-lg font-semibold text-primary">Technical Support</h2>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        Describe your issue and attach supporting files — we&apos;ll get back to you promptly.
      </p>

      {/* Form wrapper - not a form tag, but a div */}
      <div>
        {/* Row 1: Name and Contact */}
        <div className="grid grid-cols-2 gap-2.5 mb-2.5">
          {/* Name field */}
          <div>
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full text-sm px-2.5 py-2 border border-gray-200 rounded-sm bg-white text-body focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          {/* Contact field */}
          <div>
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
              Contact Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              className="w-full text-sm px-2.5 py-2 border border-gray-200 rounded-sm bg-white text-body focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Message */}
        <div className="mb-2.5">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
            Describe Your Issue
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="System type, symptoms, how long the issue has persisted..."
            className="w-full text-sm px-2.5 py-2 border border-gray-200 rounded-sm bg-white text-body focus:outline-none focus:border-secondary transition-colors min-h-[80px] resize-y"
          />
        </div>

        {/* Row 3: File upload area */}
        <div
          onClick={handleUploadClick}
          className="border-2 border-dashed border-gray-300 rounded-sm p-3.5 text-center text-gray-400 cursor-pointer hover:border-secondary hover:text-secondary transition-colors mb-3"
        >
          <Upload size={16} className="mx-auto mb-1.5" />
          <p className="text-xs font-medium">Attach image or video (optional)</p>
          {file && <p className="text-xs text-secondary mt-1">{file.name}</p>}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="bg-secondary text-white font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-amber-700 transition-colors"
        >
          Send Enquiry
        </button>
      </div>
    </div>
  )
}
