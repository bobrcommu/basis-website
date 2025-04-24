'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageOverlapSection() {
  return (
    <section className="relative z-20 mt-[-8vh] md:mt-[-6vh] mb-16 px-2 sm:px-4 lg:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {/* Scan Evere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[9/16] overflow-hidden rounded-lg sm:rounded-[32px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 sm:border-6 border-[#E6E0D0]"
          >
            <Image
              src="/scanevere.webp"
              alt="Scan Evere"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Browse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[9/16] overflow-hidden rounded-lg sm:rounded-[32px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 sm:border-6 border-[#E6E0D0]"
          >
            <Image
              src="/browse-evere-medallions.png"
              alt="Browse Evere Medallions"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Collab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[9/16] overflow-hidden rounded-lg sm:rounded-[32px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 sm:border-6 border-[#E6E0D0]"
          >
            <Image
              src="/collab-evere.png"
              alt="Collaborate with Evere"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Evere AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-[9/16] overflow-hidden rounded-lg sm:rounded-[32px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 sm:border-6 border-[#E6E0D0]"
          >
            <Image
              src="/evere-ai.png"
              alt="Evere AI"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
