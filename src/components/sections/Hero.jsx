import React from 'react';

const Hero = () => {
  return (
    <section data-aos="fade-up" id="home">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-black">
        <div className="p-10 flex flex-col items-center gap-8 max-w-4xl w-full shadow-lg bg-opacity-10 backdrop-blur-sm">
        <h1
        className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent font-bold text-center leading-tight"
        style={{
            textShadow: `
            0 0 5px rgba(255, 215, 0, 0.4),
            0 0 10px rgba(255, 215, 0, 0.3),
            0 0 20px rgba(255, 215, 0, 0.2)
            `
        }}
        >
        Quick, Easy, Portfolio Websites
        </h1>

            <p className="text-white text-xl md:text-2xl text-center max-w-2xl">
            Looking for a clean, simple portfolio website that stands out?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a 
                href="#projects"
                className="cursor-pointer px-6 py-3 text-lg text-black font-semibold bg-yellow-400 hover:bg-yellow-300 hover:-translate-y-0.5 transition duration-300"
                >
                View Projects
            </a>
            <a href="#contact">
            <button className="cursor-pointer px-6 py-3 text-lg text-white border border-white hover:bg-white hover:text-black hover:-translate-y-0.5 transition duration-300">
                Contact Me
            </button>
            </a>
            </div>
        </div>
        </div>
    </section>

  );
};

export default Hero;
