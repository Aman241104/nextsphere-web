'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { MeshPhongMaterial, CanvasTexture, SRGBColorSpace } from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Lock, BarChart3 } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { GlobeMethods } from 'react-globe.gl';
import { whatsappLink } from '@/lib/contact';

const GlobeGL = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

/* ── Badge data ──────────────────────────────────────────────── */
const TRUST_BADGES = [
  { Icon: Shield,    label: 'US Compliant',        sub: 'GAAP | IRS | State Laws' },
  { Icon: Users,     label: 'Expert Professionals', sub: 'US Based Accountants' },
  { Icon: Lock,      label: 'Data Security',        sub: 'ISO 27001 Certified' },
  { Icon: BarChart3, label: 'Scalable Solutions',   sub: 'For Startups to Enterprises' },
];

/* ── Major financial hubs (large dots + rings) ───────────────── */
const HUBS = [
  { lat: 40.71, lng: -74.01, label: 'New York',      major: true },
  { lat: 51.51, lng:  -0.13, label: 'London',        major: true },
  { lat: 35.68, lng: 139.65, label: 'Tokyo',         major: true },
  { lat: 25.20, lng:  55.27, label: 'Dubai',         major: true },
  { lat:  1.35, lng: 103.82, label: 'Singapore',     major: true },
  { lat: 22.32, lng: 114.17, label: 'Hong Kong',     major: true },
  { lat: 37.77, lng:-122.42, label: 'San Francisco', major: true },
  { lat: 48.86, lng:   2.35, label: 'Paris',         major: true },
  { lat: 19.08, lng:  72.88, label: 'Mumbai',        major: true },
  { lat:-33.87, lng: 151.21, label: 'Sydney',        major: true },
];

/* ── Secondary city nodes ────────────────────────────────────── */
const CITIES = [
  { lat: 43.65, lng: -79.38, label: 'Toronto' },
  { lat: 34.05, lng:-118.24, label: 'Los Angeles' },
  { lat: 41.88, lng: -87.63, label: 'Chicago' },
  { lat: 25.77, lng: -80.19, label: 'Miami' },
  { lat:-23.55, lng: -46.63, label: 'São Paulo' },
  { lat:-34.60, lng: -58.38, label: 'Buenos Aires' },
  { lat: 52.52, lng:  13.41, label: 'Berlin' },
  { lat: 40.42, lng:  -3.70, label: 'Madrid' },
  { lat: 47.38, lng:   8.54, label: 'Zurich' },
  { lat: 55.76, lng:  37.62, label: 'Moscow' },
  { lat: 41.00, lng:  28.98, label: 'Istanbul' },
  { lat: 39.90, lng: 116.41, label: 'Beijing' },
  { lat: 31.23, lng: 121.47, label: 'Shanghai' },
  { lat: 37.57, lng: 126.98, label: 'Seoul' },
  { lat: 28.61, lng:  77.21, label: 'New Delhi' },
  { lat: 13.75, lng: 100.52, label: 'Bangkok' },
  { lat:  3.14, lng: 101.69, label: 'Kuala Lumpur' },
  { lat: 24.69, lng:  46.72, label: 'Riyadh' },
  { lat: 30.04, lng:  31.24, label: 'Cairo' },
  { lat:-26.20, lng:  28.05, label: 'Johannesburg' },
  { lat:  6.52, lng:   3.38, label: 'Lagos' },
  { lat: 59.33, lng:  18.07, label: 'Stockholm' },
  { lat: 50.85, lng:   4.35, label: 'Brussels' },
  { lat:-37.81, lng: 144.96, label: 'Melbourne' },
];

const ALL_CITY_DOTS: CityDot[] = [...HUBS, ...CITIES];
type CityDot = { lat: number; lng: number; label: string; major?: boolean };

/* ── Arcs: India delivery hubs → client markets ─────────────── */
const MUMBAI = { lat: 19.08, lng: 72.88 };
const DELHI  = { lat: 28.61, lng: 77.21 };
const arc = (s: { lat: number; lng: number }, eLat: number, eLng: number) =>
  ({ sLat: s.lat, sLng: s.lng, eLat, eLng });
const ARCS = [
  arc(MUMBAI, 40.71, -74.01),   // New York
  arc(MUMBAI, 37.77, -122.42),  // San Francisco
  arc(DELHI,  41.88, -87.63),   // Chicago
  arc(DELHI,  43.65, -79.38),   // Toronto
  arc(MUMBAI, 34.05, -118.24),  // Los Angeles
  arc(DELHI,  51.51, -0.13),    // London
  arc(MUMBAI, 25.20, 55.27),    // Dubai
  arc(MUMBAI, 1.35, 103.82),    // Singapore
  arc(DELHI,  22.32, 114.17),   // Hong Kong
  arc(MUMBAI, -33.87, 151.21),  // Sydney
  arc(DELHI,  48.86, 2.35),     // Paris
  arc(MUMBAI, -26.20, 28.05),   // Johannesburg
];

