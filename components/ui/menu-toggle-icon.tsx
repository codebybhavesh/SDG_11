'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean;
  duration?: number;
}

export function MenuToggleIcon({ open, duration = 300, className, ...props }: MenuToggleIconProps) {
  const style = { transition: `all ${duration}ms ease` };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('transition-transform', className)}
      {...props}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        style={{
          ...style,
          transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          transformOrigin: 'center',
        }}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style={{
          ...style,
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        style={{
          ...style,
          transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          transformOrigin: 'center',
        }}
      />
    </svg>
  );
}
