import React from 'react'
import ProfilePicture from '../../assets/images/ProfilePicture.jpg';
import instagram from '../../assets/images/instagram.png';

const About = () => {
  return (
<section data-aos="fade-up" id="about" className="scroll-mt-100 flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-20">
  <div className="flex justify-center">
    <img src={ProfilePicture} alt="Profile" className="rounded-full w-80 h-80 object-cover" />
  </div>
  
  <div className="text-center md:text-left max-w-xl border-l-white border-4 pl-8">
    <h2 className="text-white text-5xl font-bold mb-4">About Me</h2>
    <p className="text-white text-lg leading-relaxed">
      Hi!, my name is Aaron Goel, I am 19 years old and currently studying a Diploma of Engineering at AUT. I am confident I can design a fully responsive portfolio website for you. I am looking to build my own portfolio. 
    </p>

    <a href="https://www.instagram.com/aaron.goel/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="cursor-pointer mt-5" />
    </a>

  </div>
</section>
  )
}

export default About
