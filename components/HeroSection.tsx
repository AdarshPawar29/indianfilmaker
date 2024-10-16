"use client";

import React from "react";
import Image from "next/image";
import { useNameAnimation } from "../hooks/useNameAnimation";

const HeroSection: React.FC = () => {
  const { containerRef, nameWrapRef } = useNameAnimation();

  return (
    <header
      ref={containerRef}
      className="home-header relative w-full h-screen bg-gray-300 overflow-hidden"
    >
      <div className="personal-image">
        <Image
          src="/DSC07033.jpg"
          alt="Bhavesh Katwale img"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
      </div>

      <div className="big-name">
        <div className="name-h1">
          <h1 className="font-neue text-white text-xl">
            <span ref={nameWrapRef} className="name-wrap">
              Bhavesh Katwale<span className="spacer">—</span>
            </span>
          </h1>
        </div>
      </div>

      <div className="absolute top-20 right-10 z-10 text-right">
        <p className="text-white text-2xl">Cinematographer</p>
        <p className="text-white text-2xl">Photographer</p>
      </div>
    </header>
  );
};

export default HeroSection;
