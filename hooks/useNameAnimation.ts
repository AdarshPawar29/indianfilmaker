import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useNameAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameWrapRef = useRef<HTMLSpanElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  const setPositions = useCallback(
    (element: HTMLElement, clone: HTMLElement) => {
      const width = element.offsetWidth;
      gsap.set(clone, {
        position: "absolute",
        top: element.offsetTop,
        left: width,
        width: width,
      });
    },
    []
  );

  useEffect(() => {
    if (!nameWrapRef.current || !containerRef.current) return;

    const element = nameWrapRef.current;
    const container = containerRef.current;

    const clone = element.cloneNode(true) as HTMLElement;
    clone.classList.add("name-wrap-clone");
    element.parentNode?.appendChild(clone);

    setPositions(element, clone);

    const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10);
      },
    });

    tl.to([element, clone], {
      xPercent: -100,
      ease: "none",
      duration: 20,
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
      setPositions(element, clone);
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
  }, [setPositions]);

  return { containerRef, nameWrapRef };
};
