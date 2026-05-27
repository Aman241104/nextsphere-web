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
        <div className="mb-24">
          <Badge className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-8 max-w-4xl">
            Reliable, Scalable, and Technology-Driven Accounting for Global Businesses
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            NEXSPHERE GLOBAL ADVISORS LLP was founded with a vision to provide businesses worldwide 
            with reliable, scalable, and technology-driven accounting and advisory solutions. 
            We help companies scale efficiently through accurate financial management and 
            strategic advisory services.
          </p>
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
      </div>
    </div>
  );
}
