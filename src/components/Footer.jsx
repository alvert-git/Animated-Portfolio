import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // The text you want to marquee
  const marqueeText = "Albert Belbase - ";
  const cvPath = '/cv/Albert ATS CV.pdf'

  return (
    <footer className="bg-[#f3f3f3] text-gray-900 py-16 md:py-20 border-t border-gray-200 relative overflow-hidden">
       

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Initial Name Tag (Kept from your original code) */}
            <p className="text-sm text-gray-400 font-medium mb-5">
              Albert Belbase
            </p>
      
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              
              {/* Location Section */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Location</h4>
                <p className="text-xl font-semibold">Kathmandu, Nepal</p>
              </div>

              {/* Socials Section */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Socials</h4>
                <ul className="space-y-2 text-xl font-semibold">
                  <li><a href="https://www.instagram.com/albertbelbase12/" className="hover:opacity-60 transition-opacity">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/in/albert-belbase-a8a666281/" className="hover:opacity-60 transition-opacity">LinkedIn</a></li>
                  <li><a href="https://github.com/alvert-git" className="hover:opacity-60 transition-opacity">GitHub</a></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="relative">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</h4>
                <div className="space-y-2 text-xl font-semibold">
                  <p><a href="mailto:albertbelbase018@gmail.com" className="hover:opacity-60 transition-opacity">albertbelbase018@gmail.com</a></p>
                  <p><a href={cvPath} target='_blank' className="hover:opacity-60 transition-opacity">View Resume / CV</a></p>
                </div>
                
                {/* Scroll to Top Button */}
                <div className="absolute top-0 right-0 flex flex-col items-center">
                  <button 
                    onClick={scrollToTop}
                    className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <FiArrowUp size={20} />
                  </button>
                  <span className="text-[10px] font-bold uppercase mt-2 tracking-tighter text-gray-400">Top</span>
                </div>
              </div>
            </div>

            {/* Copyright Line */}
            <div className="mt-20">
              <p className="text-sm text-gray-400 font-medium">
                © 2025 Albert Belbase
              </p>
            </div>
        </div>
         
        {/* MARQUEE SECTION - Added */}
        <div className="w-full overflow-hidden whitespace-nowrap pointer-events-none mt-10">
            <div className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-anton font-extrabold uppercase text-gray-800 tracking-wide">
                {/* We duplicate the text to ensure a seamless loop */}
                <span className="marquee">
                    {marqueeText.repeat(5)} 
                </span>
            </div>
        </div>
        {/* END MARQUEE SECTION */}
    </footer>
  );
};

export default Footer;
