"use client";

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ScrollReveal from '../animations/ScrollReveal';

const projects = [
  {
    title: "Project One",
    category: "Photography",
    imageUrl: "/assets/imgs/project1.jpg",
    link: "/work/project-1"
  },
  {
    title: "Project Two",
    category: "Cinematography",
    imageUrl: "/assets/imgs/project2.jpg",
    link: "/work/project-2"
  },
  // Add more projects as needed
];

const ProjectGrid = () => {
  return (
    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-16">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </ScrollReveal>
  );
};

export default ProjectGrid;