import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  dark?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  badge,
  centered = false,
  dark = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12', centered ? 'text-center' : 'text-left')}>
      {badge && (
        <span className="inline-block text-gold font-bold tracking-widest uppercase text-sm mb-4">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-heading mb-6',
          dark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-3xl',
            centered && 'mx-auto',
            dark ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