/* Rings pulse on the India hubs and the main client markets only */
const RING_HUBS = HUBS.filter(h => ['Mumbai', 'New York', 'London', 'Dubai', 'Singapore', 'San Francisco'].includes(h.label));

/* ── Land dots from the self-hosted 540×270 mask (dark = land) ─ */
type LatLng = { lat: number; lng: number };
const loadLandDots = () =>
  new Promise<LatLng[]>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const W = 540, H = 270;
      const c = document.createElement('canvas');
      c.width = W; c.height = H;
      const ctx = c.getContext('2d')!;
      ctx.drawImage(img, 0, 0, W, H);
      const px = ctx.getImageData(0, 0, W, H).data;
      const dots: LatLng[] = [];
      // step=2 → one dot per ~0.67°
      for (let y = 0; y < H; y += 2) {
        for (let x = 0; x < W; x += 2) {
          if (px[(y * W + x) * 4] < 100) dots.push({ lat: 90 - (y / H) * 180, lng: (x / W) * 360 - 180 });
        }
      }
      resolve(dots);
    };
    img.onerror = () => resolve([]);
    img.src = '/globe/earth-water.png';
  });

/* Round navy dot sprite (default particles are squares) */
const makeDotTexture = () => {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#1a3e58';
  ctx.beginPath(); ctx.arc(16, 16, 14, 0, Math.PI * 2); ctx.fill();
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace; // otherwise navy renders washed-out grey
  return tex;
};

/* ── Globe visual component ──────────────────────────────────── */
const GlobeVisual = () => {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(570);
  const [ready, setReady] = useState(false);
  /* Soft light teal-grey sphere so navy land dots read on the white hero */
  const globeMaterial = useMemo(
    () => new MeshPhongMaterial({ color: 0xeaf4f5, emissive: 0xffffff, emissiveIntensity: 0.22, shininess: 8 }),
    []
  );

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setSize(vw >= 1280 ? 570 : 450); // fits the 46% right column at lg / xl+
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* Guaranteed fallback: show globe after 2.5s even if onGlobeReady never fires */
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(t);
  }, []);

  /* Stop rendering while the hero is off-screen (saves CPU/battery further down the page) */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      const g = globeRef.current;
      if (!g) return;
      if (entry.isIntersecting) g.resumeAnimation(); else g.pauseAnimation();
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Land dots are a declarative particles layer, so they render whenever the globe does —
     no dependency on the ref or onGlobeReady timing. */
  const [land, setLand] = useState<{ dots: LatLng[] }[]>([]);
  const [dotTexture, setDotTexture] = useState<CanvasTexture>();
  useEffect(() => {
    loadLandDots().then(dots => {
      setDotTexture(makeDotTexture());
      setLand([{ dots }]);
    });
  }, []);

  /* Camera + auto-rotate need the ref, which next/dynamic can attach late.
     Poll until it exists (onGlobeReady alone proved unreliable in real browsers). */
  const cameraDone = useRef(false);
  const setupCamera = () => {
    const g = globeRef.current;
    if (!g || cameraDone.current) return !!g;
    cameraDone.current = true;
    const ctrl = g.controls();
    ctrl.autoRotate      = !reducedMotion;
    ctrl.autoRotateSpeed = 0.4;
    ctrl.enableZoom      = false;
    ctrl.enablePan       = false;
    /* Start over India so the outbound arcs are the first thing visitors see */
    g.pointOfView({ lat: 22, lng: 50, altitude: 2.1 }, 0);
    setReady(true);
    return true;
  };
  useEffect(() => {
    const id = setInterval(() => { if (setupCamera()) clearInterval(id); }, 100);
    const stop = setTimeout(() => clearInterval(id), 15000);
    return () => { clearInterval(id); clearTimeout(stop); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /* Outer container: exactly globe size — glow divs bleed out with negative inset */
    <div ref={wrapRef} className="relative" style={{ width: size, height: size, flexShrink: 0, overflow: 'visible' }}>

      {/* CSS atmosphere glow — bleeds 100px outside the box on all sides */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ inset: -60, background: 'radial-gradient(circle, rgba(29,152,152,0.18) 0%, rgba(29,152,152,0.06) 45%, transparent 68%)', filter: 'blur(48px)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ inset: -30, background: 'radial-gradient(circle at 40% 38%, rgba(26,62,88,0.10) 0%, transparent 60%)', filter: 'blur(30px)' }} />

      {/* Globe canvas */}
      <motion.div
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'absolute', top: 0, left: 0, width: size, height: size }}
      >
        <GlobeGL
          ref={globeRef}
          onGlobeReady={setupCamera}
          width={size}
          height={size}
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={globeMaterial}
          atmosphereColor="#1d9898"
          atmosphereAltitude={0.16}

          /* Dotted continents */
          particlesData={land}
          particlesList="dots"
          particleLat="lat"
          particleLng="lng"
          particleAltitude={0.008}
          particlesSize={2.2}
          particlesColor={() => '#1a3e58'}
          particlesTexture={dotTexture}

          /* City + hub dots */
          pointsData={ALL_CITY_DOTS}
          pointLat="lat"
          pointLng="lng"
          pointColor={(p: object) => (p as CityDot).major ? '#1d9898' : '#5cc6c6'}
          pointAltitude={0.003}
          pointRadius={(p: object) => (p as CityDot).major ? 0.55 : 0.32}
          pointLabel="label"

          /* Animated arcs */
          arcsData={ARCS}
          arcStartLat="sLat"
          arcStartLng="sLng"
          arcEndLat="eLat"
          arcEndLng="eLng"
          arcColor={() => ['rgba(29,152,152,0.95)', 'rgba(26,62,88,0.85)']}
          arcAltitudeAutoScale={0.28}
          arcStroke={0.55}
          arcDashLength={0.5}
          arcDashGap={0.25}
          arcDashInitialGap={() => Math.random()}
          arcDashAnimateTime={reducedMotion ? 0 : 3000}

          /* Pulsing rings on major hubs */
          ringsData={reducedMotion ? [] : RING_HUBS}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => '#1d9898'}
          ringMaxRadius={3}
          ringPropagationSpeed={1.8}
          ringRepeatPeriod={1400}
          ringAltitude={0.004}
        />
      </motion.div>
    </div>
  );
};

