import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'royal' | 'gray';
}

export const Badge = ({ children, className, variant = 'gold' }: BadgeProps) => {
  const variants = {
    gold: 'bg-amber-100 text-amber-700 border-amber-200',
    royal: 'bg-blue-100 text-blue-700 border-blue-200',
    gray: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
