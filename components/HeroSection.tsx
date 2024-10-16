"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameWrapRef = useRef<HTMLSpanElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!nameWrapRef.current || !containerRef.current) return;

    const element = nameWrapRef.current;
    const container = containerRef.current;

    // Create a single clone
    const clone = element.cloneNode(true) as HTMLElement;
    clone.classList.add("name-wrap-clone");
    element.parentNode?.appendChild(clone);

    const setPositions = () => {
      const width = element.offsetWidth;
      gsap.set(clone, {
        position: "absolute",
        top: element.offsetTop,
        left: width,
        width: width,
      });
    };

    setPositions();

    const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10);
      },
    });

    tl.to([element, clone], {
      xPercent: -100,
      ease: "none",
      duration: 10,
    });

    setTimeline(tl);

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const direction = self.direction === 1 ? 1 : -1;
        gsap.to(tl, { timeScale: direction, overwrite: true });
      },
    });

    const resizeObserver = new ResizeObserver(() => {
      setPositions();
      tl.invalidate().restart();
      ScrollTrigger.refresh();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
      tl.kill();
      scrollTrigger.kill();
      clone.remove();
    };
  }, []);

  return (
    <header
      ref={containerRef}
      className="home-header relative w-full h-screen bg-gray-300 overflow-hidden"
    >
      <div className="personal-image">
        <Image
          src="/DSC07033.jpg"
          alt="Bhavesh Katwale"
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
