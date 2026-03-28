const stats = [
  { num: 'Custom', label: 'Built To Your Space' },
  { num: 'Detail', label: 'Driven Finishing' },
  { num: 'Direct', label: 'Communication' },
  { num: 'Reliable', label: 'Project Follow-Through' },
]

const reasons = [
  {
    num: '01',
    title: 'Craftsmanship First',
    desc: 'We care about edges, proportions, stain quality, hardware fit, and all the subtle details that make custom work feel premium.',
  },
  {
    num: '02',
    title: 'Designed For Real Use',
    desc: 'Every piece is built to suit how you live, store, display, and use the finished work in your day-to-day space.',
  },
  {
    num: '03',
    title: 'Warm, Honest Service',
    desc: 'You get a local team that values responsiveness, realistic expectations, and a straightforward process from inquiry to delivery.',
  },
  {
    num: '04',
    title: 'Distinctive Results',
    desc: 'The goal is not generic work. It is memorable craftsmanship with texture, warmth, and a finish clients are proud to show off.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us">
      <div className="bg-bark grid grid-cols-2 md:grid-cols-4 border-t border-cedar/30">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-8 sm:py-10 px-6 sm:px-8 text-center ${
              i % 2 === 0 ? 'border-r border-white/7' : ''
            } ${i < 2 ? 'border-b border-white/7 md:border-b-0' : ''} md:border-r md:last:border-r-0`}
          >
            <div className="font-display text-4xl sm:text-5xl font-light text-sand leading-none mb-2">{s.num}</div>
            <div className="text-[0.68rem] sm:text-[0.72rem] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-white/65 font-normal">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-bark px-6 sm:px-10 md:px-16 pb-20 sm:pb-28">
        <div className="pt-16 sm:pt-20 mb-12 sm:mb-16">
          <div className="section-tag text-sand">Why Choose Us</div>
          <h2 className="section-title text-white">
            Work with a team that values<br />
            <em>quality over shortcuts</em>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:hidden">
          {reasons.map((s) => (
            <div key={s.num} className="border-t border-white/10 pt-8">
              <div className="font-display text-5xl font-light text-sand/25 leading-none mb-4">{s.num}</div>
              <h3 className="font-display text-xl text-white font-normal mb-2">{s.title}</h3>
              <p className="text-sm leading-[1.75] text-white/58 font-light">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-4 border-t border-white/10">
          {reasons.map((s, i) => (
            <div
              key={s.num}
              className={`pt-12 pb-12 px-8 ${i === 0 ? 'pl-0' : ''} ${i < reasons.length - 1 ? 'border-r border-white/7' : ''}`}
            >
              <div className="font-display text-6xl font-light text-sand/25 leading-none mb-5">{s.num}</div>
              <h3 className="font-display text-2xl text-white font-normal mb-3">{s.title}</h3>
              <p className="text-sm leading-[1.75] text-white/58 font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
