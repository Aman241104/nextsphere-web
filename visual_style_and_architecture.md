# Visual Strategy & Component Architecture: NEXSPHERE GLOBAL ADVISORS LLP

This document outlines the visual direction and technical architecture for the NEXSPHERE website, combining the premium corporate requirements with the specific visual blueprints provided.

## 1. Global Visual Identity

### Color Palette
Sampled from `public/logo.png`; defined as theme tokens in `src/app/globals.css`.
*   **Navy (primary):** `navy` #1A3E58 — headings, primary buttons. Darker shades `navy-deep` #0F2638 / `navy-ink` #0A1A28 for dark sections and footer.
*   **Teal (accent):** `teal` #1D9898 — icons, highlights, large accents. `teal-dark` #147A7A for small text, links and teal buttons on white (AA contrast). `teal-light` #5CC6C6 for small accent text on dark backgrounds. `teal-50` #E8F5F5 for tints.
*   **Neutral:** White (hero, navbar, page background) and `light-gray` #F5F8FA.

### Typography (Tailwind `font-family`)
*   **Headings:** `font-sans` (Inter/Montserrat) - Bold, professional, high-contrast.
*   **Body:** `font-sans` (Inter/Poppins) - Clean, readable at small sizes.

---

## 2. Component Architecture (Section by Section)

### A. Navigation & Brand (Sticky Header)
*   **Blueprint:** Modern, transparent-to-solid transition on scroll.
*   **Components:** `Navbar.tsx`, `Logo.tsx`, `MobileMenu.tsx`.
*   **Tailwind:** `backdrop-blur-md bg-white/80 sticky top-0 z-50 border-b border-slate-100`.
*   **Features:** Multi-level dropdown for "Services" to split US vs. India categories.

### B. Hero Section: "Global Excellence"
*   **Blueprint:** NeoPay (The Blue Layout).
*   **Visual Strategy:** Replace SaaS mockups with professional team photography or high-end financial illustrations.
*   **Components:** `Hero.tsx`, `Button.tsx`.
*   **Tailwind:** 
    *   Background: white (`from-white to-light-gray`), light globe with navy land dots and teal arcs.
    *   Text: `text-navy`.
    *   CTA: Navy primary button (`bg-navy hover:bg-teal-dark text-white`).

### C. Services "Bento Box" (Core Feature)
*   **Blueprint:** Xenon Bank (Card-based grid).
*   **Logic:** Distinct blocks for **US Services** and **Indian Services**.
*   **Components:** `ServiceGrid.tsx`, `ServiceCard.tsx`, `Badge.tsx`.
*   **Layout:** 
    *   US Services: 4-column bento grid (`grid-cols-1 md:grid-cols-4`).
    *   Indian Services: 4-column bento grid with nested categories.
*   **Tailwind:** `rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-teal/30`. Use teal icons (`text-teal`) for service indicators.

### D. About & Trust Signals
*   **Blueprint:** How to Design a High Conversion Landing Page (Structure).
*   **Components:** `AboutPreview.tsx`, `StatsCounter.tsx`, `TrustLogos.tsx`.
*   **Tailwind:** 
    *   Stats: `grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-100`.
    *   About: Flex layout with text on left and professional image/illustration on right.

### E. Authority Building (Blog & Resources)
*   **Components:** `BlogPreview.tsx`, `PostCard.tsx`.
*   **Tailwind:** Horizontal scroll on mobile, 3-column grid on desktop. `aspect-video rounded-xl overflow-hidden`.

### F. Call to Action (CTA) & Footer
*   **Blueprint:** NeoPay Footer (Clean, navy-based).
*   **Components:** `CTASection.tsx`, `Footer.tsx`.
*   **Tailwind:** 
    *   CTA Box: `bg-blue-700 rounded-3xl p-12 text-center text-white my-20`.
    *   Footer: `bg-slate-900 text-slate-300 pt-20 pb-10`.

---

## 3. Technical Implementation Details (Next.js + Tailwind)

### Key Hooks & Logic
*   **Animations:** `framer-motion` for Xenon-style card entry and smooth UI transitions.
*   **Forms:** `react-hook-form` + Zod for consultation requests.
*   **State:** Standard React `useState` for mobile navigation and service tab switching.
*   **Icons:** `lucide-react` (teal colored) for professional, thin-stroke clarity.

### Responsive Strategy
*   **Mobile-First:** Single column for all bento cards, stacking vertically.
*   **Tablet (md):** 2-column grid.
*   **Desktop (lg):** Full bento layout with complex spans (`col-span-2`).
