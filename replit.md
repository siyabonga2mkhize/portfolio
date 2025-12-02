# Siyabonga Mkhize Portfolio

## Overview
A modern, responsive portfolio website for Siyabonga Mkhize, an ICT Applications Development student showcasing his certifications, skills, and experience.

## Tech Stack
- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM

## Project Structure
```
src/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── AboutSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Logo.tsx
│   │   ├── Navigation.tsx
│   │   ├── projectData.ts   # Data for certifications and projects
│   │   ├── SkillsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ThemeToggle.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── Portfolio.tsx       # Main portfolio page
│   └── ProjectDemo.tsx     # Project detail page
├── lib/
│   └── utils.ts            # Utility functions (cn for classNames)
├── App.tsx                 # App entry with routing
├── main.tsx               # React entry point
└── index.css              # Global styles with Tailwind
```

## Features
- Dark/Light theme toggle
- Smooth scroll navigation
- Animated sections with Framer Motion
- Responsive design for all screen sizes
- Certifications showcase with filtering
- Skills progress bars
- Testimonials section
- Contact form
- Social media links

## Running the App
The app runs on port 5000 with `npm run dev`.

## Recent Changes
- December 2, 2025: Initial setup of the portfolio website with Vite, React, TypeScript, and Tailwind CSS
