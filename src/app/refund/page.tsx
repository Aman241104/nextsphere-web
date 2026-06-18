import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'NexSphere Global Advisors LLP Refund Policy for professional accounting, payroll, and advisory services.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/refund' },
  robots: { index: false },
};

export default function RefundPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-black text-navy mb-4">Refund Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: June 2026</p>
        <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy">Our Commitment</h2>
            <p>NexSphere Global Advisors LLP is committed to delivering the highest quality accounting, payroll, taxation, and advisory services. Your satisfaction is our measure of success.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Raising a Concern</h2>
            <p>If you are not satisfied with a delivered service, please contact us within <strong>14 days</strong> of delivery at <a href="mailto:info@thenexsphereglobal.com" className="text-royal hover:underline">info@thenexsphereglobal.com</a>. We will review your concern promptly and work to resolve it.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Refund Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds are assessed on a case-by-case basis and subject to the terms of your individual service agreement.</li>
              <li>Retainer and subscription-based services are non-refundable for the period already rendered.</li>
              <li>If a deliverable has not been commenced, a full or partial refund may be provided at our discretion.</li>
              <li>Special project engagements follow the milestone-based refund terms specified in the project agreement.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Processing</h2>
            <p>Approved refunds are processed within 10–14 business days to the original payment method. Government fees, third-party filing fees, and out-of-pocket costs are non-refundable.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Contact</h2>
            <p>For refund queries, email <a href="mailto:info@thenexsphereglobal.com" className="text-royal hover:underline">info@thenexsphereglobal.com</a> or call +91 99297 49855.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
