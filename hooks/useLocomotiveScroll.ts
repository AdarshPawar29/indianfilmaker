import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const useLocomotiveScroll = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Clean up
    return () => {
      scroll.destroy();
    };
  }, []);
};