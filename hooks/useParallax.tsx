import { useEffect, useState } from "react";
import gsap from "gsap";

interface ParallaxMovement {
  x: { min: number; max: number };
  y: { min: number; max: number };
}

export const useParallax = (): ParallaxMovement => {
  const [movement] = useState<ParallaxMovement>({
    x: { min: 30, max: 40 },
    y: { min: -20, max: -40 },
  });

  useEffect(() => {
    const UPDATE = ({ x, y }: { x: number; y: number }): void => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    };

    window.addEventListener("mousemove", UPDATE);

    return () => {
      window.removeEventListener("mousemove", UPDATE);
    };
  }, []);

  return movement;
};
