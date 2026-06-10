import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-700 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-auto">
      <div className="flex flex-col gap-1.5">
        <a href="https://wa.me/919825044917" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-green-400 text-sm font-medium hover:text-white transition-colors no-underline">
          <Phone size={14} />
          <span>+91 98250 44917</span>
        </a>
        <a href="mailto:quickpetro@gmail.com"
          className="flex items-center gap-1.5 text-accent text-sm font-medium hover:text-white transition-colors no-underline">
          <Mail size={14} />
          <span>quickpetro@gmail.com</span>
        </a>
      </div>
      <p className="text-gray-600 text-xs">© 2026 QuickPetro. All rights reserved.</p>
    </footer>
  )
}
