import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-primary px-6 py-3.5 flex justify-between items-center">
      {/* Logo */}
      <div className="font-mono text-lg font-semibold tracking-widest">
        <span className="text-white">QUICK</span>
        <span className="text-accent">PETRO</span>
      </div>

      {/* Contact Block */}
      <div className="flex flex-col items-end gap-1">
        <p className="text-gray-400 text-xs uppercase tracking-wide">Dhaval Gandhi</p>
        <div className="flex gap-4">
          <a
            href="tel:+919825044917"
            className="flex items-center gap-1.5 text-accent text-sm font-medium hover:text-white transition-colors no-underline"
          >
            <Phone size={14} />
            <span>+91 98250 44917</span>
          </a>
          <a
            href="mailto:quickpetro@gmail.com"
            className="flex items-center gap-1.5 text-accent text-sm font-medium hover:text-white transition-colors no-underline"
          >
            <Mail size={14} />
            <span>quickpetro@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  )
}
