import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// --- 1. TextSplitter Utility Class (Simplified for React) ---
// (Kept for the paragraph animation)
class TextSplitter {
  constructor(element) {
    this.element = element;
    this.originalText = element.textContent;
    this.splitWords = [];
    this.split();
  }

  split() {
    this.element.innerHTML = '';
    this.splitWords = [];
    const words = this.originalText.split(/\s+/);

    words.forEach((word, index) => {
      if (word.length > 0) {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;
        wordSpan.style.display = 'inline-block';
        
        this.element.appendChild(wordSpan);
        this.splitWords.push(wordSpan);

        if (index < words.length - 1) {
          this.element.appendChild(document.createTextNode(' '));
        }
      }
    });
  }

  getWords() {
    return this.splitWords;
  }

  revert() {
    this.element.textContent = this.originalText;
  }
}

// --- 2. Custom Hook for the Blur Scroll Effect ---
// (Kept for the paragraph animation)
const useBlurScrollEffect = (textElementRef) => {
  useEffect(() => {
    const textElement = textElementRef.current;

    if (!textElement) {
      return;
    }

    let splitter;
    let animation;

    const scroll = () => {
      const words = splitter.getWords();
      
      if (animation) {
          animation.scrollTrigger.kill();
          animation.kill();
      }

      animation = gsap.fromTo(words, {
        opacity: 0,
        skewX: -10,
        willChange: 'filter, transform',
        filter: 'blur(18px)'
      }, {
        ease: 'sine',
        opacity: 1,
        skewX: 0,
        filter: 'blur(0px)', // Changed to 0px to fully resolve blur
        stagger: 0.04,
        scrollTrigger: {
          trigger: textElement,
          start: 'top bottom-=15%',
          end: 'bottom center+=15%',
          scrub: true,
        },
      });
    };

    splitter = new TextSplitter(textElement);
    scroll();

    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      if (animation) {
        animation.kill();
      }
      if (splitter) {
        splitter.revert();
      }
    };
  }, [textElementRef]);
};


// --- 3. Custom Hook for the Marquee Effect ---
const useMarqueeEffect = (marqueeRef) => {
  const animationRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (!marqueeElement) return;

    // Calculate the width of the content wrapper (which contains two copies of the text)
    const contentWidth = marqueeElement.scrollWidth / 2;
    
    // Set up the infinite horizontal animation
    animationRef.current = gsap.to(marqueeElement, {
      x: -contentWidth, // Move left by the width of one copy of the content
      duration: 5, // Speed of the marquee (adjust as needed)
      ease: "none",
      repeat: -1, // Infinite repeat
      overwrite: true,
    });

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [marqueeRef]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  return { handleMouseEnter, handleMouseLeave };
};


// --- 4. React Component Implementation ---
const About = () => {
  // Refs for the two separate effects
  const paragraphRef = useRef(null);
  const marqueeContainerRef = useRef(null);

  // Apply the custom hooks
  useBlurScrollEffect(paragraphRef);
  const { handleMouseEnter, handleMouseLeave } = useMarqueeEffect(marqueeContainerRef);

  // Marquee content array for easier rendering
  const marqueeItems = [
    { text: 'WEB DEVELOPER', className: 'text-black' },
    { text: 'WEB DEVELOPER', className: 'text-stroke' }, // Text Stroke Class
    { text: 'Data Scientist', className: 'text-black' },
  ];

  return (
    <section id="about" className="w-full relative overflow-hidden z-10">
      {/* Gradient Border Simulation (Top) */}
      <div className="w-full py-6 relative">
        {/* Top Gradient Line (Simulating border-y-2 with gradient) */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-black-100 to-gray-400"></div>

        {/* MARQUEE SECTION */}
        <div 
          className="overflow-hidden whitespace-nowrap" // Key styles for marquee
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={marqueeContainerRef} 
            className="flex w-fit" // w-fit ensures the container is wide enough for the content
          >
            {/* Duplicate the content to create the seamless loop effect */}
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div 
                key={index} 
                className="flex justify-around items-center gap-8 lg:gap-16 px-8" // Padding to separate items
              >
                <span className={`font-bagel text-5xl uppercase ${item.className}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* END MARQUEE SECTION */}

        {/* Bottom Gradient Line (Simulating border-y-2 with gradient) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black-100 to-gray-400"></div>
      </div>

      {/* ABOUT ME Content Section */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          {/* Heading and Text */}
          <div className="max-w-7xl px-4">
            {/* <h2 className="text-5xl font-extrabold uppercase mb-4">ABOUT ME</h2> */}
            
            {/* Animated Paragraph */}
            <p 
              ref={paragraphRef}
              className="text-2xl max-w-5xl mx-auto text-gray-800 leading-8 text-justify mt-10"
            >
              I specialize in building full-stack web applications that are
              fast, reliable, and user-friendly, with a solid foundation in both
              frontend and backend technologies to bring ideas to life for
              businesses, startups, and product teams. Beyond traditional web
              development, I possess deep expertise in Data Science, AI, Machine
              Learning (ML), Deep Learning, and Generative AI (Gen AI), allowing
              me to not only construct the application's infrastructure but also
              integrate sophisticated, data-driven intelligence and cutting-edge
              features directly into the product experience. This powerful
              combination enables the creation of truly modern, intelligent, and
              highly personalized digital solutions.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="flex flex-wrap gap-4 px-4 mt-10 max-w-5xl mx-auto">
            {/* Card 1: Total Project (White with Border) - Left Aligned */}
            <div className="flex flex-col p-6 border-2 border-black rounded-xl bg-white shadow-md w-44 ">
              <span className="text-base font-normal text-black uppercase leading-none">
                Total Project
              </span>
              {/* Increased font size for the value and reduced margin */}
              <span className="text-5xl font-extrabold text-black mt-1">
                10 +
              </span>
            </div>

            {/* Card 2: Experience (Black with White Text) - Left Aligned */}
            <div className="flex flex-col p-6 rounded-xl bg-black text-white shadow-md w-44">
              <span className="text-base font-normal uppercase leading-none">
                Experience
              </span>
              {/* Increased font size for the value and reduced margin */}
              <span className="text-3xl font-extrabold mt-1">2 Year +</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
