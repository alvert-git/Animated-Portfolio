import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

// Utility function to split text into spans for animation
const splitText = (text, refArray) => {
  return text.split('').map((char, index) => (
    <span
      key={index}
      ref={el => (refArray.current[index] = el)}
      className="inline-block will-change-transform"
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const preloaderRef = useRef(null);
  // Ref to store all individual letter elements for the Portfolio title
  const titleRefs = useRef([]);

  useLayoutEffect(() => {
    // NOTE: We rely on the initial render to populate titleRefs.current, 
    // so we don't clear it here.
    
    let ctx = gsap.context(() => {
      
      // 1. Portfolio Title Split Text Animation
      gsap.fromTo(titleRefs.current, 
        {
          yPercent: 100, // Start 100% below its final position
          opacity: 0,
        }, 
        {
          yPercent: 0, // Move to its original position
          opacity: 1,
          stagger: 0.05, // Staggered entry for each letter
          duration: 2.5,
          ease: 'power3.out',
          delay: 0.3 // Start slightly after the component mounts
        }
      );

      // 2. Counter animation
      gsap.to(counterRef.current, {
        innerText: 100,
        duration: 3.5,
        snap: { innerText: 1 },
        ease: 'power1.inOut',
        onUpdate: function() {
          setCounter(Math.round(this.targets()[0].innerText));
        },
      });

      // 3. Preloader Reveal animation
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
    <div ref={containerRef} className="relative h-screen overflow-hidden font-sans">
      {/* Preloader overlay */}
      <div
        ref={preloaderRef}
        className="fixed inset-0 h-screen flex flex-col 
          justify-center items-center md:justify-start md:items-start 
          bg-stone-50 text-gray-900 z-50 p-6 sm:p-10 md:p-16 lg:p-20"
      >
        
        {/* Portfolio Title with Split Animation Setup 
          - Gradient added (bg-clip-text, text-transparent, bg-gradient-to-r...)
          - Centering added (text-center, md:text-left)
        */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extrabold 
          overflow-hidden leading-none tracking-tight 
          text-center md:text-left 
          bg-clip-text text-gray-800">
          {splitText('Portfolio', titleRefs)}
        </h1>
        
        {/* Counter - Positioned absolutely bottom-right */}
        <div 
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-6xl sm:text-8xl md:text-9xl font-bold text-gray-800"
        >
          <span ref={counterRef}>{counter}</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
