import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import profile from "../assets/images/Profile.png";
import hero_extra_1 from "../assets/images/hero_extra_1.png";
import hero_extra_2 from "../assets/images/hero_extra_2.png";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  // Refs for GSAP animations
  const heroTextRefs = useRef([]);
  const profileRef = useRef(null);
  const extra1Ref = useRef(null);
  const extra2Ref = useRef(null);
  const socialRef = useRef(null);
  const chatRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for coordinated animations
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Text elements fade in and slide up with stagger
      tl.fromTo(
        heroTextRefs.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // 2. Profile image scales in from bottom
      // tl.fromTo(
      //   profileRef.current,
      //   {
      //     y: 100,
      //     opacity: 0,
      //     scale: 0.95,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     scale: 1,
      //     duration: 1.2,
      //     ease: "power3.out",
      //   },
      //   "-=0.6"
      // );

      // 3. Extra decorative elements fade in with rotation
      tl.fromTo(
        extra1Ref.current,
        {
          opacity: 0,
          rotation: -15,
          scale: 0.8,
        },
        {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      tl.fromTo(
        extra2Ref.current,
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // 4. Social icons slide in from bottom with stagger
      tl.fromTo(
        socialRef.current.children,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // 5. Chat button bounces in
      tl.fromTo(
        chatRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

      // Hover animations for interactive elements
      // const socialIcons = socialRef.current.querySelectorAll("svg");
      // socialIcons.forEach((icon) => {
      //   icon.addEventListener("mouseenter", () => {
      //     gsap.to(icon, {
      //       scale: 1.2,
      //       rotation: 5,
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });
      //   icon.addEventListener("mouseleave", () => {
      //     gsap.to(icon, {
      //       scale: 1,
      //       rotation: 0,
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });
      // });

      // Floating animation for extra elements
      // gsap.to(extra1Ref.current, {
      //   y: -10,
      //   duration: 2,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "sine.inOut",
      // });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="h-[calc(100vh-5rem)] w-full text-white relative overflow-hidden flex z-10"
    >
      {/* Left Text Section */}
      <div className="absolute top-0 sm:relative sm:top-auto self-center ml-5 md:ml-10 lg:ml-16 z-20">
        <p
          ref={(el) => (heroTextRefs.current[0] = el)}
          className="text-2xl md:text-3xl font-light text-gray-500 mb-1 font-inter"
        >
          Hi, I am
        </p>
        <h1
          ref={(el) => (heroTextRefs.current[1] = el)}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tighter leading-tight mb-4"
        >
          Albert Belbase
        </h1>
        <div
          ref={(el) => (heroTextRefs.current[2] = el)}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 font-serif italic leading-relaxed"
        >
          Data Scientist / <br />
          Full Stack AI Developer.
        </div>

        <div
          ref={(el) => (heroTextRefs.current[3] = el)}
          className="mt-8"
        >
          <a
            href="#cv"
            className="inline-flex items-center gap-2 border-b-2 border-gray-400 pb-1 text-blue-600 hover:text-black hover:border-black transition-all duration-300 group"
          >
            <span className="text-base md:text-lg">Download CV</span>
            <HiDownload className="transform group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Profile Image - Centered */}
      <div ref={profileRef}>
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[35rem] sm:h-[40rem]  md:h-[45rem] object-cover z-10"
          src={profile}
          alt="profile"
          style={{
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        />
      </div>

      {/* Extra Decorative Image 1 - Hidden on small screens */}
      <div
        ref={extra1Ref}
        className="hidden md:block absolute top-[10%] right-[15%] lg:right-[25%] z-20"
      >
        <img
          src={hero_extra_1}
          alt="decorative element"
          className="w-auto h-16 md:h-20 lg:h-24"
        />
      </div>

      {/* Right Side Elements - Social Icons and Chat */}
      <div className="absolute right-3 sm:right-4 md:right-6 lg:right-10 bottom-3 sm:bottom-5 z-30 flex flex-col items-end">
        {/* Extra Decorative Image 2 - Hidden on small screens */}
        <div ref={extra2Ref} className="hidden lg:flex mb-4">
          <img src={hero_extra_2} alt="decorative element" className="w-auto h-16 lg:h-20" />
        </div>

        {/* Social Icons */}
        <div ref={socialRef} className="flex flex-col gap-2 sm:gap-3 cursor-pointer">
          <FaFacebookSquare color="black" size={20} className="sm:w-6 sm:h-6 hover:opacity-70 transition-opacity" />
          <FaInstagramSquare color="black" size={20} className="sm:w-6 sm:h-6 hover:opacity-70 transition-opacity" />
          <FaLinkedin color="black" size={20} className="sm:w-6 sm:h-6 hover:opacity-70 transition-opacity" />
          <FaGithub color="black" size={20} className="sm:w-6 sm:h-6 hover:opacity-70 transition-opacity" />
        </div>

        {/* Chat Button */}
        <div
          ref={chatRef}
          className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:scale-105 transition-transform mt-6 sm:mt-8"
        >
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black">Let's Chat</span>
          <IoChatboxEllipses size={24} className="sm:w-7 sm:h-7" color="black" />
        </div>
      </div>
    </section>
  );
};

export default Hero;