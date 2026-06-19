'use client';

import React from 'react';

const TOOLS = [
  { name: 'QuickBooks', logo: '/logos/quickbooks.png' },
  { name: 'Xero',       logo: '/logos/xero.png' },
  { name: 'Sage',       logo: '/logos/sage.png' },
  { name: 'UltraTax',  logo: '/logos/ultratax.png' },
  { name: 'ProSeries',  logo: '/logos/proseries.png' },
  { name: 'CCH Axcess', logo: '/logos/cch-axcess.png' },
  { name: 'CaseWare',   logo: '/logos/caseware.png' },
];

export const TechMarquee = () => (
  <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
    <p className="text-center text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 mb-8">
      Trusted Tools &amp; Platforms We Work With
    </p>
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex animate-marquee">
        {[...TOOLS, ...TOOLS].map((tool, i) => (
          <div key={i} className="flex items-center justify-center shrink-0 px-14">
            <img
              src={tool.logo}
              alt={tool.name}
              className="h-12 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
