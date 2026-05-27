# Visual Strategy & Component Architecture: NEXSPHERE GLOBAL ADVISORS LLP

This document outlines the visual direction and technical architecture for the NEXSPHERE website, combining the premium corporate requirements with the specific visual blueprints provided.

## 1. Global Visual Identity

### Color Palette
*   **Primary (Brand):** Navy & Royal Blue (`bg-slate-900`, `text-blue-600`, `bg-blue-700`).
*   **Accent:** Gold (`text-amber-500`, `bg-amber-500`, `border-amber-400`). *Replacing Xenon's green accents.*
*   **Neutral:** White (`text-white`, `bg-white`) and Light Gray (`bg-slate-50`, `text-slate-500`).
*   **Dark Mode (Optional):** Slate/Zinc base (`bg-slate-950`).

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
    *   Background: `bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900`.
    *   Text: `text-white`.
    *   CTA: Gold primary button (`bg-amber-500 hover:bg-amber-600 text-slate-900`).

### C. Services "Bento Box" (Core Feature)
*   **Blueprint:** Xenon Bank (Card-based grid).
*   **Logic:** Distinct blocks for **US Services** and **Indian Services**.
*   **Components:** `ServiceGrid.tsx`, `ServiceCard.tsx`, `Badge.tsx`.
*   **Layout:** 
    *   US Services: 4-column bento grid (`grid-cols-1 md:grid-cols-4`).
    *   Indian Services: 4-column bento grid with nested categories.
*   **Tailwind:** `rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-amber-200`. Use Gold icons (`text-amber-500`) for service indicators.

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
*   **Icons:** `lucide-react` (Gold colored) for professional, thin-stroke clarity.

### Responsive Strategy
*   **Mobile-First:** Single column for all bento cards, stacking vertically.
*   **Tablet (md):** 2-column grid.
*   **Desktop (lg):** Full bento layout with complex spans (`col-span-2`).
