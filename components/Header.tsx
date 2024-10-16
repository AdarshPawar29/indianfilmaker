"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`flex justify-between items-center px-4 py-2 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Link href="/" className="text-xl font-bold">
          © Code by indianfilmaker
        </Link>
        {isScrolled ? (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <Menu className="h-6 w-6" />
          </button>
        ) : (
          <nav className="hidden md:flex space-x-4">
            <Link href="/work" className="hover:underline">
              Work
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        )}
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-900 text-white p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col space-y-4 mt-12">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/work" className="hover:text-gray-300">
                Work
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </nav>
            <div className="absolute bottom-4 left-4">
              <p className="text-sm text-gray-400">Socials</p>
              <div className="flex space-x-2 mt-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Awwwards
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
