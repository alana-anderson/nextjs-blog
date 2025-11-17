'use client';

import { useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import {
  FrameworkPrinciple,
  formatPrincipleTitle,
  getNextPrinciple,
} from '../lib/utils';
import { Navigation } from './Navigation';
import { Badge } from './Badge';

type DetailViewProps = {
  open: boolean;
  principle: FrameworkPrinciple | null;
  onClose: () => void;
  onNext: () => void;
};

export default function DetailView({
  open,
  principle,
  onClose,
  onNext,
}: DetailViewProps) {
  const router = useRouter();

  useEffect(() => {
    if (!open) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow || '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, onNext]);

  const handleAboutClick = useCallback(() => {
    onClose();
    router.push('/about');
  }, [onClose, router]);

  const nextPrinciple = useMemo(
    () => (principle ? getNextPrinciple(principle.id) : null),
    [principle],
  );

  if (!open || !principle) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/gradient-detail.png"
          alt=""
          fill
          priority
          className="pointer-events-none select-none object-cover"
        />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col">
        <header className="relative flex items-center justify-between px-6 pt-6 md:px-12">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-light.svg"
              alt="mad + kind"
              width={35}
              height={35}
              priority
            />
          </div>
          <Navigation
            tone="dark"
            onFrameworkClick={onClose}
            onAboutClick={handleAboutClick}
            frameworkActive
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail view"
            className="text-[var(--text-primary)] transition-opacity hover:opacity-70"
          >
            <X className="size-10" strokeWidth={3} />
          </button>
        </header>

        <div className="relative mx-auto w-full max-w-[var(--max-width-container)] flex-1 overflow-y-auto px-6 pb-40 pt-16 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex max-w-3xl flex-col gap-8 text-left"
          >
            <Badge
              label={principle.badgeText}
              color={principle.badgeColor}
              className="w-fit text-xs md:text-sm"
            />
            <div className="relative pb-6">
              <h2 className="font-serif font-heading text-[80px] leading-none tracking-[-0.1em] text-[var(--text-primary)] md:text-[128px]">
                {formatPrincipleTitle(principle)}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-semibold md:text-[28px]">
                {principle.number}{' '}
                <span className="font-serif italic tracking-tight">
                  {principle.description}.
                </span>
              </p>
              <div className="space-y-5 text-base font-medium leading-relaxed md:text-lg">
                {principle.fullDescription
                  .split('\n')
                  .filter((paragraph) => paragraph.trim().length > 0)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="relative mx-auto flex w-full max-w-[var(--max-width-container)] flex-col gap-10 px-6 pb-16 text-[var(--text-primary)] md:flex-row md:items-center md:justify-between md:px-12">
          {nextPrinciple ? (
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-3 font-serif text-2xl italic text-[var(--text-primary)] transition hover:opacity-70 md:text-3xl"
            >
              {nextPrinciple.title}
              <ArrowRight className="size-8" strokeWidth={3} />
            </button>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-4 text-4xl font-serif text-[var(--text-primary)]">
            madkind
            <Image
              src="/images/decor-burst.svg"
              alt=""
              width={80}
              height={51}
              className="rotate-[212deg]"
            />
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

