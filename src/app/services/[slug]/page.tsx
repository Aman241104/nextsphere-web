import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.fullDesc,
    alternates: { canonical: `https://www.thenexsphereglobal.com/services/${slug}` },
    openGraph: {
      title: `${service.title} — NexSphere Global Advisors LLP`,
      description: service.shortDesc,
      url: `https://www.thenexsphereglobal.com/services/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold text-royal hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge variant={service.category === 'US' ? 'royal' : 'gold'} className="mb-4">
              {service.category === 'US' ? 'International Service' : 'Domestic Service'}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {service.fullDesc}
            </p>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10">
              <h3 className="text-xl font-bold mb-6">Key Features & Deliverables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-navy font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">Get a Proposal</Button>
              <Button variant="outline" size="lg">Contact Specialist</Button>
            </div>
          </div>

          <div className="sticky top-32">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl mb-12 relative group">
               <img 
                 src="/finance-charts.png" 
                 alt="Finance and Data Charts" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>

            <div className="bg-navy rounded-[2.5rem] p-12 text-white overflow-hidden relative border border-white/5 noise">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl" />
              
              <h3 className="text-2xl font-bold mb-6 font-heading tracking-tight">Why Choose NexSphere?</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-gold font-black text-xs">01</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Technology-driven processes using modern cloud accounting software.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-gold font-black text-xs">02</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Dedicated support team with deep expertise in {service.category} markets.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-gold font-black text-xs">03</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Scalable solutions that grow alongside your business complexity.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
