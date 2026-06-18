import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to frequently asked questions about NexSphere Global Advisors LLP\'s outsourced accounting, payroll processing, US taxation, Virtual CFO, and GST compliance services.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions — NexSphere Global Advisors LLP',
    description: 'Find answers about our global accounting, payroll, tax, and advisory services.',
    url: 'https://www.thenexsphereglobal.com/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
