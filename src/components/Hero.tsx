import { ArrowRight } from 'lucide-react'
import { images } from '../assets/images'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bark pt-28 sm:pt-32">
      <div className="absolute inset-0 wood-grain opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,162,108,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,23,18,0.72),transparent_38%)]" />

      <div className="relative z-10 grid min-h-[680px] grid-cols-1 gap-10 px-4 pb-16 sm:px-10 sm:pb-20 md:grid-cols-[1.05fr_0.95fr] md:px-16">
        <div className="flex flex-col justify-center fade-up">
          <div className="section-tag text-sand">Premium Woodworking & Carpentry</div>
          <h1
            className="font-display font-light text-white leading-[0.98] mt-2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.2rem)' }}
          >
            Serving Niagara with custom woodworking, rustic character, and clean craftsmanship for over 20 years.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-white/72 sm:text-base">
            Papa Woody Jr Services Inc. delivers handcrafted builds, finish carpentry, and custom wood features with dependable service and a detail-driven approach.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">Book A Consultation</a>
            <a href="#gallery" className="btn-outline group">
              Explore Featured Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              'Custom builds',
              'Clean finishing',
              'Reliable service',
            ].map((item) => (
              <div key={item} className="rounded-full border border-white/14 bg-white/6 px-4 py-3 text-center text-[0.7rem] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-end md:items-center">
          <div className="relative ml-auto w-full max-w-[640px] fade-up">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm sm:h-28 sm:w-28" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-[1.75rem] border border-cedar/25 bg-cedar/10 backdrop-blur-sm sm:h-36 sm:w-36" />
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#120d0a] shadow-[0_30px_90px_rgba(14,8,4,0.48)]">
              <img
                src={images.heroTexture}
                alt="Woodworking project by Papa Woody Jr Services Inc."
                className="hero-zoom h-[460px] w-full object-cover object-center sm:h-[560px]"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[220px] rounded-[1.5rem] border border-white/12 bg-black/36 p-5 backdrop-blur-md">
              <div className="text-[0.68rem] uppercase tracking-[0.2em] text-sand">Signature Style</div>
              <p className="mt-2 font-display text-2xl leading-tight text-white">
                Warm wood tones, bold contrast, and handcrafted finishing that gives each build real personality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
