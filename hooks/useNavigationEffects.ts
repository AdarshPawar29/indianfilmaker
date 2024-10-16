import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

type AnimateProps = {
  element: HTMLElement;
  x: number;
  y: number;
  duration: number;
  ease: string;
};

const useNavigationEffects = (): RefObject<HTMLDivElement> => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current || window.innerWidth <= 540) return;

    const magnets = navRef.current.querySelectorAll<HTMLElement>(".magnetic");
    const strength = 100;

    const animateMagnet = ({ element, x, y, duration, ease }: AnimateProps) => {
      gsap.to(element, { duration, x, y, rotate: "0.001deg", ease });
    };

    const moveMagnet = (event: MouseEvent) => {
      const magnetButton = event.currentTarget as HTMLElement;
      const bounding = magnetButton.getBoundingClientRect();
      const magnetsStrength = Number(magnetButton.dataset.strength) || strength;
      const magnetsStrengthText =
        Number(magnetButton.dataset.strengthText) || strength / 2;

      const xRatio =
        (event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5;
      const yRatio =
        (event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5;

      animateMagnet({
        element: magnetButton,
        x: xRatio * magnetsStrength,
        y: yRatio * magnetsStrength,
        duration: 1.5,
        ease: "power4.out",
      });

      const btnText = magnetButton.querySelector<HTMLElement>(".btn-text");
      if (btnText) {
        animateMagnet({
          element: btnText,
          x: xRatio * magnetsStrengthText,
          y: yRatio * magnetsStrengthText,
          duration: 1.5,
          ease: "power4.out",
        });
      }
    };

    const resetMagnet = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      animateMagnet({
        element: target,
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      });

      const btnText = target.querySelector<HTMLElement>(".btn-text");
      if (btnText) {
        animateMagnet({
          element: btnText,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const btnFill = target.querySelector<HTMLElement>(".btn-fill");
      const btnTextInner = target.querySelector<HTMLElement>(
        ".btn-text-inner.change"
      );

      if (btnFill)
        gsap.to(btnFill, { duration: 0.6, y: "0%", ease: "power2.inOut" });
      if (btnTextInner)
        gsap.to(btnTextInner, {
          duration: 0.3,
          color: "#FFFFFF",
          ease: "power3.in",
        });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const btnFill = target.querySelector<HTMLElement>(".btn-fill");
      const btnTextInner = target.querySelector<HTMLElement>(
        ".btn-text-inner.change"
      );

      if (btnFill)
        gsap.to(btnFill, { duration: 0.6, y: "-76%", ease: "power2.inOut" });
      if (btnTextInner)
        gsap.to(btnTextInner, {
          duration: 0.3,
          color: "#1C1D20",
          ease: "power3.out",
          delay: 0.3,
        });
    };

    const addListeners = (magnet: HTMLElement) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseleave", resetMagnet);
      magnet.addEventListener("mouseenter", handleMouseEnter);
      magnet.addEventListener("mouseleave", handleMouseLeave);
    };

    const removeListeners = (magnet: HTMLElement) => {
      magnet.removeEventListener("mousemove", moveMagnet);
      magnet.removeEventListener("mouseleave", resetMagnet);
      magnet.removeEventListener("mouseenter", handleMouseEnter);
      magnet.removeEventListener("mouseleave", handleMouseLeave);
    };

    magnets.forEach(addListeners);

    return () => magnets.forEach(removeListeners);
  }, []);

  return navRef;
};

export default useNavigationEffects;
