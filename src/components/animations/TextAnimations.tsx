'use client';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

// Types for all text animation components
type TextAnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

// Fade In animation
export function FadeInText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true
}: TextAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide Up animation
export function SlideUpText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true
}: TextAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Letter by letter animation
export function LetterByLetterText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true
}: TextAnimationProps) {
  // Convert children to string if possible
  const text = React.Children.toArray(children).join('');
  
  // Animation variants for letters
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
        duration: duration / 2,
      },
    }),
  };

  return (
    <motion.div 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Gradient Text animation
export function GradientText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1.5,
  once = true
}: TextAnimationProps) {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 50%' }}
      whileInView={{ backgroundPosition: '100% 50%' }}
      viewport={{ once }}
      transition={{ 
        delay, 
        duration, 
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark ${className}`}
      style={{ backgroundSize: '200% 200%' }}
    >
      {children}
    </motion.div>
  );
}

// Scale text animation
export function ScaleText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true
}: TextAnimationProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Word by word animation
export function WordByWordText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  once = true
}: TextAnimationProps) {
  // Convert children to string if possible
  const text = React.Children.toArray(children).join('');
  const words = text.split(' ');
  
  // Animation variants for words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.15,
        duration,
      },
    }),
  };

  return (
    <motion.div 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            custom={index}
            variants={wordVariants}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && '\u00A0'}
        </React.Fragment>
      ))}
    </motion.div>
  );
}

// Typing text animation with cursor
export function TypingText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 2,
  once = true
}: TextAnimationProps) {
  // Convert children to string if possible
  const text = React.Children.toArray(children).join('');
  
  const textVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        delay,
        duration,
      },
    },
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1],
      transition: {
        delay,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={textVariants}
        className="overflow-hidden whitespace-nowrap"
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate="blinking"
        variants={cursorVariants}
        className="h-full w-[2px] bg-current ml-1"
      />
    </div>
  );
} 