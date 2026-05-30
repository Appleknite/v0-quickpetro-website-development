import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-primary px-3 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center gap-2 overflow-x-hidden">
      {/* Logo */}
      <div className="font-mono text-xs sm:text-lg font-semibold tracking-widest flex-shrink-0">
        <span className="text-white">QUICK</span>
        <span className="text-accent">PETRO</span>
      </div>

      {/* Contact Block */}
      <div className="flex flex-col items-end gap-0.5 min-w-0">
        <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wide truncate">Dhaval Gandhi</p>
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3">
          <a
            href="tel:+919825044917"
            className="flex items-center gap-1 text-accent text-[10px] sm:text-sm font-medium hover:text-white transition-colors no-underline flex-shrink-0"
          >
            <Phone size={11} className="flex-shrink-0" />
            <span>+91 98250 44917</span>
          </a>
          <a
            href="mailto:quickpetro@gmail.com"
            className="flex items-center gap-1 text-accent text-[10px] sm:text-sm font-medium hover:text-white transition-colors no-underline flex-shrink-0"
          >
            <Mail size={11} className="flex-shrink-0" />
            <span className="hidden sm:inline">quickpetro@gmail.com</span>
            <span className="sm:hidden">quickpetro@</span>
          </a>
        </div>
      </div>
    </header>
  )
}
