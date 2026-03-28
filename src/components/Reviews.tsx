const reviews = [
  {
    name: 'Maria G.',
    location: 'Kitchener, ON',
    text: 'The final piece looked even better in person. The finish, the detail, and the overall craftsmanship gave the whole room more warmth and personality.',
    rating: 5,
  },
  {
    name: 'Andre L.',
    location: 'Cambridge, ON',
    text: 'Professional, easy to work with, and clearly proud of the work. Everything felt custom, solid, and thoughtfully built for our space.',
    rating: 5,
  },
  {
    name: 'Samantha T.',
    location: 'Waterloo, ON',
    text: 'If you want something that feels handcrafted instead of generic, this is the kind of company you call. Beautiful work and great communication throughout.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-28 px-6 sm:px-10 md:px-16 bg-cream">
      <div className="mb-10 sm:mb-16 text-center">
        <div className="section-tag justify-center">Client Feedback</div>
        <h2 className="section-title text-center mx-auto" style={{ maxWidth: 500 }}>
          What clients appreciate <em>most</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-warm-white p-8 sm:p-10 border-t-2 border-gold">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i} className="text-gold text-lg">★</span>
              ))}
            </div>
            <p className="font-display text-base leading-[1.85] text-stone mb-7 italic">
              "{r.text}"
            </p>
            <div>
              <div className="font-medium text-charcoal text-sm">{r.name}</div>
              <div className="text-xs tracking-[0.1em] text-light-stone uppercase mt-1">{r.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
