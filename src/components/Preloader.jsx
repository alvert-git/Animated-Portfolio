import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

// Utility function to split text into spans for animation (no longer needed, but kept for safety)
const splitText = (text) => {
  return text.split('').map((char, index) => (
    <span key={index} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  // loadingTextRef is no longer needed, but we keep the other refs
  const counterRef = useRef(null);
  const preloaderRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // The wavy animation for "Loading..." text is removed.

      // Counter animation (duration kept at 3.5s from your last version)
      gsap.to(counterRef.current, {
        innerText: 100,
        duration: 3.5,
        snap: { innerText: 1 },
        ease: 'power1.inOut',
        onUpdate: function() {
          setCounter(Math.round(this.targets()[0].innerText));
        },
      });

      // Reveal animation - starts after counter reaches 100
      // Delay set to 3.5s to match the counter duration
      gsap.timeline({ delay: 3.5 }) 
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 2,
          ease: 'power4.inOut',
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Preloader */}
      <div
        ref={preloaderRef}
        // Updated classes for layout: p-10 for padding, flex-col, justify-start, items-start
        className="absolute inset-0 h-screen flex flex-col justify-start items-start bg-stone-50 text-gray-900 z-50 p-10"
      >
        {/* Portfolio Title - Now top-left due to layout changes */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
          Portfolio
        </h1>
        
        {/* Removed the "Loading..." div */}

        {/* Counter - Positioned absolutely bottom-right */}
        <div 
          className="absolute bottom-10 right-10 text-9xl font-bold text-gray-800"
        >
          <span ref={counterRef}>{counter}</span>
          {/* Removed the '%' sign as per the request to show only the number */}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
