import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-primary px-4 sm:px-6 py-3 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 overflow-x-hidden">
      <div className="font-mono text-base sm:text-lg font-semibold tracking-widest flex-shrink-0">
        <span className="text-white">QUICK</span>
        <span className="text-accent">PETRO</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full xs:w-auto">
        <a
          href="https://wa.me/919825044917"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline"
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
    </header>
  )
}
