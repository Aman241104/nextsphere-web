'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 px-4 overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
      >
        {/* Abstract background blobs - NeoPay Style */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-royal/30 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-gold/10 rounded-full blur-[100px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold font-bold tracking-[0.2em] uppercase text-sm mb-8"
          >
            Start Your Journey
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-10 leading-[1.1] tracking-tight">
            Ready to Build Your <br />
            <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent italic">
              Financial Future?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed">
            Schedule a discovery call with our experts to discuss how we can help you 
            streamline operations and scale your business globally.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button size="lg" className="bg-gold hover:bg-amber-600 text-navy font-bold px-12 h-16 rounded-2xl text-lg shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]">
              Schedule Consultation
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 font-bold px-12 h-16 rounded-2xl text-lg backdrop-blur-sm">
              Request a Proposal
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
