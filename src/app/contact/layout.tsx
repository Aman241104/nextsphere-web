import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NexSphere Global Advisors LLP for expert accounting, payroll, US tax, Virtual CFO advisory, and GST compliance services. Our team is ready to help.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/contact' },
  openGraph: {
    title: 'Contact NexSphere Global Advisors LLP',
    description: 'Reach out for accounting, payroll processing, US taxation, and advisory services across the US and India.',
    url: 'https://www.thenexsphereglobal.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
