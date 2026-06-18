'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Star } from 'lucide-react';
import { SoftwareMarquee } from '@/components/ui/SoftwareMarquee';

const headingText = "Global Financial & Advisory Solutions";
const subHeadingText = "for Growing Businesses.";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-[#050505] noise">
      {/* Background Image with Tint - Custom 3D Mesh */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4] mix-blend-luminosity"
          style={{ backgroundImage: 'url("/hero-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/40 to-transparent" />
      </div>

      {/* Dynamic Background Glows - Behind the Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] bg-royal/20 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[50%] h-[60%] bg-gold/10 rounded-full blur-[180px] animate-pulse-slow [animation-delay:2s]" />
      </div>

      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-2xl">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                    Now Advisory in India & USA
                  </span>
                </div>
              </motion.div>

              <h1 className="text-6xl md:text-[5.5rem] font-heading font-black text-white leading-[0.95] mb-10 tracking-tighter">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, staggerChildren: 0.05 }}
                  className="block mb-2"
                >
                  {headingText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, staggerChildren: 0.05, delayChildren: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-amber-500"
                >
                  {subHeadingText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-xl md:text-2xl text-slate-500 mb-14 max-w-2xl leading-relaxed font-medium"
              >
                Helping startups and businesses streamline accounting, taxation, compliance, and financial operations globally.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Button size="lg" className="bg-gold hover:bg-amber-600 text-navy font-bold px-10 h-16 group text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] border-none">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 font-bold px-10 h-16 text-lg rounded-2xl backdrop-blur-xl group">
                  Get Proposal
                </Button>
              </motion.div>
            </div>

            {/* Right Visual — Premium Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 1.8 }}
              className="lg:col-span-5 relative hidden lg:flex flex-col gap-5"
            >
              {/* Main Dashboard Card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d1528] via-[#111827] to-[#0a0a14] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-royal/20 to-transparent" />

                <div className="relative z-10 p-7">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-[0.35em] font-black mb-1">NexSphere Dashboard</p>
                      <h3 className="text-lg font-black text-white tracking-tight">Financial Overview</h3>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[9px] text-green-400 font-black uppercase tracking-wider">Live</span>
                    </div>
                  </div>

                  {/* Big metric */}
                  <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 mb-5">
                    <p className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-black mb-2">Total Advisory Value</p>
                    <div className="flex items-end gap-3 mb-3">
                      <span className="text-4xl font-black text-white tracking-tighter">$248,500</span>
                      <span className="text-green-400 text-sm font-black mb-1">↑ 18.4%</span>
                    </div>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1 h-10 mt-1">
                      {[35, 52, 41, 63, 48, 71, 58, 80, 66, 92, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                          style={{
                            height: `${h}%`,
                            background: i === 11
                              ? 'linear-gradient(to top, #f59e0b, #fbbf24)'
                              : i >= 9
                              ? 'rgba(29,78,216,0.7)'
                              : 'rgba(255,255,255,0.08)'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* 3 stat pills */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'US Clients', value: '124+', color: '#1d4ed8' },
                      { label: 'Compliance', value: '100%', color: '#f59e0b' },
                      { label: 'Saved (Tax)', value: '$1.2M', color: '#10b981' },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3 text-center">
                        <p className="font-black text-lg text-white" style={{ color: s.color }}>{s.value}</p>
                        <p className="text-[8px] text-slate-500 uppercase tracking-wider mt-0.5 font-bold">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Active services list */}
                  <div className="space-y-2.5">
                    {[
                      { name: 'Payroll Processing & Filing', status: 'Filed', dot: 'bg-green-400' },
                      { name: 'US Tax Returns (941/940)', status: 'On Track', dot: 'bg-gold' },
                      { name: 'GST Compliance — India', status: 'Filed', dot: 'bg-green-400' },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                          <span className="text-[11px] text-slate-300 font-semibold">{item.name}</span>
                        </div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              {/* Bottom floating row — two mini cards */}
              <div className="flex gap-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-1 bg-gradient-to-br from-royal/30 to-navy/60 border border-royal/30 rounded-2xl p-4 backdrop-blur-xl shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="text-[9px] text-gold font-black uppercase tracking-widest">A+ Rated</span>
                  </div>
                  <p className="text-sm font-black text-white">Virtual CFO</p>
                  <p className="text-[9px] text-slate-400 mt-1">Special Projects & Advisory</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="flex-1 bg-gradient-to-br from-[#0a1a0a]/80 to-green-900/20 border border-green-500/20 rounded-2xl p-4 backdrop-blur-xl shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-[9px] text-green-400 font-black uppercase tracking-widest">Verified</span>
                  </div>
                  <p className="text-sm font-black text-white">SOC2 Compliant</p>
                  <p className="text-[9px] text-slate-400 mt-1">Secure data handling</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Horizontal Software Marquee - Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="w-full relative z-10 mt-auto py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center space-x-8">
            <div className="h-px bg-slate-200 flex-grow" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">
              Enterprise Technology Stack
            </span>
            <div className="h-px bg-slate-200 flex-grow" />
          </div>
        </div>
        <SoftwareMarquee />
      </motion.div>
    </section>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
