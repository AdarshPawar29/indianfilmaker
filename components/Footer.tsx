"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
          timeZone: "Europe/Amsterdam",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-black text-white py-16 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-20">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h2 className="text-5xl font-bold leading-tight">
              Let's work
              <br />
              together
            </h2>
          </div>
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0"
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
        </div>

        <div className="border-t border-gray-800 pt-8 mb-12"></div>

        <div className="flex justify-between items-center mb-20">
          <div className="space-y-4">
            <div className="border border-gray-700 rounded-full py-3 px-6">
              <a
                href="mailto:info@dennissnellenberg.com"
                className="hover:text-gray-300 transition-colors"
              >
                info@dennissnellenberg.com
              </a>
            </div>
            <div className="border border-gray-700 rounded-full py-3 px-6">
              <a
                href="tel:+31627847430"
                className="hover:text-gray-300 transition-colors"
              >
                +31 6 27 84 74 30
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-8 px-8 rounded-full transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <div className="mb-2">
              <h5 className="text-sm font-semibold text-gray-500">VERSION</h5>
              <p className="text-sm">2022 © Edition</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-500">
                LOCAL TIME
              </h5>
              <p className="text-sm">{localTime} CEST</p>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-500 mb-2">
              SOCIALS
            </h5>
            <ul className="flex space-x-4">
              {[
                {
                  name: "Awwwards",
                  url: "https://www.awwwards.com/dennissnellenberg/",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/codebydennis/",
                },
                { name: "Twitter", url: "https://twitter.com/codebydennis" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/dennissnellenberg/",
                },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
