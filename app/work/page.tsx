"use client";

import { useEffect } from 'react';
import NavigationBar from '@/components/NavBar';
import ProjectGrid from '@/components/work/ProjectGrid';
import Footer from '@/components/Footer';
import { usePageTransition } from '@/components/animations/usePageTransition';
import { motion } from 'framer-motion';

export default function Work() {
  usePageTransition();

  return (
    <div className="bg-black min-h-screen">
      <NavigationBar className="theme-dark" />
      
      <main className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 md:px-8 mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Selected Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A collection of my best cinematography and photography projects.
          </p>
        </motion.div>

        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
}