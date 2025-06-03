import React from 'react';
import WebDevImage from '../../assets/images/webdevimage.jpg';
import WebDevImage2 from '../../assets/images/webdevimage2.jpg';
import lotusHomes from '../../assets/images/lotushomesimage.jpg'

const Projects = () => {
  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="scroll-mt-100 py-10 px-10 flex flex-col items-center gap-10"
    >


    <h1 className='text-white text-5xl'>Past Work</h1>

      {/* Project 1 - Web Dev Portfolio */}
      <a
        href="https://web-dev-portfolio-fake.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-4xl"
      >
        <div className="cursor-pointer border border-white rounded-lg overflow-hidden flex shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-1/3 h-48">
            <img
              src={WebDevImage}
              alt="Web Development Portfolio"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <h3 className="text-white text-2xl font-semibold mb-2">
              Web Developer Portfolio
            </h3>
            <p className="text-gray-300">
              A sleek, fully responsive personal portfolio website built with React and Tailwind CSS. It showcases development skills, smooth UI animations, and modern design, optimized for both desktop and mobile devices.
            </p>
          </div>
        </div>
      </a>

      {/* Project 2 - Photographer Portfolio */}
      <a
        href="https://photographer-portfolio-nine-red.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-4xl"
      >
        <div className="cursor-pointer border border-white rounded-lg overflow-hidden flex shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-1/3 h-48">
            <img
              src={WebDevImage2}
              alt="Photography Portfolio"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <h3 className="text-white text-2xl font-semibold mb-2">
              Photographer Portfolio
            </h3>
            <p className="text-gray-300">
              A modern photography portfolio designed for visual impact. Features a clean layout, gallery-style imagery, and responsive design, perfect for showcasing creative work online.
            </p>
          </div>
        </div>
      </a>



      <a
        href="https://lotus-homes-website.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-4xl"
      >
        <div className="cursor-pointer border border-white rounded-lg overflow-hidden flex shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-1/3 h-48">
            <img
              src={lotusHomes}
              alt="Photography Portfolio"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <h3 className="text-white text-2xl font-semibold mb-2">
              Lotus Homes
            </h3>
            <p className="text-gray-300">
              A fully responsive real estate landing page for Lotus Homes, featuring a dynamic hero section with background video, animated scroll effects, and modern UI. Built with React, Vite, and Tailwind CSS — optimized for performance and designed for visual storytelling.
            </p>
          </div>
        </div>
      </a>

    </section>
  );
};

export default Projects;
