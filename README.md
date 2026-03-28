# Dyno Renovations Site

A React + TypeScript + Vite + Tailwind CSS website for Dyno Renovations, based in Kitchener-Waterloo, Ontario. Fully mobile responsive.

## Stack

- **React 18** with TypeScript
- **Vite** for fast dev/build
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                        # Root component
├── main.tsx                       # Entry point
├── index.css                      # Tailwind + global styles
├── assets/
│   └── images.ts                  # ← Central image registry (update here)
└── components/
    ├── Navbar.tsx                 # Sticky nav with scroll effect + mobile hamburger
    ├── Hero.tsx                   # Full-screen hero with background image
    ├── WhyUs.tsx                  # Stats bar + 4-step process
    ├── Services.tsx               # 6-service grid
    ├── Gallery.tsx                # Project photo grid
    ├── Reviews.tsx                # Client testimonials
    ├── CTABanner.tsx              # Mid-page call to action
    ├── Contact.tsx                # Contact form with success state
    ├── Footer.tsx                 # Footer with links
    └── ui/
        └── StickyCallButton.tsx   # Floating phone button (bottom-right)

public/
├── kitchen-hero.webp
├── bathroom.jpg
├── living-room.jpeg
└── kitchen-modern.webp
```

## Adding or Changing Images

All images are managed in one place: **`src/assets/images.ts`**

```ts
// src/assets/images.ts
import kitchenHero from '/kitchen-hero.webp'
import bathroom from '/bathroom.jpg'
// ... add more here

export const images = {
  kitchenHero,
  bathroom,
  // ... export new ones here
}
```

1. Drop the new image into `/public`
2. Add an import + export entry in `src/assets/images.ts`
3. Use it anywhere: `import { images } from '../assets/images'` → `images.yourNewKey`

## Customisation

- **Colors**: Edit `tailwind.config.js` — gold, cream, charcoal, stone
- **Fonts**: Cormorant Garamond (display) + DM Sans (body) via Google Fonts in `index.html`
- **Content**: Each component holds its own copy/data as a local `const` array — easy to find and edit
