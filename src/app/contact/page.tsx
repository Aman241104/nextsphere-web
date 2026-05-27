'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
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
                  <MapPin className="w-6 h-6 text-royal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Office Address</h3>
                  <p className="text-slate-600 text-sm">
                    F.F-230, Chanakyapuri, Near Railway Fatak, Ghatlodia, Ahmedabad – 380061, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-royal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone Number</h3>
                  <p className="text-slate-600 text-sm">+91 72279 53062</p>
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
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
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Service Interested In</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all appearance-none">
                    <option>US Tax Preparation</option>
                    <option>Outsourced Accounting</option>
                    <option>CFO Advisory</option>
                    <option>GST Consultancy</option>
                    <option>Other Services</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-royal transition-all"
                ></textarea>
              </div>

              <Button variant="secondary" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
