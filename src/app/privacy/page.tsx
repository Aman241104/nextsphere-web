import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NexSphere Global Advisors LLP Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.thenexsphereglobal.com/privacy' },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-black text-navy mb-4">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy">1. Introduction</h2>
            <p>
              NexSphere Global Advisors LLP (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>www.thenexsphereglobal.com</strong> or engage our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">2. Information We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name submitted via our contact forms or newsletter subscription.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time on site, and referring URLs collected automatically via analytics tools.</li>
              <li><strong>Financial Data:</strong> Information shared voluntarily as part of an engagement (e.g., tax returns, payroll data) — handled under strict confidentiality agreements.</li>
              <li><strong>Communications:</strong> Records of correspondence when you contact us via email or WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and deliver requested services.</li>
              <li>To send newsletters, insights, and service updates (with your consent).</li>
              <li>To improve our website experience and analyse usage trends.</li>
              <li>To comply with legal obligations and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">4. Data Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (e.g., cloud storage, email platforms) who assist in our operations, subject to confidentiality obligations. We may disclose data if required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">5. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption, access controls, and secure cloud platforms to protect your data against unauthorised access, disclosure, or loss. Client financial data is handled under dedicated data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete personal data we hold about you. To exercise these rights, contact us at <a href="mailto:info@thenexsphereglobal.com" className="text-royal hover:underline">info@thenexsphereglobal.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">7. Contact Us</h2>
            <p>
              For any privacy-related questions, please contact:<br />
              <strong>NexSphere Global Advisors LLP</strong><br />
              Email: <a href="mailto:info@thenexsphereglobal.com" className="text-royal hover:underline">info@thenexsphereglobal.com</a><br />
              Phone: +91 99297 49855
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
