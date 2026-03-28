import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import BrandMark from './BrandMark'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#gallery' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-16 transition-all duration-400 ${
        scrolled
          ? 'py-3 sm:py-4 bg-bark/90 backdrop-blur-md shadow-[0_12px_40px_rgba(20,12,8,0.24)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <a href="#" className="shrink-0">
        <BrandMark compact />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-white/80 text-[0.82rem] tracking-[0.12em] uppercase font-normal hover:text-gold-light transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-block rounded-full bg-cedar hover:bg-cedar-light text-white px-6 py-3 text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-300"
      >
        Request Estimate
      </a>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-bark/98 px-4 py-6 flex flex-col items-center gap-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm tracking-[0.12em] uppercase hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center w-full max-w-xs">
            Request Estimate
          </a>
        </div>
      )}
    </nav>
  )
}
