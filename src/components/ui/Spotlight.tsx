'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const SpotlightCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(245, 158, 11, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export const SpotlightSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const springX = useSpring(mouseX, { damping: 30, stiffness: 50 });
    const springY = useSpring(mouseY, { damping: 30, stiffness: 50 });
  
    function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }
  
    return (
      <div
        onMouseMove={handleMouseMove}
        className={`relative ${className}`}
      >
        <motion.div
          className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
          style={{
            background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(29, 78, 216, 0.03), transparent 70%)`,
          }}
        />
        <div className="relative z-10">
            {children}
        </div>
      </div>
    );
  };
