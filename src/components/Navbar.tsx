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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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
        <div
          className="fixed inset-0 z-[60] bg-bark/88 backdrop-blur-md md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="flex min-h-screen flex-col px-6 pt-24 pb-8">
            <div
              className="mx-auto flex w-full max-w-sm flex-1 flex-col rounded-[2rem] border border-white/12 bg-[rgba(34,24,19,0.94)] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <BrandMark compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-7">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white text-lg tracking-[0.16em] uppercase hover:text-sand transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center w-full mt-8">
                Request Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
