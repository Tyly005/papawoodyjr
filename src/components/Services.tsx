const services = [
  {
    num: '01',
    name: 'Custom Built-Ins',
    desc: 'Feature walls, shelving, media units, and storage solutions tailored to fit your room and your style.',
  },
  {
    num: '02',
    name: 'Furniture-Style Pieces',
    desc: 'Statement pieces, utility builds, and handcrafted wood projects made to feel intentional and one of a kind.',
  },
  {
    num: '03',
    name: 'Trim & Finish Carpentry',
    desc: 'Crisp finishing details, decorative accents, and interior woodwork that elevate the feel of the whole space.',
  },
  {
    num: '04',
    name: 'Feature Installations',
    desc: 'Custom bars, display builds, counters, and focal-point pieces that make a room feel distinctive.',
  },
  {
    num: '05',
    name: 'Repairs & Upgrades',
    desc: 'Refresh worn wood details, improve function, and bring existing pieces back with cleaner lines and stronger finishing.',
  },
  {
    num: '06',
    name: 'Custom Project Builds',
    desc: 'Have something unique in mind? We can help shape, build, and finish specialty wood projects with a custom approach.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-28 px-6 sm:px-10 md:px-16 bg-warm-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-16 gap-5">
        <div>
          <div className="section-tag">Services</div>
          <h2 className="section-title">
            Woodworking services<br />
            <em>made to stand out</em>
          </h2>
        </div>
        <p className="text-sm leading-[1.75] text-stone max-w-xs md:max-w-sm md:text-right">
          From utility-focused builds to statement pieces, every project is shaped around quality materials, smart function, and a polished finish.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-light-stone">
        {services.map((s) => (
          <div
            key={s.num}
            className="service-card relative bg-warm-white hover:bg-cream px-8 sm:px-10 py-10 sm:py-12 transition-colors duration-300 cursor-pointer overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem]"
          >
            <div className="font-display text-base text-cedar mb-5 font-normal">{s.num}</div>
            <h3 className="font-display text-xl sm:text-2xl font-normal text-charcoal mb-3 leading-snug">{s.name}</h3>
            <p className="text-sm leading-[1.75] text-stone font-light">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
