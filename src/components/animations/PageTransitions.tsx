'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

// Fade transition
export function FadeTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Slide transition
export function SlideTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Fade up transition
export function FadeUpTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Scale transition
export function ScaleTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Page transition with overlay
export function OverlayTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
        <motion.div
          key={`overlay-${pathname}`}
          className="fixed inset-0 bg-primary z-50 pointer-events-none"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ 
            scaleY: [0, 1, 1, 0],
            originY: [0, 0, 1, 1],
            transition: { duration: 1, times: [0, 0.4, 0.6, 1] }
          }}
        />
      </AnimatePresence>
    </div>
  );
}

// Main Page Transition component that can be used in layout.tsx
export function PageTransition({ 
  children,
  type = 'fade'
}: PageTransitionProps & { type?: 'fade' | 'slide' | 'fadeUp' | 'scale' | 'overlay' }) {
  switch (type) {
    case 'slide':
      return <SlideTransition>{children}</SlideTransition>;
    case 'fadeUp':
      return <FadeUpTransition>{children}</FadeUpTransition>;
    case 'scale':
      return <ScaleTransition>{children}</ScaleTransition>;
    case 'overlay':
      return <OverlayTransition>{children}</OverlayTransition>;
    default:
      return <FadeTransition>{children}</FadeTransition>;
  }
} 