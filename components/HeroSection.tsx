"use client";

import React from "react";
import Image from "next/image";
import { useNameAnimation } from "@/hooks/useNameAnimation";

const HeroSection: React.FC = () => {
  const { containerRef, nameWrapRef } = useNameAnimation();

  return (
    <header
      ref={containerRef}
      className="home-header relative w-full h-screen bg-gray-300 overflow-hidden"
    >
      <div className="personal-image">
        {/* <Image
          src="/DSC07033.jpg"
          alt="Bhavesh Katwale img"
          width={0}
          height={0}
          sizes="100vw"
          priority
        /> */}
        <Image
          src="/bg.png"
          alt="Bhavesh Katwale img"
          width={0}
          height={0}
          sizes="100vw"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="overlay get-height">
        <div className="hanger">
          <p className="font-neue text-white text-xl">
            <span>Located </span>
            <span>in Mumbai, India </span>
          </p>
          <Image
            src="/hanger.svg"
            alt="Hanger BG"
            width={300}
            height={121}
            priority
          />
          <div className="digital-ball">
            <div className="overlay"></div>
            <div className="globe">
              <div className="globe-wrap">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle-hor"></div>
                <div className="circle-hor-middle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="absolute text-left left-[10%] md:left-2/3">
          <div className="absolute -top-full">
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={25}
              height={25}
              sizes="100vw"
              priority
            />
          </div>
          <h4 className="font-neue text-white leading-snug">
            <span className="block">Freelance</span> Cinematographer &
            Photographer
          </h4>
        </div>
      </div>

      <div className="big-name">
        <div className="name-h1">
          <h1 className="font-neue text-white text-xl">
            <span ref={nameWrapRef} className="name-wrap">
              Bhavesh K.<span className="spacer">—</span>Bhavesh K.
              <span className="spacer">—</span>
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
