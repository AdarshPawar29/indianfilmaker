"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import NavigationBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { usePageTransition } from '@/components/animations/usePageTransition';
import { motion } from 'framer-motion';

export default function About() {
  usePageTransition();

  return (
    <div className="bg-black min-h-screen">
      <NavigationBar className="theme-dark" />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              About Me
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/DSC07033.jpg"
                  alt="Bhavesh Katwale"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="text-white">
              <div className="space-y-8">
                <p className="text-xl leading-relaxed">
                  I'm a cinematographer and photographer based in Mumbai, India, specializing in creating compelling visual narratives through the lens.
                </p>
                <p className="text-xl leading-relaxed">
                  With years of experience in both commercial and artistic projects, I bring stories to life through careful attention to composition, lighting, and emotion.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Experience</h3>
                  <ul className="space-y-4">
                    <li>• 10+ years in professional photography</li>
                    <li>• Worked with leading brands and publications</li>
                    <li>• Specialized in documentary and narrative filmmaking</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}