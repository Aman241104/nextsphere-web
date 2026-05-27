import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-gold text-navy hover:bg-amber-400 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] border-none',
    secondary: 'bg-white text-navy hover:bg-slate-100 shadow-xl border-none',
    outline: 'border border-white/20 text-white hover:bg-white/5 backdrop-blur-sm',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-[10px] tracking-[0.2em] font-black',
    md: 'px-8 py-4 text-xs tracking-[0.2em] font-black',
    lg: 'px-10 py-5 text-sm tracking-[0.2em] font-black',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl uppercase transition-all duration-500 active:scale-95 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      {/* Premium Shine Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </button>
  );
};
