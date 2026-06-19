import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore NexSphere Global Advisors LLP\'s full range of US and India accounting, tax, payroll, and advisory services for businesses worldwide.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/services' },
};

export default function ServicesPage() {
  const usServices = servicesData.filter(s => s.category === 'US');
  const indiaServices = servicesData.filter(s => s.category === 'India');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Offer"
          title="Services Built for Global Growth"
          subtitle="From US tax compliance to Indian GST advisory — we cover every dimension of your business finances."
          centered
        />

        {/* US Services */}
        <div className="mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-8">International (US)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usServices.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-royal/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-royal transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                <div className="flex items-center text-sm font-bold text-royal group-hover:text-gold transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* India Services */}
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-8">Domestic (India)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indiaServices.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-royal/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-royal transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                <div className="flex items-center text-sm font-bold text-royal group-hover:text-gold transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
