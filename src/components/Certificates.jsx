// components/Certificates.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import CertificateCard from './ui/CertificateCard'; // Adjust path
import { CERTIFICATES } from '../lib/data'; // Adjust path

// Assuming you have GSAP installed and imported globally or in a setup file.
// If you want to use the GSAP animation in the modal, you'll need to import it here too.
// import gsap from 'gsap'; 

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Function to open the modal
  const handleOpenModal = (imageSrc) => {
    setSelectedImg(imageSrc);
    // Optional: Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedImg(null);
    // Optional: Restore background scrolling
    document.body.style.overflow = 'auto';
  };

  // Effect to handle 'Escape' key press for closing the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImg) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg]); // Re-run effect if selectedImg changes

  return (
    <section id="certificates" className="relative"> {/* Added relative for modal context */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
         <h2 className="text-5xl font-extrabold uppercase "> Certifications & Training</h2>
          <p className="max-w-2xl text-xl text-gray-500 mt-2 mb-10">
            Proof of continuous learning and expertise in key technologies.
          </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CERTIFICATES.map((cert) => (
            <CertificateCard 
              key={cert.id} 
              certificate={cert} 
              onCardClick={handleOpenModal} // <-- Pass the handler down
            />
          ))}
        </div>
      </div>

      {/* MODAL VIEW (Your example structure) */}
      {selectedImg && (
          <div 
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
              onClick={handleCloseModal}
          >
              <img
                  src={selectedImg}
                  alt="Full View"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                  // You need to ensure GSAP is available for this part to work.
                  // If not using GSAP, you can remove the onLoad handler.
                  // If using GSAP, ensure it's imported correctly.
                  onLoad={(e) => {
                      // Example GSAP animation (requires gsap import)
                      // gsap.fromTo(e.target, 
                      //     { scale: 0.8, opacity: 0 }, 
                      //     { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
                      // );
                  }}
              />
          </div>
      )}
    </section>
  );
};

export default Certificates;
