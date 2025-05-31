import React from 'react';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 flex flex-row justify-center gap-6 p-6 bg-black/30 backdrop-blur-lg w-full border-b border-white/10'>
      <a href="#home" className='text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all'>Home</a>
      <a href="#about" className='text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all'>About</a>
      <a href="#projects" className='text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all'>Projects</a>
      <a href="#pricing" className='text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all'>Pricing</a>
      <a href="#contact" className='text-white text-xl font-mono hover:text-amber-100 hover:-translate-y-0.5 transition-all'>Contact</a>
    </nav>
  );
};

export default Navbar;
