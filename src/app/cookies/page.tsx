import React from 'react';

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-black text-navy mb-8">Cookie Policy</h1>
      <div className="prose prose-lg text-slate-600">
        <p>This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website.</p>
        <p>We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent.</p>
      </div>
    </div>
  );
}
