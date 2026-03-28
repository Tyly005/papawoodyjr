const publicImage = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`

  return `${base}${path.replace(/^\//, '')}`
}

export const images = {
  logo: publicImage('/papa-woody-logo.png'),
  shopBuildFront: publicImage('/papa-woody-feature-1.jpeg'),
  shopBuildSide: publicImage('/papa-woody-feature-2.jpeg'),

  heroTexture: publicImage('/papa-woody-feature-2.jpeg'),
} as const

export type ImageKey = keyof typeof images
