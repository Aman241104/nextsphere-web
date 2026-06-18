'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Play, Shield, Users, Lock, BarChart3 } from 'lucide-react';
import dynamic from 'next/dynamic';

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

const ALL_CITY_DOTS = [...HUBS, ...CITIES];

/* ── Arcs ────────────────────────────────────────────────────── */
const ARCS = [
  { sLat: 40.71, sLng:-74.01, eLat: 51.51, eLng: -0.13 },
  { sLat: 40.71, sLng:-74.01, eLat: 48.86, eLng:  2.35 },
  { sLat: 37.77, sLng:-122.42,eLat: 51.51, eLng: -0.13 },
  { sLat: 37.77, sLng:-122.42,eLat: 35.68, eLng:139.65 },
  { sLat: 40.71, sLng:-74.01, eLat: 35.68, eLng:139.65 },
  { sLat: 40.71, sLng:-74.01, eLat: 43.65, eLng:-79.38 },
  { sLat: 40.71, sLng:-74.01, eLat:-23.55, eLng:-46.63 },
  { sLat: 51.51, sLng: -0.13, eLat:-23.55, eLng:-46.63 },
  { sLat: 51.51, sLng: -0.13, eLat: 25.20, eLng: 55.27 },
  { sLat: 25.20, sLng: 55.27, eLat: 19.08, eLng: 72.88 },
  { sLat: 25.20, sLng: 55.27, eLat: 28.61, eLng: 77.21 },
  { sLat:  1.35, sLng:103.82, eLat: 22.32, eLng:114.17 },
  { sLat: 22.32, sLng:114.17, eLat: 35.68, eLng:139.65 },
  { sLat:  1.35, sLng:103.82, eLat:-33.87, eLng:151.21 },
  { sLat: 19.08, sLng: 72.88, eLat:  1.35, eLng:103.82 },
  { sLat: 39.90, sLng:116.41, eLat: 35.68, eLng:139.65 },
  { sLat:-26.20, sLng: 28.05, eLat: 51.51, eLng: -0.13 },
  { sLat:  6.52, sLng:  3.38, eLat: 25.20, eLng: 55.27 },
  { sLat: 52.52, sLng: 13.41, eLat: 55.76, eLng: 37.62 },
  { sLat: 41.00, sLng: 28.98, eLat: 25.20, eLng: 55.27 },
  { sLat: 40.71, sLng:-74.01, eLat: 25.20, eLng: 55.27 },
  { sLat: 51.51, sLng: -0.13, eLat:  1.35, eLng:103.82 },
];

/* ── Three.js land-dot cloud builder ─────────────────────────── */
async function buildLandCloud(scene: any) {
  const THREE = await import('three');

  /* 1 ── Circular glow sprite (addi­tive blending = glowing dots) */
  const sc = document.createElement('canvas');
  sc.width = sc.height = 64;
  const sctx = sc.getContext('2d')!;
  const g = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0,    'rgba(180,220,255,1)');
  g.addColorStop(0.30, 'rgba(96,165,250,0.85)');
  g.addColorStop(0.65, 'rgba(59,130,246,0.35)');
  g.addColorStop(1,    'rgba(29,78,216,0)');
  sctx.fillStyle = g;
  sctx.fillRect(0, 0, 64, 64);
  const spriteTex = new THREE.CanvasTexture(sc);

  const addCloud = (positions: number[], size: number, opacity: number) => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      map: spriteTex,
      size,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(geo, mat));
  };

  /* 2 ── Load earth-water.png (dark = land, bright = ocean) */
  const toXYZ = (lat: number, lng: number, r: number) => {
    const phi   = (90 - lat)  * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta),
    ];
  };

  const loadMask = () =>
    new Promise<number[]>((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const W = 540, H = 270;
        const mc = document.createElement('canvas');
        mc.width = W; mc.height = H;
        const mctx = mc.getContext('2d')!;
        mctx.drawImage(img, 0, 0, W, H);
        const pixels = mctx.getImageData(0, 0, W, H).data;
        const pos: number[] = [];
        const R = 101.4;
        // step=2 → ~1 sample per 0.67° ≈ ~74 km resolution
        for (let py = 0; py < H; py += 2) {
          for (let px = 0; px < W; px += 2) {
            const i = (py * W + px) * 4;
            const br = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
            if (br < 100) { // dark pixel = land
              const lat = 90 - (py / H) * 180;
              const lng = (px / W) * 360 - 180;
              pos.push(...toXYZ(lat, lng, R));
            }
          }
        }
        resolve(pos);
      };
      img.onerror = () => resolve([]);
      img.src = '//unpkg.com/three-globe/example/img/earth-water.png';
    });

  const landPos = await loadMask();
  if (landPos.length > 0) {
    addCloud(landPos, 1.05, 0.72);
  }
}

