import type { CSSProperties } from 'react'
import { images } from '../assets/images'

const projects = [
  {
    img: images.shopBuildFront,
    alt: 'Papa Woody Jr custom wood feature front view',
    type: 'Featured Build',
    name: 'Custom accent piece with high-contrast burnt finish',
  },
  {
    img: images.shopBuildSide,
    alt: 'Papa Woody Jr custom wood feature side view',
    type: 'Craftsmanship',
    name: 'Dimensional detailing with rich warm grain',
  },
  {
    img: images.shopBuildFront,
    alt: 'Papa Woody Jr project with custom lettering',
    type: 'Custom Identity Piece',
    name: 'Personalized woodworking built to feel distinctive',
  },
  {
    img: images.shopBuildSide,
    alt: 'Papa Woody Jr bold grain woodworking piece',
    type: 'Finish Work',
    name: 'A premium rustic finish that commands attention',
  },
]

function ProjectCard({
  img, alt, type, name, className = '', style = {},
}: {
  img: string; alt: string; type: string; name: string;
  className?: string; style?: CSSProperties
}) {
  return (
    <div className={`project-card relative overflow-hidden rounded-[1.7rem] cursor-pointer ${className}`} style={style}>
      <img src={img} alt={alt} className="w-full h-full object-cover" />
      <div className="overlay absolute inset-0 bg-gradient-to-t from-bark/90 via-bark/25 to-transparent" />
      <div className="card-info absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <div className="text-[0.65rem] tracking-[0.18em] uppercase text-gold font-medium mb-1">{type}</div>
        <div className="font-display text-lg sm:text-xl font-normal text-white leading-snug">{name}</div>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="pb-16 sm:pb-28 bg-warm-white">
      {/* Header */}
      <div className="px-6 sm:px-10 md:px-16 pb-10 sm:pb-16 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5">
        <div>
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">
            Woodwork with presence,<br />
            <em>texture, and character</em>
          </h2>
        </div>
        <a href="#contact" className="btn-primary self-start sm:self-end">
          Start Your Project
        </a>
      </div>

      {/* Mobile: stacked cards */}
      <div className="px-4 sm:px-10 md:px-16 flex flex-col gap-3 md:hidden">
        {projects.map((p) => (
          <ProjectCard key={p.alt} {...p} style={{ height: 'min(70vw, 320px)' }} />
        ))}
      </div>

      {/* Desktop: asymmetric grid */}
      <div className="px-10 md:px-16 hidden md:grid grid-cols-3 gap-1">
        {/* Large card — spans 2 rows */}
        <ProjectCard
          {...projects[0]}
          className="row-span-2"
          style={{ minHeight: '620px' }}
        />
        {/* Top-right two */}
        <ProjectCard {...projects[1]} style={{ height: '308px' }} />
        <ProjectCard {...projects[2]} style={{ height: '308px' }} />
        {/* Wide bottom */}
        <ProjectCard
          {...projects[3]}
          className="col-span-2"
          style={{ height: '308px' }}
        />
      </div>
    </section>
  )
}
