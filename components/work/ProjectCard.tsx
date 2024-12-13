"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, imageUrl, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="project-card relative overflow-hidden group"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
    >
      <Link href={link}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 p-8 text-white z-10">
          <motion.h3 
            className="text-3xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-lg opacity-80"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {category}
          </motion.p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;