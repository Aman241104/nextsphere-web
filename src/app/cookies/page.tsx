import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'NexSphere Global Advisors LLP Cookie Policy — how we use cookies to improve your browsing experience.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/cookies' },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-black text-navy mb-4">Cookie Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: June 2026</p>
        <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function correctly (e.g., session management). These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., pages visited, time spent). We use this data to improve content and navigation.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and personalisation choices across visits.</li>
              <li><strong>Marketing Cookies:</strong> Used to serve relevant advertisements. We do not sell this data to third parties.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Managing Cookies</h2>
            <p>You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website. Most browsers provide instructions for managing cookies in their Help section.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Third-Party Cookies</h2>
            <p>We may use third-party services (such as Google Analytics) that set their own cookies. These are governed by the respective third-party privacy policies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Contact</h2>
            <p>For questions about our cookie practices, contact <a href="mailto:info@thenexsphereglobal.com" className="text-royal hover:underline">info@thenexsphereglobal.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
