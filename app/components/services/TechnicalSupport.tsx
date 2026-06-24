'use client'

import { useState } from 'react'
import { CheckCircle, Phone, Mail } from 'lucide-react'

const inputClass = [
  'w-full px-3.5 py-3 text-sm border border-gray-200 rounded-lg',
  'text-gray-800 placeholder-gray-400 bg-white',
  'focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent',
  'transition-shadow',
].join(' ')

const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2'

export default function TechnicalSupport() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '2f884029-2685-4117-98d7-c8319288df97')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        ;(event.target as HTMLFormElement).reset()
      } else {
        setResult(`Submission error: ${data.message}`)
      }
    } catch {
      setResult('A network error occurred. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1 pb-5 border-b border-gray-200/80">
        <div className="w-1 h-[22px] bg-amber-600 rounded-full flex-shrink-0" aria-hidden="true" />
        <div>
          <h2 id="support-heading" className="text-xl font-bold tracking-tight text-gray-900">
            Get a Quote
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Describe your system — we will respond within one business day.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        {/* Form */}
        <div className="flex-1 min-w-0">
          {submitted ? (
            <div
              role="alert"
              aria-live="polite"
              className="flex flex-col items-center text-center py-12 gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle size={28} className="text-green-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Request Received</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  We have received your enquiry and will be in touch within one business day.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-amber-600 underline underline-offset-2 hover:text-amber-700 transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-label="Technical support enquiry">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="enquiry-name" className={labelClass}>Name</label>
                  <input
                    type="text"
                    id="enquiry-name"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className={labelClass}>Contact Number</label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="enquiry-message" className={labelClass}>Describe your issue</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={5}
                  placeholder="System type, symptoms, how long the issue has persisted..."
                  required
                  className={`${inputClass} resize-vertical`}
                />
              </div>

              {result && (
                <p role="alert" className="mb-4 text-sm text-red-600 font-medium">{result}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-[#D97706] text-white font-semibold text-sm rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Or reach us directly
            </p>
            
              href="https://wa.me/919825044917"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp QuickPetro at +91 98250 44917"
              className="flex items-center gap-3 mb-4 no-underline group"
            >
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                <Phone size={16} className="text-green-700" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">WhatsApp / Call</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                  +91 98250 44917
                </p>
              </div>
            </a>
            
              href="mailto:quickpetro@gmail.com"
              aria-label="Email QuickPetro"
              className="flex items-center gap-3 no-underline group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                <Mail size={16} className="text-amber-700" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Email</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
                  quickpetro@gmail.com
                </p>
              </div>
            </a>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 leading-relaxed">
                Response within <strong className="text-gray-600">1 business day</strong> on
                enquiries. WhatsApp for urgent assistance.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* ContactPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'QuickPetro Technical Support & Enquiry',
            description:
              'Send a technical enquiry or get a quote for thermic fluid system cleaning, filtration, and analysis services.',
            provider: {
              '@type': 'Organization',
              name: 'QuickPetro',
              telephone: '+919825044917',
              email: 'quickpetro@gmail.com',
            },
          }),
        }}
      />
    </div>
  )
}
