import BrandMark from './BrandMark'

const serviceLinks = [
  'Custom Built-Ins',
  'Feature Installations',
  'Finish Carpentry',
  'Repair & Upgrades',
  'General Woodworking',
]

const companyLinks = ['About', 'Featured Work', 'Why Choose Us', 'Reviews', 'Contact']

const serviceAreas = ['Niagara Falls, ON', 'St. Catharines, ON', 'Welland, ON', 'Thorold, ON', 'Niagara-on-the-Lake, ON']

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Houzz', href: '#' },
  { label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="px-6 sm:px-10 md:px-16 pt-16 sm:pt-20 pb-10">

        {/* Top grid — stacks on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 pb-12 sm:pb-14 border-b border-white/8">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="block mb-5">
              <BrandMark compact />
            </a>
            <p className="text-sm leading-[1.8] text-white/40 font-light max-w-xs">
              Premium custom woodworking and carpentry with warm finishes, practical design, and detail-driven craftsmanship.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.18em] uppercase text-gold font-medium mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/45 text-sm font-light hover:text-gold-light transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.18em] uppercase text-gold font-medium mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((c) => (
                <li key={c}>
                  <a href={`#${c === 'About' ? 'about' : c === 'Featured Work' ? 'gallery' : c === 'Why Choose Us' ? 'why-us' : c === 'Reviews' ? 'reviews' : 'contact'}`} className="text-white/45 text-sm font-light hover:text-gold-light transition-colors duration-300">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.18em] uppercase text-gold font-medium mb-5">Service Areas</h4>
            <ul className="flex flex-col gap-3">
              {serviceAreas.map((a) => (
                <li key={a}>
                  <span className="text-white/45 text-sm font-light">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-[0.78rem] text-white/30 font-light text-center sm:text-left">
            © {new Date().getFullYear()} Papa Woody Jr Services Inc. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-[0.78rem] tracking-[0.12em] uppercase text-white/35 hover:text-gold transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
