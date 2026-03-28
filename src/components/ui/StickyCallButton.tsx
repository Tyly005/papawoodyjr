import { Phone } from 'lucide-react'

export default function StickyCallButton() {
  return (
    <a
      href="tel:+12896874147"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-cedar hover:bg-cedar-light text-white px-5 py-3.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-sm font-medium tracking-wide"
      aria-label="Call Papa Woody Jr Services Inc."
    >
      <Phone size={16} />
      <span className="hidden sm:inline">(289) 687-4147</span>
    </a>
  )
}
