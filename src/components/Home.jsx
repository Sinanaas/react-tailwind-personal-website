import React, { useState } from 'react';
import sinanImg from '../../public/assets/foto2.png';
import './Home.css';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  const handleImageLoaded = () => {
    setLoading(false);
  }

  const handleImageError = () => {
    setLoading(false);
  }

  return (
    <div className='md:p-0 home-sections bg-opacity-0 container mx-auto md:h-[100vh] md:flex items-center justify-center'>
      <div className="pt-28 p-8 md:p-0 md:pt-16 md:pb-0 pb-8 w-full md:flex text-amber-50 justify-center items-center">
        <div className="md:w-[29vw] md:mb-0 mb-14 md:text-left lg:mr-32 md:mr-12">
          <h1 className='font-bold md:text-6xl lg:text-7xl text-4xl mb-4'>Hello There!</h1>
          <p className='text-xl md:text-lg font-semibold mx-auto'>My name is Muhammad Sinan Abdussyakur, an undergraduate student at Bina Nusantara University majoring in Computer Science and currently living in Jakarta, Indonesia. Welcome to my portfolio :)</p>
        </div>
        <div className="lg:w-[30vw] md:w-[40vw] flex items-center justify-center mt-6">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center ml-[650px]">
              <ClipLoader color={color} loading={loading} size={50} />
            </div>
          )}
          <img
            src={sinanImg}
            alt="Muhammad Sinan Abdussyakur"
            className={`sinanImage md:w-full w-96 h-auto ${loading ? 'hidden' : 'block'}`}
            onLoad={handleImageLoaded}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
