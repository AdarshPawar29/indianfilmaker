"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: -9999, left: -9999 }}
    />
  );
};

export default Cursor;