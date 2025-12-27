import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skill'
import Project from './Project'
import Experience from './Experience'
import Certificates from './Certificates'
import Others from './Others'

const Home = () => {
  return (
//     <section id='home'>
//        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 min-h-[500px]">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Albert's Portfolio!</h1>
//         <p className="text-lg text-gray-700">This is the main content area, now visible after the smooth GSAP preloader animation.</p>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div id="about" className="p-6 bg-gray-50 rounded-lg shadow-md h-48">About Me Section</div>
//             <div id="skills" className="p-6 bg-gray-50 rounded-lg shadow-md h-48">Skills Section</div>
//             <div id="projects" className="p-6 bg-gray-50 rounded-lg shadow-md h-48">Projects Section</div>
//             <div id="blog" className="p-6 bg-gray-50 rounded-lg shadow-md h-48">Blog Section</div>
//         </div>

//     </div>
// );
//     </section>
// {/* <div className='p-4 max-w-7xl mx-auto flex justify-between items-center'> */}
<div className='max-w-7xl mx-auto'> 
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Experience/>
    <Certificates/>
    <Others/>
</div>

  )
}

export default Home