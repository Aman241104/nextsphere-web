'use client';

import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { name: 'QuickBooks', color: '#2CA01C' },
  { name: 'Xero', color: '#13B5EA' },
  { name: 'Sage', color: '#00DC00' },
  { name: 'UltraTax CS', color: '#E31E24' },
  { name: 'ProSeries Tax', color: '#0077C5' },
  { name: 'CaseWare', color: '#D22630' },
  { name: 'CCH Axcess', color: '#0070C0' },
];

// Duplicate for seamless loop
const marqueeItems = [...platforms, ...platforms, ...platforms];

export const SoftwareMarquee = () => {
  return (
    <div className="w-full overflow-hidden relative group py-8">
      {/* Gradient Masks for horizontal fade */}
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        animate={{
          x: [0, -platforms.length * 200], // Adjust based on item width
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex space-x-12 items-center whitespace-nowrap"
      >
        {marqueeItems.map((platform, idx) => (
          <div
            key={`${platform.name}-${idx}`}
            className="flex items-center space-x-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
          >
            <div 
              className="text-xl md:text-2xl font-black tracking-tighter uppercase font-heading"
              style={{ color: platform.color }}
            >
              {platform.name}
            </div>
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
