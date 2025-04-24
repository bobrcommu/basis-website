'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

// Fade-in animation for any component
export function FadeIn({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5 
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide-in from side animation
export function SlideIn({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5 
}: AnimationProps & { from?: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale animation on hover
export function ScaleOnHover({ 
  children, 
  className = '', 
  scale = 1.05 
}: AnimationProps & { scale?: number }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation
export function StaggerChildren({ 
  children, 
  className = '', 
  delay = 0,
  staggerDelay = 0.1
}: AnimationProps & { staggerDelay?: number }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
}

// Parallax scroll effect
export function ParallaxScroll({ 
  children, 
  className = '',
  speed = 0.5
}: AnimationProps & { speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Bounce animation
export function Bounce({ 
  children, 
  className = '', 
  delay = 0 
}: AnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -15, 0],
        transition: {
          delay,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse" as const
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Rotate on scroll
export function RotateOnScroll({ 
  children, 
  className = '',
  rotationFactor = 360
}: AnimationProps & { rotationFactor?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotationFactor]);
  
  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}

// Floating animation
export function FloatingAnimation({ 
  children, 
  className = '', 
  delay = 0 
}: AnimationProps) {
  return (
    <motion.div
      animate={{ 
        y: [0, 15, 0],
        transition: {
          delay,
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Reveal animation - from a color or cover
export function RevealFromCover({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  bgColor = 'bg-primary'
}: AnimationProps & { bgColor?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.4, duration }}
      >
        {children}
      </motion.div>
      <motion.div
        className={`absolute inset-0 ${bgColor} z-10`}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay,
          duration: 0.5,
          ease: "easeInOut" 
        }}
        style={{ transformOrigin: 'right' }}
      />
    </div>
  );
} 