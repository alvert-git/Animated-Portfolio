import { MY_EXPERIENCE } from '../lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    
    const [imgSrc, setImgSrc] = useState('');
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleCloseModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // --- GSAP SCROLL ANIMATIONS (Original Design) ---
    useGSAP(() => {
        gsap.set('.experience-item', { opacity: 0, y: 100 });
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                scrub: 2,
            },
        });

        tl.to('.experience-item', {
            y: 0, 
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
        });

        gsap.to(containerRef.current, {
            y: -150,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'bottom 10%',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, { scope: containerRef });

    // --- HOVER LOGIC (Fixed Position) ---
    const handleMouseEnter = (imageSrc) => {
        if (selectedImg) return;
        setImgSrc(imageSrc);
        gsap.to(imageRef.current, {
            opacity: 1,
            x: 0, // Reset any previous movement
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.in',
        });
    };

    // --- MODAL LOGIC ---
    const handleOpenModal = (img) => {
        setSelectedImg(img);
        gsap.set(imageRef.current, { opacity: 0 });
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedImg(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="experience" className="relative">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12" ref={containerRef}>
                <h2 className="text-5xl font-extrabold uppercase mb-10">My Experience</h2> 

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <div 
                            key={item.title} 
                            className="experience-item cursor-pointer" 
                            onMouseEnter={() => handleMouseEnter(item.letterImage)}
                            onMouseLeave={handleMouseLeave}
                            // Removed handleMouseMove to stop tracking
                            onClick={() => handleOpenModal(item.letterImage)}
                        >
                            <p className="text-xl text-muted-foreground">{item.company}</p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">{item.title}</p>
                            <p className="text-lg text-muted-foreground">{item.duration}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FIXED RIGHT IMAGE */}
            <div className="fixed top-1/2 right-50 -translate-y-1/2 z-40 pointer-events-none hidden lg:block">
                <img
                    ref={imageRef}
                    src={imgSrc}
                    alt="Preview"
                    className="rounded-lg shadow-2xl opacity-0 border border-white/10"
                    style={{ 
                        width: '200px', 
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>

            {/* MODAL VIEW */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    onClick={handleCloseModal}
                >
                    <img
                        src={selectedImg}
                        alt="Full View"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                        onLoad={(e) => {
                            gsap.fromTo(e.target, 
                                { scale: 0.8, opacity: 0 }, 
                                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
                            );
                        }}
                    />
                </div>
            )}
        </section>
    );
};

export default Experience;