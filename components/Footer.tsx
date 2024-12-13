"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from './animations/ScrollReveal';
import { motion } from 'framer-motion';

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollReveal>
      <footer className="bg-black text-white py-16 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex justify-between items-start mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 overflow-hidden rounded-full">
                <Image
                  src="/DSC07033.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Let&apos;s work
                <br />
                together
              </h2>
            </div>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/contact">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <div className="border-t border-gray-800 pt-8 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="space-y-4">
              <motion.div 
                className="border border-gray-700 rounded-full py-3 px-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a href="mailto:info@indianfilmaker.com" className="hover:text-gray-300 transition-colors">
                  info@indianfilmaker.com
                </a>
              </motion.div>
              <motion.div 
                className="border border-gray-700 rounded-full py-3 px-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a href="tel:+919619511017" className="hover:text-gray-300 transition-colors">
                  +91 96195 11017
                </a>
              </motion.div>
            </div>
            <div className="flex justify-end">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-8 px-8 rounded-full transition-colors inline-block"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="space-y-4 mb-8 md:mb-0">
              <div>
                <h5 className="text-sm font-semibold text-gray-500">VERSION</h5>
                <p className="text-sm">2024 © Edition</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-500">LOCAL TIME</h5>
                <p className="text-sm">{localTime} IST</p>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-500 mb-4">SOCIALS</h5>
              <ul className="flex flex-wrap gap-4">
                {[
                  {
                    name: "YouTube",
                    url: "https://www.youtube.com/@BhaveshKatwaleplus",
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/indianfilmaker/",
                  },
                  {
                    name: "Twitter",
                    url: "https://twitter.com/indianfilmaker",
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/indianfilmaker/",
                  },
                ].map((social) => (
                  <motion.li 
                    key={social.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      {social.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}