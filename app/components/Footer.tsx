import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-[#1F2937] border-t border-gray-700/50 px-4 sm:px-6 py-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
          {/* Brand */}
          <div>
            <div className="font-mono text-base font-semibold tracking-widest mb-1">
              <span className="text-white">QUICK</span>
              <span className="text-[#F59E0B]">PETRO</span>
            </div>
            <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
              Thermic fluid system specialists serving industrial plants across India since 1998.
            </p>
          </div>

          {/* Contact */}
          <address className="not-italic flex flex-col gap-2.5">
            <a
              href="https://wa.me/919825044917"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp QuickPetro"
              className="flex items-center gap-2 text-green-400 text-sm font-medium hover:text-white transition-colors no-underline"
            >
              <Phone size={14} aria-hidden="true" />
              +91 98250 44917
            </a>
            <a
              href="mailto:quickpetro@gmail.com"
              aria-label="Email QuickPetro"
              className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium hover:text-white transition-colors no-underline"
            >
              <Mail size={14} aria-hidden="true" />
              quickpetro@gmail.com
            </a>
            <a
              href="https://maps.google.com/?q=Pushkar+Industrial+Estate,+GIDC+Vatva,+Ahmedabad+382445"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 text-sm hover:text-gray-300 transition-colors no-underline"
            >
              <MapPin size={14} aria-hidden="true" />
              GIDC Vatva, Ahmedabad 382445, Gujarat
            </a>
          </address>
        </div>

        <div className="border-t border-gray-700/40 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-gray-600 text-xs">© {year} QuickPetro. All rights reserved.</p>
          <p className="text-gray-600 text-xs">
            NABL-Accredited Fluid Analysis · 26+ Years Experience
          </p>
        </div>
      </div>
    </footer>
  )
}
