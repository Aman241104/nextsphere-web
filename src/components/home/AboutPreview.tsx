'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Clients Served', value: '100+', icon: Award },
  { label: 'Success Rate', value: '99%', icon: Zap },
  { label: 'Support', value: '24/7', icon: ShieldCheck },
];

const features = [
  { title: 'Experienced Professionals', desc: 'Expertise across US and Indian financial landscapes.' },
  { title: 'Global Capability', desc: 'Strategic advisory for businesses beyond borders.' },
  { title: 'Cost-effective Solutions', desc: 'Scalable pricing models for startups and SMEs.' },
  { title: 'Technology-driven', desc: 'Modern accounting software for real-time reporting.' },
  { title: 'Fast Turnaround', desc: 'Quick processing for time-sensitive tax and compliance.' },
  { title: 'Dedicated Support', desc: 'Personalized advisory and 24/7 client communication.' },
];

export const AboutPreview = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Cinematic Masking Element */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
               <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em] block mb-6">About NexSphere</span>
               <h2 className="text-5xl md:text-7xl font-heading font-black text-navy leading-[1.05] tracking-tight mb-8">
                 Global Financial & <br />
                 <span className="text-slate-300">Advisory Partner.</span>
               </h2>
               <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                 NEXSPHERE GLOBAL ADVISORS LLP delivers strategic accounting and advisory services tailored for modern businesses seeking scalable and compliant financial solutions.
               </p>
            </div>
            
            <div className="space-y-10 mb-14">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-royal group-hover:text-white transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-royal transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-wider text-navy mb-1">{f.title}</h4>
                    <p className="text-slate-500 leading-relaxed max-w-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg" className="rounded-2xl px-12 bg-navy text-white hover:bg-royal">
              OUR FULL STORY
            </Button>
          </motion.div>

          <div className="relative">
            {/* Main Visual Card - Cinematic Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] bg-navy rounded-[4rem] overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] group"
            >
               {/* Professional Team Photo */}
               <img 
                 src="/team-consultation.png" 
                 alt="NexSphere Team Consulting Client" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               
               {/* Brand Color Tint Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
               
               <div className="absolute inset-0 flex flex-col justify-end p-14 relative z-10">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-10 mb-8">
                    <div className="text-gold font-black text-[10px] tracking-[0.4em] mb-4 uppercase">Global Mandate</div>
                    <p className="text-white text-3xl font-heading font-black mb-4 italic leading-tight">"Growth is no longer optional."</p>
                    <div className="w-12 h-1 bg-gold rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((s, i) => (
                      <div key={i} className="text-white border-r border-white/10 last:border-none pr-2">
                        <p className="text-2xl md:text-3xl font-black mb-1 tracking-tighter">{s.value}</p>
                        <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">{s.label}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
            
            {/* Floating Trust Card - High Polish */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -left-12 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[280px] hidden md:block"
            >
               <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-green-600" />
               </div>
               <h5 className="text-sm font-black uppercase tracking-widest text-navy mb-2">100% Compliant</h5>
               <p className="text-slate-500 text-sm leading-relaxed">Rigorous adherence to global IRS and MCA regulations.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
