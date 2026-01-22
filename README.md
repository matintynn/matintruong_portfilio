# Matin Truong - Portfolio Website

A modern portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with a max-width of 1440px
- **Custom Design System**: Clean, minimal design with custom neutral color scale
- **Manrope Font**: Beautiful typography with Google Fonts
- **Remixicon Icons**: Comprehensive icon library
- **Pages**:
  - Works (Homepage) - Showcase your case studies and projects
  - Lab - Experiments and side projects
  - Services - What you offer
  - About - Your story and background

## Design System

- **Max Width**: 1440px with 20px padding on left and right
- **Background**: #FFFFFF
- **Text Color**: #0A0A0A
- **Border**: 1px solid #0A0A0A
- **Font**: Manrope (headers and body text)
- **Icons**: Remixicon

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
matin_portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── lab/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (Works - Homepage)
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## Future Enhancements

- **Sanity CMS Integration**: Content management for case studies, lab projects, and other dynamic content
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Smooth page transitions and micro-interactions
- **Contact Form**: Functional contact form with email integration
- **Blog**: Share insights and tutorials

## Deployment

### Hostinger (Current Plan)
The site can be deployed on Hostinger until November when the current hosting plan expires.

### Vercel (Recommended)
For the best Next.js deployment experience, consider migrating to Vercel:

```bash
npm install -g vercel
vercel
```

## Technologies Used

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: [Manrope (Google Fonts)](https://fonts.google.com/specimen/Manrope)
- **Icons**: [Remixicon](https://remixicon.com/)

## License

© 2026 Matin Truong. All rights reserved.
