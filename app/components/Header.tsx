"use client";
import { useState, useEffect, useRef } from 'react';
import '../styles/header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // To track the nav menu
  const buttonRef = useRef(null); // To track the hamburger button

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a nav link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close the menu when clicking outside of the menu or button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-navy text-center shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-yellow">
            <h1 className="text-2xl font-bold text-yellow">Florian Chazizi</h1>
          </div>

          {/* Menu Links - shown on medium+ screens */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-yellow navlinks">About</a>
            <a href="#projects" className="text-yellow navlinks">Projects</a>
            <a href="#contact" className="text-yellow navlinks">Contact</a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef} // Reference for the hamburger button
              onClick={toggleMenu}
              className="text-yellow focus:outline-none"
            >
              {/* Hamburger Icon when menu is closed, X icon when menu is open */}
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef} // Reference to track the dropdown menu
        className={`md:hidden fixed top-0 left-0 w-full bg-navy text-yellow transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#about" onClick={handleLinkClick} className="text-yellow navlinks px-3 py-2">About</a>
          <a href="#projects" onClick={handleLinkClick} className="text-yellow navlinks px-3 py-2">Projects</a>
          <a href="#contact" onClick={handleLinkClick} className="text-yellow navlinks px-3 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
