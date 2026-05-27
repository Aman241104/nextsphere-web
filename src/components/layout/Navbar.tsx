'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/data/services';

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

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
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl py-4 border-b border-white/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-2xl font-black font-heading text-white tracking-tighter group-hover:text-gold transition-colors duration-300">
                NEX<span className="text-gold group-hover:text-white">SPHERE</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors">
                <span>Services</span>
                <ChevronDown className="w-3 h-3 text-gold" />
              </button>
              
              <div className="absolute top-full right-[-100px] mt-6 w-[720px] glass rounded-[2.5rem] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-2xl p-2">
                <div className="bg-[#0a0a0a] rounded-[2.2rem] grid grid-cols-2 p-10 gap-x-12 gap-y-10">
                  {categories.map((category) => (
                    <div key={category.title}>
                      <h3 className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-8 pb-4 border-b border-white/5">
                        {category.title}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-sm text-slate-400 hover:text-white transition-colors block font-medium"
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

            <Button variant="secondary" size="sm" className="bg-white text-navy hover:bg-gold hover:text-navy rounded-xl px-6 font-black text-[10px] tracking-widest transition-all duration-300">
              CONSULTATION
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-t border-white/5 py-8 px-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-6 border-t border-white/5">
            {categories.map(cat => (
              <div key={cat.title} className="space-y-4">
                <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">{cat.title}</p>
                {cat.items.map(item => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="block text-sm text-slate-400 pl-4 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full bg-white text-navy rounded-xl font-black text-[10px] tracking-widest py-4">CONSULTATION</Button>
        </div>
      )}
    </nav>
  );
};
