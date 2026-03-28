import { images } from '../assets/images'

type BrandMarkProps = {
  compact?: boolean
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className={compact ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-24 w-24 sm:h-28 sm:w-28'}>
      <img
        src={images.logo}
        alt="Papa Woody Jr Services Inc. logo"
        className="h-full w-full object-contain"
      />
    </div>
  )
}
