import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Associate - US Taxation',
    location: 'Ahmedabad (Hybrid)',
    type: 'Full-time',
    dept: 'Taxation'
  },
  {
    title: 'Assistant Manager - Outsourced Accounting',
    location: 'Ahmedabad (In-office)',
    type: 'Full-time',
    dept: 'Accounting'
  },
  {
    title: 'GST Compliance Specialist',
    location: 'Remote',
    type: 'Project-based',
    dept: 'Compliance'
  }
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge className="mb-4">Join the Team</Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-navy mb-8 leading-[1.05]">
              Grow Your Career <br />
              <span className="text-gold italic">Beyond Borders</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              Join a team of global financial experts, tax consultants, and accountants 
              shaping the future of international business growth.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-video lg:aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-2xl">
              <img 
                src="/accounting-mockup.png" 
                alt="Modern Accounting Work Environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-navy font-black text-lg mb-1">Global Culture</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">10+ Countries Represented</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] rounded-[3.5rem] p-12 lg:p-24 mb-24 noise overflow-hidden relative border border-white/5">
           <div className="absolute top-0 right-0 w-96 h-96 bg-royal/10 blur-[120px]" />
           <div className="relative z-10">
             <SectionHeading
               title="Current Openings"
               subtitle="Explore our open roles and find your next challenge."
               dark
             />
             
             <div className="space-y-6">
                {jobs.map((job, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-6 md:mb-0">
                      <Badge variant="royal" className="mb-3">{job.dept}</Badge>
                      <h3 className="text-2xl font-bold text-navy mb-4">{job.title}</h3>
                      <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gold" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gold" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary">Apply Now</Button>
                  </div>
                ))}
              </div>
           </div>
        </div>

        <div className="text-center bg-navy rounded-[3rem] p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Don’t see a role for you?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            We are always happy to hear from talented professionals. Send your CV to 
            careers@thenexsphereglobal.com and we’ll keep you in mind for future roles.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Submit Open Application
          </Button>
        </div>
      </div>
    </div>
  );
}
