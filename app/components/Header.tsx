import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-primary px-4 sm:px-6 py-3 sm:py-3.5 flex justify-between items-center gap-2 overflow-x-hidden">
      {/* Logo */}
      <div className="font-mono text-sm sm:text-lg font-semibold tracking-widest flex-shrink-0">
        <span className="text-white">QUICK</span>
        <span className="text-accent">PETRO</span>
      </div>

      {/* Contact Block */}
      <div className="flex flex-col items-end gap-1 min-w-0">
        <p className="text-gray-400 text-xs uppercase tracking-wide truncate">Dhaval Gandhi</p>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <a
            href="tel:+919825044917"
            className="flex items-center gap-1 sm:gap-1.5 text-accent text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline whitespace-nowrap"
          >
            <Phone size={12} className="hidden sm:inline" />
            <span className="text-xs">+91 98250</span>
          </a>
          <a
            href="mailto:quickpetro@gmail.com"
            className="flex items-center gap-1 sm:gap-1.5 text-accent text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline whitespace-nowrap"
          >
            <Mail size={12} className="hidden sm:inline" />
            <span className="text-xs">quickpetro</span>
          </a>
        </div>
      </div>
    </header>
  )
}
