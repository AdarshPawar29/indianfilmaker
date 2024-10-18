"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import useNavigationEffects from "@/hooks/useNavigationEffects";
import { gsap } from "gsap";

interface NavLink {
  href: string;
  text: string;
}

interface NavigationBarProps {
  className?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ className = "" }) => {
  const navRef = useNavigationEffects();
  const [showHamburger, setShowHamburger] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowHamburger(true);
    } else {
      if (showHamburger) {
        setShowHamburger(false);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.classList.remove("nav-active");
      gsap.to(".fixed-nav", { x: "100%", ease: "power4.inOut", duration: 0.8 });
    } else {
      document.body.classList.add("nav-active");
      gsap.to(".fixed-nav", { x: "0%", ease: "power4.inOut", duration: 0.8 });
    }
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navLinks: NavLink[] = [
    { href: "/work", text: "Work" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className={className} ref={navRef}>
      {showHamburger && (
        <div
          className={`btn btn-hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div
            className="btn-click magnetic"
            data-strength="50"
            data-strength-text="25"
          >
            <div className="btn-fill"></div>
            <div className="btn-text">
              <div className="btn-bars"></div>
              <span className="btn-text-inner">Menu</span>
            </div>
          </div>
        </div>
      )}

      <div className="overlay fixed-nav-back"></div>
      <div className="fixed-nav">
        <div className="fixed-nav-rounded-div">
          <div className="rounded-div-wrap">
            <div className="rounded-div"></div>
          </div>
        </div>
        <div className="fixed-nav-inner">
          <div className="row nav-row">
            <h5>Navigation</h5>
            <div className="stripe"></div>
            <ul className="links-wrap">
              <li className="btn btn-link active">
                <Link
                  href="/"
                  className="btn-click magnetic"
                  data-strength="24"
                  data-strength-text="12"
                  onClick={handleNavLinkClick}
                >
                  <span className="btn-text">
                    <span className="btn-text-inner">Home</span>
                  </span>
                </Link>
              </li>
              {navLinks.map(({ href, text }) => (
                <li key={href} className="btn btn-link">
                  <Link
                    href={href}
                    className="btn-click magnetic"
                    data-strength="24"
                    data-strength-text="12"
                    onClick={handleNavLinkClick}
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">{text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="row social-row">
            <div className="stripe"></div>
            <div className="socials">
              <h5>Socials</h5>
              <ul>
                <li className="btn btn-link btn-link-external">
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                    rel="noopener noreferrer"
                    onClick={handleNavLinkClick}
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">Instagram</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="credits-top">
          <div className="btn btn-link btn-left-top">
            <Link
              href="/"
              className="btn-click magnetic"
              data-strength="20"
              data-strength-text="10"
              onClick={handleNavLinkClick}
            >
              <span className="btn-text">indianfilmaker</span>
            </Link>
          </div>
        </div>
        <ul className="links-wrap">
          {navLinks.map(({ href, text }) => (
            <li key={href} className="btn btn-link">
              <Link
                href={href}
                className="btn-click magnetic"
                data-strength="20"
                data-strength-text="10"
                onClick={handleNavLinkClick}
              >
                <span className="btn-text">
                  <span className="btn-text-inner">{text}</span>
                </span>
              </Link>
            </li>
          ))}
          <li className="btn btn-link btn-menu" onClick={toggleMenu}>
            <div
              className="btn-click magnetic"
              data-strength="20"
              data-strength-text="10"
            >
              <div className="btn-text">
                <span className="btn-text-inner">Menu</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
