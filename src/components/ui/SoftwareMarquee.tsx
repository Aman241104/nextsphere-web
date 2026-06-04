'use client';

import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { name: 'QuickBooks', color: '#2CA01C', image: '/logos/quickbooks.png' },
  { name: 'Xero', color: '#13B5EA', image: '/logos/xero.png' },
  { name: 'Sage', color: '#00DC00', image: '/logos/sage.png' },
  { name: 'UltraTax CS', color: '#E31E24', image: '/logos/ultratax.png' },
  { name: 'ProSeries Tax', color: '#0077C5', image: '/logos/proseries.png' },
  { name: 'CaseWare', color: '#D22630', image: '/logos/caseware.png' },
  { name: 'CCH Axcess', color: '#0070C0', image: '/logos/cch-axcess.png' },
];

// Duplicate for seamless loop
const marqueeItems = [...platforms, ...platforms, ...platforms];

export const SoftwareMarquee = () => {
  return (
    <div className="w-full overflow-hidden relative group py-8">
      {/* Gradient Masks for horizontal fade (White theme) */}
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        animate={{
          x: [0, -platforms.length * 600], // Increased significantly for the huge logos
        }}
        transition={{
          duration: 60, // Slower for a more premium, professional feel
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex space-x-32 items-center whitespace-nowrap"
      >
        {marqueeItems.map((platform, idx) => (
          <div
            key={`${platform.name}-${idx}`}
            className="flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-110 cursor-default"
          >
            {platform.image ? (
              <img 
                src={platform.image} 
                alt={platform.name} 
                className="h-24 md:h-40 w-auto object-contain"
              />
            ) : (
              <div 
                className="text-5xl md:text-8xl font-black tracking-tighter uppercase font-heading"
                style={{ color: platform.color }}
              >
                {platform.name}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
