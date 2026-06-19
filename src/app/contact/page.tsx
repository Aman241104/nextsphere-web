'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I'd like to get in touch.\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let’s Build Your Financial Future Together"
          subtitle="Have questions about our global services? Reach out to our team of experts for professional advisory and support."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-royal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone Number</h3>
                  <p className="text-slate-600 text-sm">+91 99297 49855</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-royal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email Address</h3>
                  <p className="text-slate-600 text-sm">info@thenexsphereglobal.com</p>
                </div>
              </div>
            </div>

            <div className="bg-navy p-8 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="flex justify-between text-sm mb-2 text-slate-300">
                <span>Monday – Friday</span>
                <span>10:00 AM – 7:00 PM IST</span>
              </div>
              <div className="flex justify-between text-sm text-slate-300">
                <span>Saturday – Sunday</span>
                <span className="text-gold font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 p-8 lg:p-12 rounded-[2.5rem] shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Business"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all appearance-none"
                  >
                    <option value="">Select a service…</option>
                    <optgroup label="US Services">
                      <option>Outsourced Accounting Services</option>
                      <option>Payroll Processing &amp; Return Filing</option>
                      <option>US Taxation &amp; Compliance</option>
                      <option>US Bookkeeping</option>
                      <option>Virtual CFO Advisory</option>
                      <option>Special Projects</option>
                    </optgroup>
                    <optgroup label="India Services">
                      <option>GST Consultancy &amp; Compliance</option>
                      <option>Indian Income Tax</option>
                      <option>Assurance &amp; Audit</option>
                      <option>MCA Compliances</option>
                      <option>FEMA Compliance</option>
                      <option>Startup India Registration</option>
                      <option>Wealth Management</option>
                      <option>Entity Formation</option>
                      <option>Trademark &amp; IP</option>
                    </optgroup>
                    <option>Other / Not Listed</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">How can we help?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                />
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center rounded-2xl uppercase transition-all duration-500 active:scale-95 bg-white text-navy hover:bg-slate-100 shadow-xl px-8 py-5 text-sm tracking-[0.2em] font-black">
                <Send className="w-5 h-5 mr-2" />
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
