import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full bg-[#1F2937] border-b border-gray-700/50 px-4 sm:px-6"
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 sm:h-16 gap-4">
        {/* Logo */}
        <a
          href="/"
          aria-label="QuickPetro home"
          className="font-mono text-base sm:text-lg font-semibold tracking-widest flex-shrink-0 no-underline hover:opacity-80 transition-opacity"
        >
          <span className="text-white">QUICK</span>
          <span className="text-[#F59E0B]">PETRO</span>
        </a>

        {/* Contact nav */}
        <nav aria-label="Contact" className="flex items-center gap-3 sm:gap-5">
          <a
            href="https://wa.me/919825044917"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp QuickPetro at +91 98250 44917"
            className="flex items-center gap-1.5 text-green-400 text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline"
          >
            <Phone size={13} aria-hidden="true" className="flex-shrink-0" />
            <span className="whitespace-nowrap hidden sm:inline">+91 98250 44917</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="mailto:quickpetro@gmail.com"
            aria-label="Email QuickPetro"
            className="hidden md:flex items-center gap-1.5 text-[#F59E0B] text-xs sm:text-sm font-medium hover:text-white transition-colors no-underline"
          >
            <Mail size={13} aria-hidden="true" className="flex-shrink-0" />
            <span>quickpetro@gmail.com</span>
          </a>
          <a
            href="#support"
            className="hidden sm:flex items-center bg-[#F59E0B] text-gray-900 font-semibold text-xs px-4 py-2 rounded-md hover:bg-amber-400 transition-colors no-underline whitespace-nowrap"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
