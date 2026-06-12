# ShopEase

Hosted at: https://shopease-81232.web.app

A lightweight React + Vite storefront landing page with reusable components and optional Firebase Hosting deployment.

## Overview

- Landing page demo showcasing a hero, featured products, promotional features, and a branded footer.
- Focused on composable React components and fast startup with Vite.

## Features

- Responsive hero section with CTA buttons
- Top products listing (demo data / external API)
- Reusable feature section for promotions and benefits
- Simple navbar with cart/help/login controls
- Clean footer with company links and app store badges

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint
- Firebase Hosting (optional)

## Project Structure

- `src/App.jsx` — app layout and page composition
- `src/components/Navbar.jsx` — top navigation bar
- `src/components/HeroSection.jsx` — hero content and imagery
- `src/components/TopProducts.jsx` — fetches and renders products
- `src/components/FeatureSection.jsx` — reusable feature cards
- `src/components/Footer.jsx` — footer links and branding
- `src/utils/app.constants.js` — external API and asset constants
- `src/assets/` — image assets used in the UI

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`)

## Build & Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Firebase Hosting (optional)

If you want to deploy this site to Firebase Hosting:

1. Install Firebase CLI (if not installed):

```bash
npm install -g firebase-tools
```

2. Authenticate and initialize hosting (one-time):

```bash
firebase login
firebase init hosting
# when prompted, select the project and set the public directory to `dist` (Vite's output)
```

3. Build and deploy:

```bash
npm run build
firebase deploy --only hosting
```

## Configuration

- API base URL and other runtime values can be placed in Vite env vars (e.g. `VITE_API_BASE_URL`) or edited in `src/utils/app.constants.js`.

## Contributing

- Feel free to open issues or pull requests to improve the demo and components.

## License

- MIT — adapt and reuse for your projects.
