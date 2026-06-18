'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/data/services';

import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the navbar should be "Dark Mode" (on home page sections or hero)
  const isHomePage = pathname === '/';
  const isDarkTheme = isHomePage; // Stay dark on home page regardless of scroll for premium feel

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
          ? isHomePage
            ? 'bg-[#050505]/80 backdrop-blur-xl py-2 border-b border-white/5'
            : 'bg-white/80 backdrop-blur-xl py-2 border-b border-slate-100 shadow-sm'
          : isHomePage
            ? 'bg-transparent py-3'
            : 'bg-white/80 backdrop-blur-xl py-3 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="NexSphere Global Advisors LLP — Global Accounting Excellence"
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ maxWidth: '260px' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors relative group ${
                  isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-navy'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-navy'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-3 h-3 text-gold" />
              </button>
              
              <div className="absolute top-full right-[-100px] mt-6 w-[720px] glass rounded-[2.5rem] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-2xl p-2">
                <div className={`${isDarkTheme ? 'bg-[#0a0a0a]' : 'bg-white'} rounded-[2.2rem] grid grid-cols-2 p-10 gap-x-12 gap-y-10 border border-slate-100`}>
                  {categories.map((category) => (
                    <div key={category.title}>
                      <h3 className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-8 pb-4 border-b border-slate-100/10">
                        {category.title}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className={`text-sm transition-colors block font-medium ${isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-royal'}`}
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

            <Button 
              variant={isDarkTheme ? "secondary" : "primary"} 
              size="sm" 
              className={`rounded-xl px-6 font-black text-[10px] tracking-widest transition-all duration-300 ${
                !isDarkTheme && 'bg-navy text-white hover:bg-royal'
              }`}
            >
              CONSULTATION
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDarkTheme ? 'text-white' : 'text-navy'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-t py-8 px-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[80vh] ${
          isDarkTheme ? 'bg-[#050505] border-white/5' : 'bg-white border-slate-100'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`block text-[10px] font-black uppercase tracking-[0.3em] ${isDarkTheme ? 'text-slate-400' : 'text-slate-500'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className={`pt-4 space-y-6 border-t ${isDarkTheme ? 'border-white/5' : 'border-slate-100'}`}>
            {categories.map(cat => (
              <div key={cat.title} className="space-y-4">
                <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">{cat.title}</p>
                {cat.items.map(item => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className={`block text-sm pl-4 font-medium ${isDarkTheme ? 'text-slate-400' : 'text-slate-600'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full rounded-xl font-black text-[10px] tracking-widest py-4">CONSULTATION</Button>
        </div>
      )}
    </nav>
  );
};
