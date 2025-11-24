import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import profile from "../assets/images/Profile.png";
import hero_extra_1 from "../assets/images/hero_extra_1.png";
import hero_extra_2 from "../assets/images/hero_extra_2.png";

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

      

      // 3. Extra decorative elements fade in with rotation
      if (extra1Ref.current) {
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
      }

      if (extra2Ref.current) {
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
      }

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] w-full text-black relative overflow-hidden flex flex-col md:flex-row z-10 py-8 md:py-0"
    >
      {/* Mobile Layout: Image at top, text below, icons in row at bottom */}
      <div className="md:hidden flex flex-col items-center w-full px-5 ">
        {/* Profile Image - Mobile Top */}
        <div ref={profileRef} className="w-full flex justify-center mb-6">
          <img
            src={profile}
            alt="profile"
            className="w-64 h-90 object-cover rounded-2xl"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Text Content - Mobile Center */}
        <div className="text-center w-full">
          <p
            ref={(el) => (heroTextRefs.current[0] = el)}
            className="text-xl font-light text-gray-500 mb-1 font-inter"
          >
            Hi, I am
          </p>
          <h1
            ref={(el) => (heroTextRefs.current[1] = el)}
            className="text-3xl font-extrabold text-black tracking-tighter leading-tight mb-4"
          >
            Albert Belbase
          </h1>
          <div
            ref={(el) => (heroTextRefs.current[2] = el)}
            className="text-lg text-gray-600 font-serif italic leading-relaxed"
          >
            Data Scientist / <br />
            Full Stack AI Developer.
          </div>

          <div
            ref={(el) => (heroTextRefs.current[3] = el)}
            className="mt-6"
          >
            <a
              href="#cv"
              className="inline-flex items-center gap-2 border-b-2 border-gray-400 pb-1 text-blue-600 hover:text-black hover:border-black transition-all duration-300 group"
            >
              <span className="text-base">Download CV</span>
              <HiDownload className="transform group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Social Icons and Chat - Mobile Row at Bottom */}
        <div className="flex items-center justify-center gap-8 mt-8 w-full">
          {/* Social Icons */}
          <div ref={socialRef} className="flex gap-4 cursor-pointer">
            <FaFacebookSquare color="black" size={24} className="hover:opacity-70 transition-opacity" />
            <FaInstagramSquare color="black" size={24} className="hover:opacity-70 transition-opacity" />
            <FaLinkedin color="black" size={24} className="hover:opacity-70 transition-opacity" />
            <FaGithub color="black" size={24} className="hover:opacity-70 transition-opacity" />
          </div>

          {/* Chat Button */}
          <div
            ref={chatRef}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-base font-bold text-black">Let's Chat</span>
            <IoChatboxEllipses size={24} color="black" />
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original design */}
      <div className="hidden md:flex w-full h-[calc(100vh-5rem)] relative">
        {/* Left Text Section */}
        <div className="self-center ml-10 lg:ml-16 z-20">
          <p
            ref={(el) => (heroTextRefs.current[0] = el)}
            className="text-3xl font-light text-gray-500 mb-1 font-inter"
          >
            Hi, I am
          </p>
          <h1
            ref={(el) => (heroTextRefs.current[1] = el)}
            className="text-5xl lg:text-6xl font-extrabold text-black tracking-tighter leading-tight mb-4"
          >
            Albert Belbase
          </h1>
          <div
            ref={(el) => (heroTextRefs.current[2] = el)}
            className="text-2xl text-gray-600 font-serif italic leading-relaxed"
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
              <span className="text-lg">Download CV</span>
              <HiDownload className="transform group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Profile Image - Desktop Centered */}
        <div ref={profileRef}>
          <img
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[40rem] lg:h-[40rem] 2xl:h-[45rem] object-cover z-10"
            src={profile}
            alt="profile"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Extra Decorative Image 1 - Desktop Only */}
        <div
          ref={extra1Ref}
          className="absolute top-[10%] right-[15%] lg:right-[25%] z-20"
        >
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
        </div>

        {/* Right Side Elements - Desktop */}
        <div className="absolute right-6 lg:right-10 bottom-5 z-30 flex flex-col items-end">
          {/* Extra Decorative Image 2 */}
          <div ref={extra2Ref} className="lg:flex mb-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20"></div>
          </div>

          {/* Social Icons */}
          <div ref={socialRef} className="flex flex-col gap-3 cursor-pointer">
            <FaFacebookSquare color="black" size={24} className="hover:opacity-70 transition-opacity" />
            <FaInstagramSquare color="black" size={24} className="hover:opacity-70 transition-opacity" />
            <FaLinkedin color="black" size={24} className="hover:opacity-70 transition-opacity" />
            <FaGithub color="black" size={24} className="hover:opacity-70 transition-opacity" />
          </div>

          {/* Chat Button */}
          <div
            ref={chatRef}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform mt-8"
          >
            <span className="text-lg lg:text-xl font-bold text-black">Let's Chat</span>
            <IoChatboxEllipses size={28} color="black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;