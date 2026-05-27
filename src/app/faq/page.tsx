'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What industries does NEXSPHERE specialize in?",
    answer: "We specialize in providing accounting, tax, and advisory services to startups, SMEs, US-based CPA firms, and eCommerce businesses globally."
  },
  {
    question: "How do your US Outsourcing services work?",
    answer: "Our US Outsourcing model is designed for CPA firms and businesses. We handle daily bookkeeping, tax preparation, and payroll support using secure, cloud-based accounting software, acting as an extension of your local team."
  },
  {
    question: "Is my financial data secure with NexSphere?",
    answer: "Absolutely. Data security is our top priority. We use industry-standard encryption, secure cloud platforms, and strict internal compliance protocols to ensure your information is always protected."
  },
  {
    question: "Do you help Indian startups with fundraising and registration?",
    answer: "Yes, we provide end-to-end support for Indian startups, including Startup India registration (DPIIT recognition), fundraising advisory, and ongoing compliance management."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Support"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, processes, and how we help businesses grow."
          centered
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-royal/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="text-lg font-bold text-navy">{question}</span>
        {isOpen ? <ChevronUp className="text-gold w-5 h-5" /> : <ChevronDown className="text-slate-400 w-5 h-5" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
