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

    const handleOrientation = ({
      beta,
      gamma,
    }: DeviceOrientationEvent): void => {
      if (beta === null || gamma === null) return;

      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      gsap.set(document.documentElement, {
        "--x": gsap.utils.clamp(
          -1,
          1,
          isLandscape
            ? gsap.utils.mapRange(-45, 45, -1, 1, beta)
            : gsap.utils.mapRange(-45, 45, -1, 1, gamma)
        ),
        "--y": gsap.utils.clamp(
          -1,
          1,
          isLandscape
            ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma))
            : gsap.utils.mapRange(20, 70, 1, -1, beta)
        ),
      });
    };

    const START = async (): Promise<void> => {
      if (DeviceOrientationEvent?.requestPermission) {
        try {
          const results = await Promise.all([
            DeviceOrientationEvent.requestPermission(),
          ]);
          if (results.every((result) => result === "granted")) {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (error) {
          console.error(
            "Error requesting device orientation permission:",
            error
          );
        }
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    window.addEventListener("mousemove", UPDATE);
    document.body.addEventListener("click", START, { once: true });

    return () => {
      window.removeEventListener("mousemove", UPDATE);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return movement;
};
