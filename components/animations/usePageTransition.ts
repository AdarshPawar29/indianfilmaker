import { useEffect } from 'react';
import gsap from 'gsap';

export const usePageTransition = () => {
  useEffect(() => {
    // Page enter animation
    const enterAnimation = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    enterAnimation
      .fromTo('.page-transition', {
        y: '100%',
      }, {
        y: '0%',
        duration: 1,
        stagger: 0.2,
      })
      .fromTo('.fade-in', {
        y: 60,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }, '-=0.5');

    return () => {
      enterAnimation.kill();
    };
  }, []);
};