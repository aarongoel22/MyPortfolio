import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center md:justify-center items-center">
        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-white text-3xl absolute left-6 top-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }) => (
  <>
    <a href="#home" onClick={onClick} className="text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all">Home</a>
    <a href="#about" onClick={onClick} className="text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all">About</a>
    <a href="#projects" onClick={onClick} className="text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all">Projects</a>
    <a href="#pricing" onClick={onClick} className="text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all">Pricing</a>
    <a href="#contact" onClick={onClick} className="text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all">Contact</a>
  </>
);

export default Navbar;
