import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <>
      <IoArrowBack onClick={handleBack} className='absolute top-10 left-10 text-2xl text-white cursor-pointer' />

      <section id="about" className=" py-30 px-4">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="w-48 h-48 md:w-64 md:h-64  rounded-full mx-auto md:mx-0 overflow-hidden">
              <img
                src="/images/ppic.jpeg"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-white mb-6 leading-relaxed">
              Hi! I'm <span className="text-blue-500 font-semibold">Noman</span>, a Frontend Developer with a passion for building beautiful, functional, and user-centric websites. I specialize in React, Tailwind CSS, and modern JavaScript.
            </p>
            <ul className="text-white space-y-3">
              <li>✅ Clean, maintainable code</li>
              <li>✅ Fully responsive & accessible design</li>
              <li>✅ Performance-focused web experiences</li>
              <li>✅ Collaborates well with teams and designers</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;