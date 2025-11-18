import React from 'react';
import profile from "../assets/images/Profile.png"

const Hero = () => {
  return (
    // 1. Removed flex centering classes from the parent
    <section 
      id='home' 
      className="h-[calc(100vh-5rem)] w-full text-white relative overflow-hidden" // Added overflow-hidden for safety
    >
       
        <img 
            className='absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[38rem] object-cover' 
            src={profile} 
            alt="profile" 
        />
    </section>
  );
};

export default Hero;
