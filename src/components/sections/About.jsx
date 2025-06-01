import React from 'react';
import ProfilePicture from '../../assets/images/ProfilePicture.jpg';
import github from '../../assets/images/github-mark-white.png';
import htmlLogo from '../../assets/images/html-logo.png';
import cssLogo from '../../assets/images/css-logo.png';
import javascriptLogo from '../../assets/images/javascript-logo.png';
import reactjsLogo from '../../assets/images/reactjs-logo.png';
import tailwindLogo from '../../assets/images/tailwind-logo.png';

const About = () => {
  return (
    <section
      data-aos="fade-up"
      id="about"
      className="scroll-mt-100 flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-20"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={ProfilePicture}
          alt="Profile"
          className="rounded-full w-80 h-80 object-cover"
        />
      </div>

      {/* About Text */}
      <div className="max-w-xl md:text-left text-center border-l-4 border-white pl-8">
        <h2 className="text-white text-5xl font-bold mb-4">About Me</h2>
        <p className="text-white text-lg leading-relaxed">
          Hi, I’m Aaron Goel — a 19-year-old engineering student at Auckland University of Technology, currently pursuing a Diploma in Engineering. I specialize in creating clean, fully responsive portfolio websites that work seamlessly across all devices. I’m passionate about building modern, user-friendly web experiences and am actively developing my own portfolio while taking on freelance projects.
        </p>

        <a
          href="https://github.com/aarongoel22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub"
            className="cursor-pointer mt-5 w-12 h-12 inline-block"
          />
        </a>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white text-5xl mb-2">Skills</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* ReactJS */}
          <div className="flex flex-col items-center">
            <img src={reactjsLogo} alt="ReactJS" className="w-16 h-16" />
            <span className="text-white text-xl mt-2">ReactJS</span>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center">
            <img src={htmlLogo} alt="HTML" className="w-16 h-16" />
            <span className="text-white text-xl mt-2">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <img src={cssLogo} alt="CSS" className="w-16 h-16" />
            <span className="text-white text-xl mt-2">CSS</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img src={javascriptLogo} alt="JavaScript" className="w-16 h-16" />
            <span className="text-white text-xl mt-2">JavaScript</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16" />
            <span className="text-white text-xl mt-2">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
