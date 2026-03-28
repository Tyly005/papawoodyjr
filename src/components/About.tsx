import { images } from '../assets/images'

const pillars = [
  {
    title: 'Built Around Real Needs',
    text: 'Every project starts with how the piece will live in your space, from storage and durability to finish and feel.',
  },
  {
    title: 'Crafted With Intention',
    text: 'We focus on clean joinery, solid materials, and balanced proportions that make custom woodwork feel timeless.',
  },
  {
    title: 'Handled With Care',
    text: 'From first sketch to final install, you get direct communication, honest timelines, and pride in every detail.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-warm-white py-16 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream to-transparent" />
      <div className="relative grid grid-cols-1 gap-12 px-6 sm:px-10 md:grid-cols-[1.05fr_0.95fr] md:px-16 md:gap-16">
        <div>
          <div className="section-tag">About The Shop</div>
          <h2 className="section-title max-w-2xl">
            Custom woodwork with a warm finish, practical purpose, and a craftsman’s eye.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-stone sm:text-base">
            Papa Woody Jr Services Inc. creates custom pieces and carpentry details that feel personal,
            durable, and made to last. Whether it is a feature build, a utility piece, or a one-of-a-kind
            statement project, the goal is simple: deliver work that looks beautiful and performs well every day.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[1.75rem] border border-light-stone/60 bg-cream px-5 py-6">
                <h3 className="font-display text-xl text-charcoal">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-stone">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] md:grid-cols-1">
          <div className="overflow-hidden rounded-[2rem] bg-charcoal shadow-[0_20px_60px_rgba(39,28,19,0.18)]">
            <img
              src={images.shopBuildFront}
              alt="Custom woodworking project by Papa Woody Jr Services Inc."
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-[2rem] border border-light-stone/60 bg-white p-7 sm:p-8">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-cedar">Our Promise</div>
            <p className="mt-4 font-display text-2xl leading-tight text-charcoal sm:text-[2rem]">
              High-character work, thoughtful craftsmanship, and service that feels dependable from start to finish.
            </p>
            <p className="mt-4 text-sm leading-[1.8] text-stone">
              We build with a hands-on mindset and a respect for materials, because custom woodwork should look just
              as strong up close as it does in the final reveal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