/* ── Globe visual component ──────────────────────────────────── */
const GlobeVisual = () => {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any>({ features: [] });
  const [size, setSize]   = useState(780);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setSize(vw >= 1536 ? 880 : vw >= 1280 ? 800 : 730);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson')
      .then(r => r.json()).then(setCountries).catch(() => {});
  }, []);

  const handleGlobeReady = () => {
    const g = globeRef.current;
    if (!g) return;

    /* Camera */
    const ctrl = g.controls();
    ctrl.autoRotate      = true;
    ctrl.autoRotateSpeed = 0.36;
    ctrl.enableZoom      = false;
    ctrl.enablePan       = false;
    g.pointOfView({ lat: 20, lng: -38, altitude: 1.80 }, 0);

    /* Show globe immediately — don't wait for async land cloud */
    setReady(true);

    /* Tint globe mesh + add land dot cloud in background */
    const scene = g.scene();
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material?.color) {
        obj.material.color.setHex(0x000718);
        if (obj.material.emissive) obj.material.emissive.setHex(0x001035);
        if ('emissiveIntensity' in obj.material) obj.material.emissiveIntensity = 0.32;
      }
    });
    buildLandCloud(scene).catch(() => {});
  };

  return (
    /* Outer container: exactly globe size — glow divs bleed out with negative inset */
    <div className="relative" style={{ width: size, height: size, flexShrink: 0, overflow: 'visible' }}>

      {/* CSS atmosphere glow — bleeds 100px outside the box on all sides */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ inset: -100, background: 'radial-gradient(circle, rgba(29,78,216,0.48) 0%, rgba(29,78,216,0.16) 45%, transparent 68%)', filter: 'blur(52px)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ inset: -30, background: 'radial-gradient(circle at 40% 38%, rgba(96,165,250,0.24) 0%, transparent 60%)', filter: 'blur(30px)' }} />

      {/* Globe canvas */}
      <motion.div
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'absolute', top: 0, left: 0, width: size, height: size }}
      >
        <GlobeGL
          ref={globeRef}
          onGlobeReady={handleGlobeReady}
          width={size}
          height={size}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#2255dd"
          atmosphereAltitude={0.28}

          /* Subtle hex country borders */
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.4}
          hexPolygonColor={() => 'rgba(80,140,255,0.10)'}

          /* City + hub dots */
          pointsData={ALL_CITY_DOTS}
          pointLat="lat"
          pointLng="lng"
          pointColor={(p: any) => p.major ? '#e0f2fe' : '#93c5fd'}
          pointAltitude={(p: any) => p.major ? 0.022 : 0.012}
          pointRadius={(p: any) => p.major ? 0.72 : 0.44}
          pointLabel="label"

          /* Animated arcs */
          arcsData={ARCS}
          arcStartLat="sLat"
          arcStartLng="sLng"
          arcEndLat="eLat"
          arcEndLng="eLng"
          arcColor={() => ['rgba(96,165,250,0)', 'rgba(147,197,253,0.9)', 'rgba(96,165,250,0)']}
          arcAltitude={0.14}
          arcStroke={0.5}
          arcDashLength={0.45}
          arcDashGap={0.20}
          arcDashAnimateTime={2400}

          /* Pulsing rings on major hubs */
          ringsData={HUBS}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => '#60a5fa'}
          ringMaxRadius={3.5}
          ringPropagationSpeed={1.8}
          ringRepeatPeriod={900}
          ringAltitude={0.004}
        />
      </motion.div>
    </div>
  );
};

/* ── Hero section ────────────────────────────────────────────── */
export const Hero = () => (
  <section className="relative min-h-screen flex flex-col bg-[#030d1e] overflow-hidden noise pt-20">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[5%] right-[8%] w-[55%] h-[75%] bg-royal/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-[5%] w-[32%] h-[40%] bg-royal/8 rounded-full blur-[160px] animate-pulse-slow [animation-delay:2s]" />
    </div>

    <div className="relative z-10 flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center">

          {/* ── Left ─────────────────────────────────────────── */}
          <div className="flex-shrink-0 lg:w-[54%] text-left py-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-royal text-xs font-black uppercase tracking-[0.3em] mb-7"
            >
              Precision. Compliance. Growth.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-[2.75rem] md:text-[3.4rem] lg:text-[3rem] xl:text-[3.6rem] font-heading font-black text-white leading-[1.08] mb-6 tracking-tight"
            >
              Your Trusted Partner<br />
              for US Accounting,<br />
              Tax &amp; Advisory Services
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="w-14 h-[3px] bg-royal mb-8 origin-left rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-lg text-slate-300/80 mb-10 max-w-md leading-relaxed"
            >
              We help businesses across the globe streamline their finance, ensure compliance, and drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg"
                className="bg-royal hover:bg-blue-700 text-white font-bold px-9 h-14 group text-base rounded-lg border-none shadow-[0_12px_32px_-6px_rgba(29,78,216,0.55)]"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg"
                className="border border-white/20 text-white hover:bg-white/5 font-semibold px-8 h-14 text-base rounded-lg backdrop-blur-sm gap-3"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/30 shrink-0">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </span>
                Watch Overview
              </Button>
            </motion.div>
          </div>

          {/* ── Right — Globe ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:flex flex-1 items-center justify-end -mr-[320px] xl:-mr-[380px] 2xl:-mr-[440px]"
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
      className="relative z-10 border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="hidden lg:flex items-center divide-x divide-white/[0.08]">
          {TRUST_BADGES.map(({ Icon, label, sub }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="flex items-center gap-3 flex-1 px-6 first:pl-0 last:pr-0"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-royal/15 border border-royal/25 flex items-center justify-center">
                <Icon className="w-4 h-4 text-royal" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{sub}</p>
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
              <div className="shrink-0 w-9 h-9 rounded-full bg-royal/15 border border-royal/25 flex items-center justify-center">
                <Icon className="w-4 h-4 text-royal" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);
