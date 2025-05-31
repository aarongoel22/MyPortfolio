import React from 'react'
import WebDevImage from '../../assets/images/WebDevImage.jpg'
import WebDevImage2 from '../../assets/images/WebDevImage2.jpg'

const Projects = () => {
  return (
    <section data-aos='fade-up' id='projects' className='scroll-mt-100 py-10 px-10 flex flex-col items-center gap-10'>
      {/* Project 1 */}
      <a
        href="https://web-dev-portfolio-fake.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className='w-full max-w-4xl'
      >
        <div className='cursor-pointer border border-white rounded-lg overflow-hidden flex shadow-lg hover:scale-105 transition-transform duration-300'>
          {/* Image section */}
          <div className='w-1/3 h-48'>
            <img 
              src={WebDevImage} 
              alt="Web Dev" 
              className='object-cover w-full h-full'
            />
          </div>

          {/* Text content */}
          <div className='w-2/3 p-6 flex flex-col justify-center'>
            <h3 className='text-white text-2xl font-semibold mb-2'>Web-Dev-Portfolio</h3>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad, quos quae ab numquam repellat.
            </p>
          </div>
        </div>
      </a>

      {/* Project 2 */}
      <a
        href="https://photographer-portfolio-nine-red.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className='w-full max-w-4xl'
      >
        <div className='cursor-pointer border border-white rounded-lg overflow-hidden flex shadow-lg hover:scale-105 transition-transform duration-300'>
          {/* Image section */}
          <div className='w-1/3 h-48'>
            <img 
              src={WebDevImage2} 
              alt="Photography Portfolio" 
              className='object-cover w-full h-full'
            />
          </div>

          {/* Text content */}
          <div className='w-2/3 p-6 flex flex-col justify-center'>
            <h3 className='text-white text-2xl font-semibold mb-2'>Photographer Portfolio</h3>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad, quos quae ab numquam repellat.
            </p>
          </div>
        </div>
      </a>
    </section>
  )
}

export default Projects
