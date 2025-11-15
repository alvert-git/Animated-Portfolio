import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [nav, setNav] = useState(false);

  // Toggle function for the menu state
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'About Me', href: '#about' },
    { id: 2, text: 'Skills', href: '#skills' },
    { id: 3, text: 'Projects', href: '#projects' },
    { id: 4, text: 'Blog', href: '#blog' },
  ];

  return (
    // Outer container for the full width navbar
    // Added shadow-sm for better visual separation
    <nav className="bg-white p-4 cursor-pointer ">
      {/* Inner container to hold the content and apply the flex layout */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Section: Logo and Desktop Navigation Links */}
        <div className="flex items-center space-x-12">
          
          {/* Logo/Name: Albert. (Always visible) */}
          <div className="text-2xl font-extrabold text-black tracking-tight">
            Albert.
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 text-base text-gray-700">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={item.href} 
                className="hover:text-black transition duration-150 ease-in-out"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
        
        {/* Right Section: Contact Me Link (Desktop) and Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
            
            {/* Contact Me Link (Desktop Only) */}
            <a 
              href="#contact" 
              className="hidden md:block text-base font-semibold text-black py-2 px-4 cursor-pointer"
            >
              Contact Me.
            </a>
            
            {/* Mobile Hamburger/Close Icon (Visible only on small screens) */}
            <div onClick={handleNav} className="block md:hidden cursor-pointer text-2xl z-20">
              {/* Toggles between the menu and close icons */}
              {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
        </div>
        
        
        {/* Mobile Menu (Sliding Sidebar from the RIGHT)
          - nav ? 'right-0' : 'right-[-100%]' controls the slide in/out
          - w-[70%] for a wider slide-in than the previous example
          - fixed and z-10 ensures it overlays the main content
        */}
        <div
          className={
            nav
              ? 'fixed md:hidden right-0 top-0 w-[70%] h-full border-l border-gray-100 bg-white ease-in-out duration-300 z-10'
              : 'fixed right-[-100%] top-0 w-[70%] h-full bg-white ease-in-out duration-300 z-10'
          }
        >
          <div className="p-4 pt-10">
            {/* Logo/Name for mobile menu (optional) */}
            <div className="text-2xl font-extrabold text-black tracking-tight mb-6 px-4">
              Albert.
            </div>
            
            {/* Mobile Navigation Links */}
            <ul className="uppercase">
              {navItems.map(item => (
                <li 
                  key={item.id} 
                  className="p-4 border-b border-gray-100 text-gray-700 hover:text-black transition duration-150 ease-in-out"
                  onClick={handleNav} // Close menu on link click
                >
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
              
              {/* Contact Me Link (Mobile) */}
              <li className="p-4 text-base font-semibold text-black mt-2" onClick={handleNav}>
                <a href="#contact">Contact Me.</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;