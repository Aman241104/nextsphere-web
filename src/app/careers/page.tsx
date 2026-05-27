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
        <div className="mb-20 text-center">
          <Badge className="mb-4">Join the Team</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-8">
            Grow Your Career with <br />
            <span className="text-gold">NexSphere Global</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are always looking for passionate financial experts, tax consultants, and 
            accountants to join our mission of empowering businesses beyond borders.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 mb-20">
          <SectionHeading
            title="Current Openings"
            subtitle="Explore our open roles and find your next challenge."
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
