# Student Portfolio

A modern, interactive portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, responsive design, and showcases projects and skills dynamically.

## 🚀 Features

- **Interactive Animations**: Smooth scroll-based animations using Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Project Showcase**: Display of projects with detailed information
- **Skills Section**: Highlight technical skills and expertise
- **Social Links**: Easy access to social media profiles
- **Dark Theme**: Modern dark interface for better visual appeal
- **TypeScript**: Fully typed codebase for better development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **UI Library**: [React 18](https://react.dev/) - JavaScript library for building user interfaces
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- **Animation**: [Framer Motion 12](https://www.framer.com/motion/) - Production-ready motion library
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Typed superset of JavaScript
- **Utilities**: Clsx, Tailwind Merge for conditional styling

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jeevu22/Student-Portfolio.git
cd Student-Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files thanks to Next.js hot reloading.

### Build

Build the application for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm run start
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── ScrollyCanvas.tsx   # Scroll animation canvas
│       ├── Overlay.tsx         # Overlay component
│       ├── Projects.tsx        # Projects section
│       ├── Skills.tsx          # Skills section
│       ├── Socials.tsx         # Social links
│       └── Footer.tsx          # Footer component
├── public/
│   ├── resume.html             # Resume file
│   └── sequence/               # Animation sequences
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies

```

## 🎨 Customization

### Colors and Styling

- Edit [tailwind.config.ts](tailwind.config.ts) to customize colors and design tokens
- Modify [src/app/globals.css](src/app/globals.css) for global styles

### Content

- Update [src/app/page.tsx](src/app/page.tsx) to change the main layout
- Edit component files in `src/components/` to customize sections

### Resume

- Place your resume.html file in `public/` folder
- Update resume link in the components as needed

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**jeevu22**
- GitHub: [@jeevu22](https://github.com/jeevu22)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Documentation](https://react.dev/)

---

**Happy coding!** ✨
