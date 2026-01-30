test edit

# Christ in You Ministries (CYM) - Website

A professional, modern, and high-performance church website built with **Vue 3**, **Vite**, and **Tailwind CSS v4**. This repository features a component-based architecture designed for high maintainability and a premium user experience.

## ✨ Features

- **Modern UI/UX**: Professional blue-themed design with glassmorphism effects and smooth transitions.
- **Component-Based Architecture**: Refactored for maintainability with dedicated components for each section (Hero, About, Communities, Media, Give, Contact).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.
- **Interactive Give Section**: Integrated local Philippine payment options (GCash & Maya) with high-fidelity QR code support.
- **Google Maps Integration**: Professional grayscale-to-color map integration for the international headquarters.
- **Advanced Performance**: Minimized build assets and optimized for high-speed delivery.
- **Privacy & Compliance**: Built-in modal system for Privacy Policy and Terms of Service.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Routing**: [Vue Router 5](https://router.vuejs.org/)

## 📁 Project Structure

```text
src/
├── components/
│   └── home/          # Modularized sections of the Home page
├── views/
│   └── HomeView.vue   # Main entry point for the landing page
├── assets/            # Global styles and static assets
└── router/            # Navigation logic
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cym-website.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Build

Compile and minify for production:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Linting & Standards

Run TypeScript check and linting:

```bash
npm run type-check
npm run lint
```

---

Built with ❤️ for **Christ in You Ministries**.
