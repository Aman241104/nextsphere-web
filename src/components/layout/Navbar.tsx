'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { servicesData } from '@/data/services';
import { whatsappLink } from '@/lib/contact';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinksBefore = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  const navLinksAfter = [
    { name: 'Insights', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const navLinks = [...navLinksBefore, ...navLinksAfter];

  const categories = [
    {
      title: 'International (US)',
      items: servicesData.filter(s => s.category === 'US').map(s => ({ name: s.title, href: `/services/${s.slug}` }))
    },
    {
      title: 'Domestic (India)',
      items: servicesData.filter(s => s.category === 'India').map(s => ({ name: s.title, href: `/services/${s.slug}` }))
    }
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 bg-white/95 backdrop-blur-xl border-b ${
        scrolled ? 'py-2 border-slate-200 shadow-sm' : 'py-3 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="NexSphere Global Advisors LLP — Global Accounting Excellence"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ maxWidth: '220px' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center md:space-x-5 lg:space-x-8">
            {navLinksBefore.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.2em] transition-colors relative group text-slate-500 hover:text-navy"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-[0.2em] transition-colors text-slate-500 hover:text-navy">
                <span>Services</span>
                <ChevronDown className="w-3 h-3 text-teal" />
              </button>
              
              <div className="absolute top-full right-[-100px] mt-6 w-[720px] bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-2xl p-2">
                <div className="bg-white rounded-[2.2rem] grid grid-cols-2 p-10 gap-x-12 gap-y-10">
                  {categories.map((category) => (
                    <div key={category.title}>
                      <h3 className="text-xs font-black text-teal-dark uppercase tracking-[0.3em] mb-8 pb-4 border-b border-slate-100">
                        {category.title}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-sm transition-colors block font-medium text-slate-500 hover:text-teal-dark"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinksAfter.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.2em] transition-colors relative group text-slate-500 hover:text-navy"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}

            <a
              href={whatsappLink("Hi, I'd like to book a consultation with NexSphere Global Advisors")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 active:scale-95 bg-navy text-white hover:bg-teal-dark shadow-[0_0_20px_-5px_rgba(26,62,88,0.3)]"
            >
              CONSULTATION
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 py-8 px-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[80vh] bg-white">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-6 border-t border-slate-100">
            {categories.map(cat => (
              <div key={cat.title} className="space-y-4">
                <p className="text-xs font-black text-teal-dark uppercase tracking-[0.2em]">{cat.title}</p>
                {cat.items.map(item => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="block text-sm pl-4 font-medium text-slate-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <a
            href={whatsappLink("Hi, I'd like to book a consultation with NexSphere Global Advisors")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full rounded-xl bg-navy text-white font-black text-xs uppercase tracking-widest py-4 hover:bg-teal-dark transition-colors"
          >CONSULTATION</a>
        </div>
      )}
    </nav>
  );
};
