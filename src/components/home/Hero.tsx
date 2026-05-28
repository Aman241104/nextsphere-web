'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Star } from 'lucide-react';

const headingText = "Global Financial & Advisory Solutions";
const subHeadingText = "for Growing Businesses.";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505] noise">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                  Now Advisory in 10+ Countries
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

          {/* Right Visual - NeoPay Style Card Masking */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2.0 }}
            className="lg:col-span-5 relative perspective-1000 hidden lg:block"
          >
            <div className="relative z-10 glass rounded-[3rem] p-1 aspect-[4/5] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[2.8rem] flex flex-col justify-between relative overflow-hidden group/card">
                {/* Background Image inside card */}
                <img 
                  src="/tax-compliance.png" 
                  alt="Tax Compliance Dashboard" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/card:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-royal/20" />
                
                <div className="space-y-6 relative z-10 p-8">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10">
                      <Star className="text-gold w-6 h-6 fill-gold" />
                    </div>
                    <Badge variant="gray" className="glass text-white border-white/10 lowercase italic">A+ Rating</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">Global Tax <br />Compliance Systems</h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl m-8 relative z-10">
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-black">Monthly Advisory</p>
                   <p className="text-3xl font-black text-white tracking-tighter">$12,450.00</p>
                   <div className="mt-4 flex items-center text-green-400 text-xs font-bold">
                     <span className="mr-2">↑ 12.5%</span>
                     <span className="text-slate-500 uppercase tracking-tighter">Efficiency gain</span>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 glass rounded-3xl p-6 shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-[10px] font-bold text-white">Verified Secure</span>
              </div>
              <p className="text-[9px] text-slate-400">SOC2 Type II Compliant Systems for all data handling.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
