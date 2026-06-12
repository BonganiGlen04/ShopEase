# ShopEase

A modern React + Vite storefront landing page built with Tailwind CSS. ShopEase features a hero section, trending top products, reusable feature blocks, and a branded footer.

## Features

- Responsive hero section with CTA buttons
- Top products carousel loaded from a remote API
- Reusable feature section layout for promotions and benefits
- Simple navbar with cart, help, login, and signup controls
- Clean footer with company links and app store badges

## Tech Stack

- React 19
- Vite 5
- Tailwind CSS 4
- ESLint

## Project Structure

- `src/App.jsx` — app layout and page composition
- `src/components/Navbar.jsx` — top navigation bar
- `src/components/HeroSection.jsx` — hero content and imagery
- `src/components/TopProducts.jsx` — fetches and renders products
- `src/components/FeatureSection.jsx` — reusable feature cards
- `src/components/Footer.jsx` — footer links and branding
- `src/utils/app.constants.js` — external API and asset constants
- `src/assets/` — image assets used in the UI

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`)

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- The top products section fetches data from `https://dummyjson.com/products`.
- UI styling is done with Tailwind CSS utility classes in JSX.
- Customize the storefront content and images to fit your brand.
