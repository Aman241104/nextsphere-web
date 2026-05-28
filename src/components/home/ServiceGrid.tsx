'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Calculator, BarChart3, ShieldCheck, Rocket, Briefcase, Globe, Landmark, TrendingUp } from 'lucide-react';
import { servicesData } from '@/data/services';
import { SpotlightSection, SpotlightCard } from '@/components/ui/Spotlight';
import * as LucideIcons from 'lucide-react';

const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
  return <Icon className={className} />;
};

export const ServiceGrid = () => {
  const usServices = servicesData.filter(s => s.category === 'US');
  const inServices = servicesData.filter(s => s.category === 'India');

  return (
    <SpotlightSection className="py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">
      {/* Background Section Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Expertise Across Borders"
          title="Engineered for Financial Excellence"
          subtitle="Precision-focused advisory services designed to scale your business in complex global markets."
          centered
          dark
        />

        {/* International Services */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-royal rounded-full" />
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">International (US)</h3>
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] hidden md:block">Outsourcing & Tax</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>

        {/* Domestic Services */}
        <div>
          <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-gold rounded-full" />
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">Domestic (India)</h3>
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] hidden md:block">Compliance & Strategy</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {inServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} isSmall />
            ))}
          </div>
        </div>
      </div>
    </SpotlightSection>
  );
};

const ServiceCard = ({ title, shortDesc, icon, index, isSmall }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={isSmall ? "col-span-1" : ""}
    >
      <SpotlightCard className="h-full relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 group-hover:from-gold group-hover:via-amber-500/50 group-hover:to-gold transition-all duration-700" />
        
        {/* Card Content */}
        <div className="relative bg-[#0a0a0a] rounded-[1.9rem] p-8 h-full flex flex-col z-10 transition-colors duration-500 group-hover:bg-[#0c0c0c]">
          <div className={`${isSmall ? 'w-12 h-12 mb-6' : 'w-14 h-14 mb-8'} bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500 group-hover:scale-110 shadow-inner overflow-hidden`}>
            <IconRenderer iconName={icon} className={`${isSmall ? 'w-6 h-6' : 'w-7 h-7'} text-slate-300 group-hover:text-navy transition-colors`} />
          </div>
          
          <h4 className={`${isSmall ? 'text-lg' : 'text-xl'} font-bold text-white mb-4 tracking-tight leading-tight transition-colors`}>
            {title}
          </h4>
          
          <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
            {shortDesc}
          </p>
          
          <div className="mt-auto pt-4 flex items-center text-[9px] font-black text-slate-600 group-hover:text-white transition-colors uppercase tracking-[0.3em]">
            EXPLORE
            <div className="ml-4 flex-grow h-[1px] bg-white/5 group-hover:bg-gold transition-all origin-left scale-x-50 group-hover:scale-x-100" />
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};
