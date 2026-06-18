import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Newsletter } from '@/components/ui/Newsletter';

const SocialIcon = ({ d }: { d: string }) => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d={d} />
  </svg>
);

const icons = {
  linkedin: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  twitter: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
  facebook: "M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z",
  instagram: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.55.21.95.47 1.36.88.41.41.67.81.88 1.36.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.21.55-.47.95-.88 1.36-.41.41-.81.67-1.36.88-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.55-.21-.95-.47-1.36-.88-.41-.41-.67-.81-.88-1.36-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.21-.55.47-.95.88-1.36.41-.41.81-.67 1.36-.88.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.92.56-.8.31-1.48.72-2.16 1.4-.68.68-1.09 1.36-1.4 2.16-.3.77-.5 1.64-.56 2.92C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.92.31.8.72 1.48 1.4 2.16.68.68 1.36 1.09 2.16 1.4.77.3 1.64.5 2.92.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.92-.56.8-.31 1.48-.72 2.16-1.4.68-.68 1.09-1.36 1.4-2.16.3-.77.5-1.64.56-2.92.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.92-.31-.8-.72-1.48-1.4-2.16-.68-.68-1.36-1.09-2.16-1.4-.77-.3-1.64-.5-2.92-.56C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32m0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
};

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-slate-400 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-10">
              <img
                src="/logo.png"
                alt="NexSphere Global Advisors LLP"
                className="h-20 w-auto object-contain"
                style={{ maxWidth: '260px', filter: 'brightness(1.15) drop-shadow(0 0 8px rgba(245,158,11,0.2))' }}
              />
            </Link>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              Global Expertise. Strategic Growth. Trusted Advisory. 
              Empowering Businesses Beyond Borders.
            </p>
            <div className="mb-10">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Stay Updated</h4>
              <Newsletter />
            </div>
            <div className="flex space-x-5">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"><SocialIcon d={icons.linkedin} /></Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"><SocialIcon d={icons.twitter} /></Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"><SocialIcon d={icons.facebook} /></Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"><SocialIcon d={icons.instagram} /></Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"><SocialIcon d={icons.youtube} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-10 uppercase tracking-[0.2em] text-xs">Navigation</h3>
            <ul className="space-y-6">
              <li><Link href="/about" className="hover:text-gold transition-colors text-lg">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors text-lg">Our Services</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors text-lg">Insights Hub</Link></li>
              <li><Link href="/careers" className="hover:text-gold transition-colors text-lg">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors text-lg">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-10 uppercase tracking-[0.2em] text-xs">Featured Services</h3>
            <ul className="space-y-6 text-lg">
              <li><Link href="/services/us-payroll" className="hover:text-gold transition-colors">Payroll Processing</Link></li>
              <li><Link href="/services/us-taxation" className="hover:text-gold transition-colors">US Taxation</Link></li>
              <li><Link href="/services/us-accounting" className="hover:text-gold transition-colors">Outsourced Accounting</Link></li>
              <li><Link href="/services/us-special-projects" className="hover:text-gold transition-colors">Special Projects</Link></li>
              <li><Link href="/services/in-gst" className="hover:text-gold transition-colors">GST Consultancy</Link></li>
              <li><Link href="/services/in-startup" className="hover:text-gold transition-colors">Startup India</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-10 uppercase tracking-[0.2em] text-xs">Get in Touch</h3>
            <ul className="space-y-8">
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-bold">+91 99297 49855</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-bold">info@thenexsphereglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>© 2026 NEXSPHERE GLOBAL ADVISORS LLP. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
