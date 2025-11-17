'use client';

import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'motion/react';
import { Hero } from '../components/Hero';
import { ExplanationSection } from '../components/ExplanationSection';
import {
  FrameworkPrinciple,
  getNextPrinciple,
} from '../lib/utils';

const DetailView = dynamic(() => import('../components/DetailView'), {
  ssr: false,
});

export default function HomePage() {
  const [selectedPrinciple, setSelectedPrinciple] =
    useState<FrameworkPrinciple | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const scrollToFramework = useCallback(() => {
    const element = document.getElementById('explanation');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSelectPrinciple = useCallback((principle: FrameworkPrinciple) => {
    setSelectedPrinciple(principle);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedPrinciple(null);
  }, []);

  const handleNextPrinciple = useCallback(() => {
    if (!selectedPrinciple) return;
    const next = getNextPrinciple(selectedPrinciple.id);
    setSelectedPrinciple(next);
  }, [selectedPrinciple]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Hero
        onFrameworkClick={scrollToFramework}
        showScrollIndicator={showScrollIndicator && !selectedPrinciple}
      />
      <ExplanationSection
        onSelect={handleSelectPrinciple}
        activePrincipleId={selectedPrinciple?.id}
      />
      <AnimatePresence>
        {selectedPrinciple ? (
          <DetailView
            key={selectedPrinciple.id}
            open
            principle={selectedPrinciple}
            onClose={handleCloseDetail}
            onNext={handleNextPrinciple}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

