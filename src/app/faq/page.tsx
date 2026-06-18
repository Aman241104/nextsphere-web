'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What industries does NEXSPHERE specialize in?",
    answer: "We specialize in providing accounting, tax, and advisory services to startups, SMEs, US-based CPA firms, and eCommerce businesses globally. Our client base spans technology, manufacturing, retail, healthcare, professional services, and cross-border businesses operating between the US and India."
  },
  {
    question: "How do your US Outsourcing services work?",
    answer: "Our US Outsourcing model is designed for CPA firms and businesses. We handle daily bookkeeping, tax preparation, and payroll support using secure, cloud-based accounting software — acting as a seamless extension of your local team. You retain full client control while we handle the operational workload."
  },
  {
    question: "What does Payroll Processing & Return Filing include?",
    answer: "Our payroll service covers the full cycle: processing employee salaries and withholdings, filing federal payroll tax returns (Form 941 quarterly, Form 940 annually), preparing W-2s and 1099s, managing multi-state payroll tax filings, and reconciling payroll accounts. We eliminate payroll penalties by ensuring all returns are filed accurately and on time."
  },
  {
    question: "What are Special Projects and who are they for?",
    answer: "Special Projects are bespoke, time-bound financial engagements that do not fit standard service categories. Examples include forensic accounting investigations, pre-IPO financial readiness, GAAP-to-IFRS conversions, cross-border transaction structuring, M&A due diligence support, and financial data migrations. They are ideal for businesses facing a complex, one-off financial challenge that needs senior expert attention."
  },
  {
    question: "How does Virtual CFO Advisory help my business?",
    answer: "Our Virtual CFO service provides strategic financial leadership without the cost of a full-time CFO. This includes financial forecasting, budget variance analysis, KPI dashboard creation, investor reporting, cash flow management, and — through our Special Projects capability — targeted engagements such as fundraising support and business restructuring analysis."
  },
  {
    question: "Is my financial data secure with NexSphere?",
    answer: "Absolutely. Data security is our top priority. We use industry-standard encryption, secure cloud platforms (QuickBooks Online, Xero, Sage), role-based access controls, and strict internal compliance protocols to ensure your information is always protected and confidential."
  },
  {
    question: "Do you help Indian startups with fundraising and registration?",
    answer: "Yes, we provide end-to-end support for Indian startups, including Startup India registration (DPIIT recognition), fundraising advisory, tax exemption guidance under Section 80-IAC, and ongoing compliance management to keep your entity in good standing."
  },
  {
    question: "Can NexSphere handle both US and Indian compliance for our business?",
    answer: "Yes. This dual-market capability is our core strength. We handle US tax returns, payroll tax filings, and outsourced accounting on the US side — while simultaneously managing GST, income tax, MCA compliances, FEMA, and Indian bookkeeping for your Indian entity."
  },
  {
    question: "What accounting software do you work with?",
    answer: "We are proficient in QuickBooks Online, Xero, Sage, UltraTax CS, ProSeries Tax, CaseWare, and CCH Axcess — covering the leading platforms used by US CPA firms and Indian accounting practices."
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
