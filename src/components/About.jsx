import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full relative overflow-hidden z-10">
      {/* Gradient Border Simulation (Top) */}
      <div className="w-full py-6 relative">
        {/* Top Gradient Line (Simulating border-y-2 with gradient) */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-black-100 to-gray-400"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-center gap-4 lg:gap-8">
            {/* WEB DEVELOPER (Solid Black) */}
            <span className="font-bagel text-2xl uppercase text-black">
              WEB DEVELOPER
            </span>

            <span className="font-bagel text-2xl uppercase text-black">
              WEB DEVELOPER
            </span>

            {/* Data Scientist (Solid Black) */}
            <span className="font-bagel text-2xl uppercase text-black">
              Data Scientist
            </span>
          </div>
        </div>

        {/* Bottom Gradient Line (Simulating border-y-2 with gradient) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black-100 to-gray-400"></div>
      </div>

      {/* ABOUT ME Content Section */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          {/* Heading and Text */}
          <div className="max-w-7xl px-4">
            <h2 className="text-5xl font-extrabold uppercase mb-4">ABOUT ME</h2>
            <p className="text-xl text-gray-800 leading-8 text-justify mt-10">
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
          <div className="flex flex-wrap gap-4 px-4">
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
