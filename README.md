# Prisma Studio — Design Agency Homepage

A modern, responsive Design Agency homepage built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)

---

## Features

- **Hero Section** — Animated gradient background with floating orbs, agency stats, and dual CTAs
- **Services Section** — 4 service cards with gradient icons and hover lift/glow effects
- **Portfolio Section** — 6-project responsive grid with Next/Image optimization and hover overlays
- **Contact Section** — Validated form with error messages, loading spinner, and success toast
- **Dark Mode** — Toggle with `localStorage` persistence and system preference detection
- **Responsive Design** — Mobile-first with hamburger menu, fluid grids, and adaptive typography
- **SEO Metadata** — Open Graph, Twitter Card, robots, and semantic HTML
- **Smooth Scrolling** — Navbar links scroll to sections; sticky nav with blur effect on scroll
- **Micro-Animations** — Intersection Observer reveal animations, hover transitions, scroll indicator

## Tech Stack

| Technology      | Purpose                          |
|-----------------|----------------------------------|
| Next.js 15      | React framework (App Router)     |
| TypeScript      | Type safety                      |
| Tailwind CSS v4 | Utility-first styling            |
| React Context   | Dark/light theme state           |
| Next/Image      | Optimized image loading          |
| ESLint          | Code quality                     |

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system & animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Homepage composition
├── components/
│   ├── Navbar.tsx         # Sticky nav + dark mode toggle
│   ├── Hero.tsx           # Hero with gradient + stats
│   ├── Services.tsx       # Service cards grid
│   ├── Portfolio.tsx      # Project gallery grid
│   ├── Contact.tsx        # Contact form with validation
│   └── Footer.tsx         # Footer with socials
└── context/
    └── ThemeContext.tsx    # Dark/light mode provider
```

## Assumptions & Notes

- Portfolio images are AI-generated mockups for demonstration
- Contact form submission is simulated (no backend integration)
- Dark mode defaults to system preference if no prior selection
- Designed for modern evergreen browsers

---

Made with ❤️ by Prisma Studio
