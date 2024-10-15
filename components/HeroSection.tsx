"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RollProps {
  duration: number;
  ease?: string;
}

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll = (
      target: string,
      vars: RollProps,
      reverse: boolean = false
    ) => {
      const element = document.querySelector(target) as HTMLElement;
      if (!element) return gsap.timeline();

      const clone = element.cloneNode(true) as HTMLElement;
      element.parentNode?.appendChild(clone);

      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10);
        },
      });

      const positionClone = () => {
        gsap.set(clone, {
          position: "absolute",
          top: element.offsetTop,
          left:
            element.offsetLeft +
            (reverse ? -element.offsetWidth : element.offsetWidth),
        });
      };

      positionClone();

      tl.to([element, clone], {
        xPercent: reverse ? 100 : -100,
        ...vars,
        ease: vars.ease || "none",
      });

      const resizeObserver = new ResizeObserver(() => {
        const time = tl.totalTime();
        tl.pause();
        positionClone();
        tl.resume();
        tl.totalTime(time);
      });

      resizeObserver.observe(element);

      return tl;
    };

    const roll1 = roll(".big-name .name-wrap", { duration: 18 });

    const scroll = ScrollTrigger.create({
      trigger: containerRef.current,
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to([roll1], { timeScale: direction, overwrite: true });
        }
      },
    });

    return () => {
      scroll.kill();
      roll1.kill();
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
            <span className="name-wrap">
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
