'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { FrameworkPrinciple, frameworkPrinciples } from '../lib/utils';
import { Badge } from './Badge';
import { cn } from '../lib/cn';

type ExplanationSectionProps = {
  onSelect: (principle: FrameworkPrinciple) => void;
  activePrincipleId?: number | null;
};

export function ExplanationSection({
  onSelect,
  activePrincipleId,
}: ExplanationSectionProps) {
  return (
    <section
      id="explanation"
      className="relative w-full bg-[var(--bg-primary)] px-6 py-24 sm:px-10 md:px-16"
    >
      <Image
        src="/images/stars.svg"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute -top-12 -left-4 hidden opacity-80 lg:block"
      />
      <Image
        src="/images/scribble-curly.svg"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute bottom-[12%] right-0 hidden opacity-80 lg:block"
      />
      <div className="mx-auto flex w-full max-w-[var(--max-width-container)] flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="font-serif font-heading text-[40px] text-[var(--text-primary)] sm:text-[48px] md:text-[56px] lg:text-[64px]">
            The Framework
          </h2>
          <p className="max-w-3xl font-serif text-[18px] italic text-[var(--text-secondary)] sm:text-[20px] md:text-[24px]">
            A comprehensive approach to modern leadership combining human
            wisdom with AI-powered insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {frameworkPrinciples.map((card, index) => (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => onSelect(card)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={cn(
                'group relative flex aspect-square flex-col overflow-hidden rounded-[18px] border border-[#4B5563] bg-[#1F2937] p-5 text-left transition-all duration-150 hover:bg-[#374151] cursor-pointer opacity-100 transform-none',
                activePrincipleId === card.id &&
                  'ring-2 ring-[var(--text-accent-purple)]',
              )}
              style={{ backgroundColor: '#1F2937' }}
            >
              <div className="pointer-events-none absolute inset-[1px] rounded-[18px] border border-[#4B5563]" />
              <span className="font-serif text-[48px] italic font-black text-[var(--text-accent-purple)] sm:text-[56px] md:text-[64px] lg:text-[64px]">
                {card.letter}
              </span>

              <div className="mt-2 flex flex-col gap-2">
                <span className="text-[14px] font-medium text-[var(--text-secondary)]">
                  {card.title}
                </span>
                <span className="text-[13px] text-[var(--text-tertiary)]">
                  {card.description}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 text-[12px] font-medium text-[var(--text-primary)]">
                <span className="text-[var(--text-secondary)]">
                  {card.number}
                </span>
                <Badge label={card.badgeText} color={card.badgeColor} />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-center text-[var(--text-secondary)] sm:flex-row sm:text-left">
          <p className="max-w-[420px] text-sm leading-relaxed">
            *AI insights reflect leadership best practices augmented by
            data-powered observations. Human judgment stays in the loop.
          </p>
          <a
            href="https://www.linkedin.com/in/the-alana-anderson/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-sm text-[var(--text-secondary)] underline-offset-2 transition hover:text-[var(--text-primary)] hover:underline"
          >
            <span className="relative flex items-center gap-3 text-2xl font-serif lowercase tracking-tight text-[var(--text-primary)]">
              madkind
              <Image
                src="/images/decor-burst.svg"
                alt=""
                width={80}
                height={51}
                className="rotate-[212deg]"
              />
            </span>
            <span>Made with &lt;3 by Alana Anderson</span>
          </a>
        </div>
      </div>
    </section>
  );
}

