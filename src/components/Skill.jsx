import React, { useRef } from 'react';

import { MY_STACK } from '../lib/data'; // Adjust path as necessary
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

// Register plugins globally if not already done in your project setup
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef(null);

    // Animation 1: Slide Up on Scroll In
    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    // Animation 2: Fade Out on Scroll Out
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    // The component structure is repeated in your original code, I'm using the second, cleaner version.
    return (
        <section id="my-stack" ref={containerRef}>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-5xl font-extrabold uppercase mb-10">My Skill</h2>

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            {/* Category Title */}
                            <div className="sm:col-span-5 mt-5">
                                <p className="slide-up text-4xl font-anton text-stroke leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                                
                            </div>
                            
                            {/* Skills List */}
                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap mt-5">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-3.5 items-center leading-none"
                                        key={item.name}
                                    >
                                        {/* Replaced Next.js Image with standard <img> */}
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            width="40"
                                            height="40"
                                            className="h-10"
                                        />
                                        <span className="text-2xl capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                    
                                ))}
                                {/* <div className="w-full h-[2px] bg-gradient-to-r from-black-100 to-gray-400 "></div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
