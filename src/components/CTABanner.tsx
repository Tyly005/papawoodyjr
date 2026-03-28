import { images } from '../assets/images'

export default function CTABanner() {
  return (
    <section
      className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-16 flex items-center overflow-hidden"
    >
      <img
        src={images.shopBuildSide}
        alt="Papa Woody Jr Services woodworking feature build"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,21,17,0.92),rgba(30,21,17,0.58),rgba(30,21,17,0.7))]" />

      <div className="relative z-10 max-w-2xl w-full">
        <div className="section-tag text-sand">Ready To Build?</div>
        <h2
          className="font-display font-light text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
        >
          Let’s create something custom<br />
          <em className="italic text-sand">for your space</em>
        </h2>
        <p className="text-white/65 text-sm sm:text-base leading-[1.75] max-w-md mb-8 font-light">
          Share your idea, your style, and how the finished piece needs to function. We’ll help shape the right build from there.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">Request A Quote</a>
          <a href="tel:+12896874147" className="btn-outline">
            📞 (289) 687-4147
          </a>
        </div>
      </div>
    </section>
  )
}
