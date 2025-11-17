'use client';

import { cn } from '../lib/cn';
import { BadgeColor, badgeStyles } from '../lib/utils';

type BadgeProps = {
  label: string;
  color: BadgeColor;
  className?: string;
};

export function Badge({ label, color, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-badge)] px-3 py-1 text-[12px] font-medium uppercase tracking-[0.12em]',
        badgeStyles[color],
        className,
      )}
    >
      {label}
    </span>
  );
}

