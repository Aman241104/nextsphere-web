import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-black text-navy mb-8">Privacy Policy</h1>
      <div className="prose prose-lg text-slate-600">
        <p>Your privacy is important to us. It is NEXSPHERE GLOBAL ADVISORS LLP's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <h2 className="text-2xl font-bold text-navy mt-8">Information We Collect</h2>
        <p>We may collect information such as your name, email address, and company name when you fill out our contact forms or subscribe to our newsletter.</p>
        {/* Further policy text would go here */}
      </div>
    </div>
  );
}
