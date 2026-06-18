import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about NexSphere Global Advisors LLP — a globally trusted accounting and advisory firm delivering reliable, scalable, technology-driven financial solutions for businesses in the US and India.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/about' },
  openGraph: {
    title: 'About NexSphere Global Advisors LLP',
    description:
      'Reliable, scalable, technology-driven accounting and advisory services for global businesses in the US and India.',
    url: 'https://www.thenexsphereglobal.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
