import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-primary px-4 sm:px-6 py-3 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 overflow-x-hidden">
      {/* Logo */}
      <div className="font-mono text-base sm:text-lg font-semibold tracking-widest flex-shrink-0">
        <span className="text-white">QUICK</span>
        <span className="text-accent">PETRO</span>
      </div>

      {/* Contact Block */}
      <div className="flex flex-col items-start xs:items-end gap-1 min-w-0 w-full xs:w-auto">
        <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wide">Dhaval Gandhi</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full xs:w-auto">
          <a
            href="tel:+919825044917"
            className="flex items-center gap-2 text-accent text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline"
          >
            <Phone size={13} className="flex-shrink-0" />
            <span className="whitespace-nowrap">+91 98250 44917</span>
          </a>
          <a
            href="mailto:quickpetro@gmail.com"
            className="flex items-center gap-2 text-accent text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline break-all"
          >
            <Mail size={13} className="flex-shrink-0" />
            <span>quickpetro@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  )
}