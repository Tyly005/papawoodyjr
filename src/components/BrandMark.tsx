import { images } from '../assets/images'

type BrandMarkProps = {
  compact?: boolean
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className={compact ? 'h-14 w-14 rounded-full bg-white/92 p-1 shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:h-16 sm:w-16 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0' : 'h-24 w-24 sm:h-28 sm:w-28'}>
      <img
        src={images.logo}
        alt="Papa Woody Jr Services Inc. logo"
        className="h-full w-full object-contain"
      />
    </div>
  )
}
