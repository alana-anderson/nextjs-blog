'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { aboutContent } from '../lib/utils';
import { Navigation } from './Navigation';

export function About() {
  const router = useRouter();

  const handleFrameworkClick = () => {
    router.push('/#explanation');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-primary)] px-6 py-12 sm:px-10 md:px-16">
      <Image
        src="/images/terminal.svg"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute top-[40%] left-[4%] opacity-60"
      />
      <Image
        src="/images/skull.svg"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute bottom-[25%] right-[35%] opacity-60"
      />
      <div className="mx-auto flex w-full max-w-[1055px] flex-col gap-14">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 top-0 flex items-center">
            <Image
              src="/images/logo-dark.svg"
              alt="mad + kind"
              width={35}
              height={35}
              priority
            />
          </div>
          <Navigation
            onFrameworkClick={handleFrameworkClick}
            frameworkLabel="Framework"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative grid gap-10 rounded-[32px] bg-[var(--decorative-dark)]/55 p-8 md:grid-cols-[minmax(0,1fr)_360px] md:p-12"
        >
          <div className="flex flex-col gap-8 text-[var(--text-primary)]">
            <div className="flex flex-col gap-4">
              <h1 className="font-serif font-heading text-about-gradient text-[64px] leading-[0.9] tracking-[-0.1em] sm:text-[80px] md:text-[96px] lg:text-[128px]">
                About
              </h1>
              <p className="font-serif text-[20px] italic text-[var(--text-primary)] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                {aboutContent.title}
              </p>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)] sm:text-sm">
              {aboutContent.name}
            </span>

            <div className="space-y-5 text-[14px] leading-7 text-[var(--text-secondary)] sm:text-[15px] md:text-base">
              {aboutContent.bio.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={aboutContent.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#1e293b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)] transition hover:bg-[#2d3748]"
            >
              <ArrowUpRight className="size-5" />
              Get in touch
            </a>
          </div>

          <div className="relative mt-12 flex w-full justify-center lg:mt-0">
            <div className="relative w-[180px] pt-[180px] sm:w-[200px] sm:pt-[200px] lg:w-[220px] lg:pt-[220px]">
              <Image
                src="/images/mepic.svg"
                alt="Alana Anderson illustration"
                width={220}
                height={220}
                className="pointer-events-none absolute top-0 left-1/2 w-full -translate-x-1/2 drop-shadow-[0_20px_60px_rgba(19,43,89,0.45)]"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex justify-end text-[var(--text-primary)]">
          <div className="flex items-center gap-4 font-serif text-[48px] leading-none tracking-tight md:text-[64px] lg:text-[72px]">
            madkind
            <Image
              src="/images/decor-burst.svg"
              alt=""
              width={80}
              height={51}
              className="rotate-[212deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

