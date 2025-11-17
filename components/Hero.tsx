'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { cn } from '../lib/cn';

type HeroProps = {
  onFrameworkClick: () => void;
  showScrollIndicator: boolean;
};

export function Hero({ onFrameworkClick, showScrollIndicator }: HeroProps) {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-6 lg:px-12">
      <div className="absolute left-6 top-5 flex items-center gap-2 sm:left-8 sm:top-6">
        <Image
          src="/images/logo-dark.svg"
          alt="mad + kind"
          width={35}
          height={35}
          priority
        />
      </div>

      <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 lg:block">
        <Navigation onFrameworkClick={onFrameworkClick} />
      </div>

      <div className="absolute left-1/2 top-8 block -translate-x-1/2 lg:hidden">
        <Navigation onFrameworkClick={onFrameworkClick} />
      </div>

      <Image
        src="/images/scribble-heart.svg"
        alt=""
        width={280}
        height={200}
        priority
        className="pointer-events-none absolute top-[13%] left-[46%] hidden -translate-x-1/2 opacity-80 lg:block"
      />
      <Image
        src="/images/nice.svg"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute top-[16%] right-[18%] hidden rotate-[8deg] opacity-80 lg:block"
      />
      <Image
        src="/images/beaker.svg"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute top-[18%] left-12 hidden -rotate-[6deg] opacity-80 md:block"
      />
      <Image
        src="/images/skull.svg"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute bottom-36 left-1/3 hidden opacity-70 lg:block"
      />
      <Image
        src="/images/controller.svg"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute bottom-16 right-10 hidden opacity-80 lg:block"
      />

      <div className="mx-auto flex w-full max-w-[var(--max-width-container)] flex-col items-center justify-center gap-10 text-center">
        <div className="relative flex flex-col items-center gap-6 lg:gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={cn(
              'font-serif font-heading font-black leading-[0.8]',
              'text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px]',
              'text-gradient whitespace-nowrap normal-case',
            )}
          >
            mad + kind
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="font-serif text-lg italic text-[var(--text-secondary)] sm:text-xl md:text-2xl lg:text-[36px]"
          >
            A human (& AI*) operating system for{' '}
            <span className="relative inline-block">
              modern
              <Image
                src="/images/underline.svg"
                alt=""
                width={160}
                height={24}
                className="pointer-events-none absolute -bottom-6 left-1/2 w-[140px] -translate-x-1/2"
              />
            </span>{' '}
            leadership
          </motion.p>
        </div>
      </div>

      <Image
        src="/images/horizontal-rule.svg"
        alt=""
        width={1200}
        height={80}
        className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[80%] -translate-x-1/2 lg:block"
      />

      {showScrollIndicator ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-secondary)] sm:flex"
        >
          <span className="text-xs uppercase tracking-[0.4em]">
            Scroll
          </span>
          <div className="h-10 w-px animate-pulse bg-[var(--text-secondary)]" />
        </motion.div>
      ) : null}
    </section>
  );
}