/* ── Hero section ────────────────────────────────────────────── */
export const Hero = () => (
  <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-light-gray overflow-hidden pt-20">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[5%] right-[8%] w-[55%] h-[75%] bg-teal/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-[5%] w-[32%] h-[40%] bg-navy/5 rounded-full blur-[160px] animate-pulse-slow [animation-delay:2s]" />
    </div>

    <div className="relative z-10 flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center">

          {/* ── Left ─────────────────────────────────────────── */}
          <div className="flex-shrink-0 lg:w-[54%] text-left py-8 relative z-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-teal-dark text-xs font-black uppercase tracking-[0.3em] mb-7"
            >
              Precision. Compliance. Growth.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-[2.75rem] md:text-[3.4rem] lg:text-[3rem] xl:text-[3.6rem] font-heading font-black text-navy leading-[1.08] mb-6 tracking-tight"
            >
              Your Trusted Partner<br />
              for US Accounting,<br />
              Tax &amp; Advisory Services
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="w-14 h-[3px] bg-teal mb-8 origin-left rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed"
            >
              We help businesses across the globe streamline their finance, ensure compliance, and drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-navy hover:bg-teal-dark text-white font-bold px-9 h-14 group text-base rounded-lg shadow-[0_12px_32px_-6px_rgba(26,62,88,0.45)] transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink("Hi, I'd like to know more about your accounting services")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-slate-300 text-navy hover:bg-white hover:border-teal font-semibold px-8 h-14 text-base rounded-lg bg-white/60 transition-colors"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.851L.054 23.5a.5.5 0 0 0 .609.61l5.801-1.521A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.655-.502-5.188-1.38l-.372-.217-3.853 1.01 1.028-3.758-.235-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </span>
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* ── Right — Globe ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:flex flex-1 items-center justify-end relative z-10"
          >
            <GlobeVisual />
          </motion.div>
        </div>
      </div>
    </div>

    {/* ── Trust badges ─────────────────────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="relative z-10 border-t border-slate-200 bg-white/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="hidden lg:flex items-center divide-x divide-slate-200">
          {TRUST_BADGES.map(({ Icon, label, sub }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="flex items-center gap-3 flex-1 px-6 first:pl-0 last:pr-0"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-teal-50 border border-teal/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-teal-dark" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-navy leading-tight">{label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 lg:hidden">
          {TRUST_BADGES.map(({ Icon, label, sub }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-teal-50 border border-teal/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-teal-dark" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-navy leading-tight">{label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);
