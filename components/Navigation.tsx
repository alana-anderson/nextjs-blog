'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipArrow } from './ui/tooltip';
import { cn } from '../lib/cn';

type NavigationProps = {
  tone?: 'dark' | 'light';
  onFrameworkClick?: () => void;
  frameworkActive?: boolean;
  frameworkLabel?: string;
  aboutLabel?: string;
  onAboutClick?: () => void;
};

const navBaseStyles =
  'text-xs sm:text-sm font-medium tracking-wide transition-colors duration-150';

export function Navigation({
  tone = 'dark',
  onFrameworkClick,
  frameworkActive,
  frameworkLabel = 'Framework',
  aboutLabel = 'About',
  onAboutClick,
}: NavigationProps) {
  const pathname = usePathname();

  const baseColor =
    tone === 'dark'
      ? 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      : 'text-[var(--text-dark)]/70 hover:text-[var(--text-dark)]';

  const activeColor =
    tone === 'dark'
      ? 'text-[var(--text-primary)]'
      : 'text-[var(--text-dark)]';

  const frameworkColor = frameworkActive ? activeColor : baseColor;
  const isAboutActive = pathname === '/about';

  return (
    <nav
      className={cn(
        'flex items-center justify-center gap-10 sm:gap-16 xl:gap-[94px]',
      )}
      aria-label="Primary navigation"
    >
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <span
              className={cn(
                navBaseStyles,
                baseColor,
                'inline-flex items-center gap-1 cursor-default select-none',
              )}
            >
              WORK
              <ChevronDown strokeWidth={2} className="size-4" />
            </span>
          </TooltipTrigger>
          <TooltipContent>
            Coming soon
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <button
        type="button"
        onClick={onFrameworkClick}
        className={cn(navBaseStyles, frameworkColor, 'uppercase')}
      >
        {frameworkLabel}
      </button>

      {onAboutClick ? (
        <button
          type="button"
          onClick={onAboutClick}
          className={cn(
            navBaseStyles,
            'uppercase',
            isAboutActive ? activeColor : baseColor,
          )}
        >
          {aboutLabel}
        </button>
      ) : (
        <Link
          href="/about"
          className={cn(
            navBaseStyles,
            'uppercase',
            isAboutActive ? activeColor : baseColor,
          )}
          aria-current={isAboutActive ? 'page' : undefined}
        >
          {aboutLabel}
        </Link>
      )}
    </nav>
  );
}

