import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PROJECTS } from '../lib/data'

// NOTE: The following imports need to be adjusted based on your project structure.
// In a standard React app, you would need to define or replace these.
// 1. `TransitionLink` is replaced with a standard `<a>` tag.
// 2. `cn` is a utility function (often for combining Tailwind classes).
// 3. The `IProject` interface is removed, assuming `project` is a standard object.

// Utility function (assuming it's a simple class name combiner)
// If you don't have this utility, you can replace `cn(...)` with a simple template literal.
const cn = (...classes) => classes.filter(Boolean).join(' ');

gsap.registerPlugin(useGSAP);

// Props are simplified for JSX
const Project = ({ index, project, selectedProject, onMouseEnter }) => {
    const externalLinkSVGRef = useRef(null);

    // useGSAP setup
    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe(() => {
        

        // Type casting is removed, relying on standard DOM element access
        const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line');
        const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb');
        const box = externalLinkSVGRef.current?.querySelector('#box');

        // Check if elements exist before calling getTotalLength
        if (!box || !arrowLine || !arrowCurb) return;

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box.getTotalLength(),
            strokeDashoffset: box.getTotalLength(),
        });
        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine.getTotalLength(),
            strokeDashoffset: arrowLine.getTotalLength(),
        });
        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb.getTotalLength(),
            strokeDashoffset: arrowCurb.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, {
            autoAlpha: 1,
        })
            .to(box, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                arrowLine,
                {
                    opacity: 1,
                    strokeDashoffset: 0,
                },
                '<0.2',
            )
            .to(arrowCurb, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                externalLinkSVGRef.current,
                {
                    autoAlpha: 0,
                },
                '+=1',
            );
    });

    const handleMouseLeave = contextSafe(() => {
        context.kill();
    });

    // NOTE: TransitionLink is replaced with a standard <a> tag.
    // If you are using a routing library like React Router, you might replace this with `<Link to={...}>`.
    return (
        <a
            href="https://youtube.com"
            className={cn(
                'project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all'
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {selectedProject === null && (
                // Replaced Next.js Image with standard <img> tag
                <img
                    src={project.thumbnail}
                    alt="Project"
                    width="300"
                    height="200"
                    className={cn(
                        'w-full object-cover mb-6 aspect-[3/2] object-top',
                    )}
                    loading="lazy"
                />
            )}
            <div className="flex gap-2 md:gap-5">
                <div className="font-anton text-muted-foreground">
                    {/* The underscore is part of the string literal */}
                    _{String(index + 1).padStart(2, '0')}.
                </div>
                <div className="">
                    <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                        {project.title}
                        <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
                            {/* SVG for external link icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                ref={externalLinkSVGRef}
                            >
                                <path
                                    id="box"
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                ></path>
                                <path id="arrow-line" d="M10 14 21 3"></path>
                                <path id="arrow-curb" d="M15 3h6v6"></path>
                            </svg>
                        </span>
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
                        {project.techStack
                            .slice(0, 3)
                            .map((tech, idx, stackArr) => (
                                <div
                                    className="gap-3 flex items-center"
                                    key={tech}
                                >
                                    <span className="">{tech}</span>
                                    {idx !== stackArr.length - 1 && (
                                        <span className="inline-block size-2 rounded-full bg-background-light"></span>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;
