import React from 'react';
import sinanImg from '../assets/foto2.png';
import './About.css';

const About = () => {
  return (
    <div className='md:p-0 about-section container mx-auto md:h-[100vh] dark:bg-neutral-900 md:flex items-center justify-center'>
      <div className="pt-28 p-8 md:pt-16 md:pb-0 pb-8 w-full md:flex text-white justify-center items-center">
        <div className="md:w-[29vw] md:mb-0 mb-14 md:text-left md:mr-32 ">
          <h1 className='font-bold md:text-7xl text-4xl mb-4'>Hello There!</h1>
          <p className='text-2xl font-semibold mx-auto'>My name is Muhammad Sinan Abdussyakur, an undergraduate student at Bina Nusantara University majoring in Computer Science and currently living in Jakarta, Indonesia. Welcome to my portfolio :)</p>
        </div>
        <div className="md:w-[30vw] flex items-center justify-center"> {/* Use responsive classes */}
          <img src={sinanImg} alt="Muhammad Sinan Abdussyakur" className="md:w-full w-96 h-auto " /> 
        </div>
      </div>
    </div>
  );
}

export default About;
