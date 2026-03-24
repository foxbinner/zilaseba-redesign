# Zila Seba - Landing Page Clone

A pixel-perfect recreation of the **Zila Seba** mobile app landing page. Built from scratch with React 19, Vite 8, and Tailwind CSS 4 as a frontend development exercise.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## Screenshot

![Zila Seba Landing Page Screenshot](public/images/screenshots/hero.png)

## About

Zila Seba is a local digital services platform in Bangladesh offering a marketplace, doctor directory, blood donor search, tourism guides, emergency contacts, rentals, and more. This project recreates its landing page as a single-page application with smooth animations and a fully responsive dark-themed UI.

### Features

- Bento grid layout with hover animations
- Count-up statistics on scroll
- Infinite logo marquee
- Floating phone mockup with decorative badges
- Blood emergency banner with pulsing icon
- Fully responsive (mobile-first)
- Bengali typography with Hind Siliguri + Inter fonts
- Smooth scroll navigation with sticky header

## Tech Stack

| Tool         | Version | Purpose                |
| ------------ | ------- | ---------------------- |
| React        | 19      | UI components          |
| Vite         | 8       | Dev server and bundler |
| Tailwind CSS | 4       | Utility-first styling  |

Zero external UI libraries. All animations are pure CSS.

## Project Structure

```
src/
  App.jsx              # Root layout
  index.css            # Tailwind theme, custom animations
  components/
    Header.jsx         # Sticky nav with mobile menu
    Hero.jsx           # Landing section with CTA
    Stats.jsx          # Animated counters
    Platform.jsx       # Bento grid features
    DailyJourney.jsx   # Service cards
    Safety.jsx         # Safety features + merchant CTA
    BloodEmergency.jsx # Emergency blood banner
    AppDownload.jsx    # App download section
    MediaCoverage.jsx  # Logo marquee
    Testimonials.jsx   # User reviews
    ServiceAreas.jsx   # Coverage map
    Contact.jsx        # Contact form
    Footer.jsx         # Footer with links
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/foxbinner/zilaseba.com.git
cd zilaseba.com

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Disclaimer

This is a **clone project** built purely for educational and portfolio purposes. It is **not affiliated with, endorsed by, or connected to** the original Zila Seba app or its owners in any way.

All trademarks, logos, and brand names belong to their respective owners.

- **Original App:** [Zila Seba on Google Play](https://play.google.com/store/apps/details?id=com.global.zilaseba)
- **Original Facebook:** [Zila Seba Facebook Page](https://www.facebook.com/globalzilasebabd)

> If you are the owner of Zila Seba and would like this repository removed, please [open an issue](https://github.com/foxbinner/zilaseba.com/issues) or contact me directly. I will take it down immediately.

## License

This project is licensed under the [MIT License](LICENSE).
