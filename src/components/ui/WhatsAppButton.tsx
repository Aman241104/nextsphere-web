'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/contact';

export const WhatsAppButton = () => {
  const whatsappUrl = whatsappLink('Hello NexSphere! I would like to inquire about your services.');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};
