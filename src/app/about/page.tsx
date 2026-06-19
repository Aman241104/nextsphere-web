'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Users, Target, Eye, Shield } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    desc: 'Unwavering commitment to honesty and ethical conduct in every financial interaction.',
    icon: Shield,
  },
  {
    title: 'Transparency',
    desc: 'Clear, open communication and reporting to ensure clients are always informed.',
    icon: Eye,
  },
  {
    title: 'Innovation',
    desc: 'Leveraging technology to streamline financial operations and provide modern solutions.',
    icon: Target,
  },
  {
    title: 'Client Success',
    desc: 'Our growth is measured by the success and scalability of our clients.',
    icon: Users,
  },
  {
    title: 'Excellence',
    desc: 'Striving for the highest quality in financial management and strategic advisory.',
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 leading-[1.05]">
              Reliable, Scalable, and <br />
              <span className="text-gold italic">Technology-Driven</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              NEXSPHERE GLOBAL ADVISORS LLP was founded with a vision to provide businesses worldwide 
              with reliable, scalable, and technology-driven accounting and advisory solutions. 
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="/strategic-meeting.png" 
                alt="NexSphere Strategic Planning Meeting" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold rounded-full opacity-20 animate-pulse" />
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-navy p-12 rounded-[2.5rem] text-white">
            <h2 className="text-3xl font-bold mb-6 text-gold uppercase tracking-wider text-sm">Mission</h2>
            <p className="text-2xl leading-relaxed font-heading">
              "To simplify financial operations and empower businesses through strategic advisory and compliance excellence."
            </p>
          </div>
          <div className="bg-royal p-12 rounded-[2.5rem] text-white">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider text-sm">Vision</h2>
            <p className="text-2xl leading-relaxed font-heading">
              "To become a globally trusted accounting and advisory partner for growing businesses."
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <SectionHeading
            badge="Core Values"
            title="What Drives Our Success"
            subtitle="Our values are the foundation of every client relationship and the compass for our strategic advisory."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  <v.icon className="w-6 h-6 text-royal" />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20">
          <div className="text-center mb-16">
            <Badge variant="royal" className="mb-4">Our Tech Stack</Badge>
            <h2 className="text-4xl font-bold text-navy mb-6">Platforms We Master</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We leverage industry-leading software to ensure precision, security, and real-time financial insights for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 items-center justify-items-center">
            {[
              { name: 'QuickBooks', logo: '/logos/quickbooks.png' },
              { name: 'Xero',       logo: '/logos/xero.png' },
              { name: 'Sage',       logo: '/logos/sage.png' },
              { name: 'UltraTax',  logo: '/logos/ultratax.png' },
              { name: 'ProSeries', logo: '/logos/proseries.png' },
              { name: 'CaseWare',  logo: '/logos/caseware.png' },
              { name: 'CCH Axcess',logo: '/logos/cch-axcess.png' },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-center group cursor-default">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
