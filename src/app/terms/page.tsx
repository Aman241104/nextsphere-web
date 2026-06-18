import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'NexSphere Global Advisors LLP Terms and Conditions governing the use of our website and services.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/terms' },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-black text-navy mb-4">Terms & Conditions</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: June 2026</p>
        <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy">1. Acceptance of Terms</h2>
            <p>By accessing and using the NexSphere Global Advisors LLP website (<strong>www.thenexsphereglobal.com</strong>) or engaging our services, you agree to be bound by these Terms and Conditions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">2. Services</h2>
            <p>NexSphere Global Advisors LLP provides professional accounting, taxation, payroll processing & return filing, Virtual CFO advisory, special project engagements, and compliance services. All engagements are subject to separate service agreements defining scope, fees, and timelines.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">3. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and design — is the exclusive property of NexSphere Global Advisors LLP. You may not reproduce or use our content without express written permission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">4. Disclaimer</h2>
            <p>Website content is for general informational purposes only and does not constitute professional accounting, legal, or tax advice. Always consult a qualified professional for advice specific to your situation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, NexSphere Global Advisors LLP shall not be liable for any indirect, incidental, or consequential damages arising from use of this website beyond the fees paid for the specific service engagement.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">6. Governing Law</h2>
            <p>These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in India.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">7. Contact</h2>
            <p>Questions? Contact us at <a href="mailto:info@thenexsphereglobal.com" className="text-royal hover:underline">info@thenexsphereglobal.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
