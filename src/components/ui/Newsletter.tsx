'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="flex items-center space-x-3 text-gold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your professional email"
            className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none transition-all pr-16"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-2 bottom-2 bg-gold text-navy px-4 rounded-xl hover:bg-amber-600 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? '...' : <Send className="w-5 h-5" />}
          </button>
        </form>
      )}
    </div>
  );
};
