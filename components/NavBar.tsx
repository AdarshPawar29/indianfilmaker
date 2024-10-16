"use client";

import React from "react";
import useNavigationEffects from "@/hooks/useNavigationEffects";

interface NavLink {
  href: string;
  text: string;
}

const NavigationBar: React.FC = () => {
  const navRef = useNavigationEffects();

  const navLinks: NavLink[] = [
    { href: "/work", text: "Work" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="nav-bar" ref={navRef}>
      <div className="credits-top">
        <div className="btn btn-link btn-left-top">
          <a
            href="/"
            className="btn-click magnetic"
            data-strength="20"
            data-strength-text="10"
          >
            <span className="btn-text">indianfilmaker</span>
          </a>
        </div>
      </div>
      <ul className="links-wrap">
        {navLinks.map(({ href, text }) => (
          <li key={href} className="btn btn-link">
            <a
              href={href}
              className="btn-click magnetic"
              data-strength="20"
              data-strength-text="10"
            >
              <span className="btn-text">
                <span className="btn-text-inner">{text}</span>
              </span>
            </a>
          </li>
        ))}
        <li className="btn btn-link btn-menu">
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
  );
};

export default NavigationBar;
