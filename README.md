# Vaibhava Realty — Premium Architectural Development Platform

A custom-engineered, high-performance web platform built exclusively for **Vaibhava Realty**, Hyderabad's premier land and luxury estate developers. 

Designed with a bespoke obsidian-dark and satin-gold aesthetic, this platform features fluid scroll interactions, a dynamic property catalog, and direct communication integrations.

---

## Key Core Features

- **Fluid Scroll Animations:** Powered by GSAP ScrollTrigger and Lenis smooth scrolling for a premium, high-end browsing experience.
- **Dynamic Property Directory:** A custom portfolio manager filtering estates by segments (*Residential*, *Commercial*, *Plotting*) and project status (*Completed*, *Ongoing*, *Upcoming*).
- **Private Viewing Scheduler:** An interactive booking widget allowing clients to provisional-book viewing dates and times, integrated with coordinates mapping for the Jubilee Hills, Hyderabad office.
- **Bespoke Lightbox Gallery:** A filterable masonry image grid with full-screen, high-definition zoom and preview modals.
- **Instant Communication Hub:** Floating, high-impact Call and WhatsApp shortcuts for immediate sales inquiries.

---

## Technical Stack & Architecture

- **Core Framework:** React 19 (Functional Components, Hooks)
- **Bundler & Build Tool:** Vite (Ultra-fast Hot Module Replacement)
- **Styling:** Custom Vanilla CSS (fluid variables, glassmorphic filters, responsive media queries)
- **Animation Suite:** GSAP (ScrollTrigger) & Motion (React)
- **Iconography:** Lucide React

---

## Deployment & Setup Instructions

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server Localy
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser to view the application.

### 3. Generate Production Build Bundle
```bash
npm run build
```
This compiles the application assets into highly optimized, minified static files within the `dist` directory, ready to deploy to any premium hosting service (Vercel, Netlify, AWS, etc.).

### 4. Code Quality & Formatting
```bash
npm run lint
```
Runs static analysis checks to maintain clean, production-grade JavaScript formatting.
