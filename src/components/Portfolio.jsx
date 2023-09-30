import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-solid-svg-icons';
import { fa } from '@fortawesome/free-solid-svg-icons';
import works from '../works.json';

const Portfolio = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const [tempDesc, setTempDesc] = useState('');
  const [tempLink, setTempLink] = useState('');
  const [tempTitle, setTempTitle] = useState('');

  const getAll = (item) => {
    setTempImgSrc(item.imgSrc);
    setTempDesc(item.desc);
    setTempLink(item.link);
    setTempTitle(item.title);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
  };
  
  useEffect(() => {
    if (model) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }

    const handleEscKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.body.style.overflowY = 'scroll';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [model]);
  

  return (
    <div className="container mx-auto p-10 md:p-20 md:px-[8%] min-h-[100vh] flex flex-col items-center justify-center ">
        <h1 className="text-4xl md:text-6xl mb-8 md:mb-16 text-amber-100 font-semibold underline underline-offset-8">PORTFOLIO</h1>
        <div className={model ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80' : 'hidden'} onClick={closeModal}>
            <div className="md:flex max-w-[90%] h-auto md:h-auto md:max-h-[80%] bg-neutral-800 overflow-y-auto rounded-lg py-4 px-8 border-2 border-neutral-900">
                <div className="modal-image flex flex-col justify-center items-center md:w-[60%]">
                    <h2 className='font-bold text-amber-100 text-lg md:text-2xl mb-2 md:hidden'>{tempTitle}</h2>
                    <img src={tempimgSrc} alt={tempDesc} className="rounded h-full w-full drop-shadow-xl aspect-video object-cover md:object-contain h-full" />
                </div>
                <div className="flex flex-col modal-details md:ml-4 w-full text-amber-50 md:text-left  md:pt-0 md:w-[40%]">
                    <h2 className='font-bold underline underline-offset-8 text-2xl mb-2 text-amber-100 hidden md:block'>{tempTitle}</h2>
                    <h2 className="text-base text-left text-left hidden text-amber-50 md:block overflow-y-auto">{tempDesc}</h2>
                    <a href={tempLink} className="my-4" target='_blank'>
                        <button className="uppercase bg-amber-500 md:w-40 w-full hover:bg-amber-600 text-white font-bold py-2 px-4 rounded shadow-lg">Visit Link</button>
                    </a>
                    <h2 className="md:text-xl text-sm text-left md:hidden md:text-center block overflow-y-auto max-h-36 h-36 w-full h-full mb-2">{tempDesc}</h2>
                </div>
                <div className="close-button justify-end">
                    <FontAwesomeIcon icon={faClose} className="text-gray-500 cursor-pointer" size="2x" onClick={closeModal} />
                </div>
            </div>
        </div>
        <div className="md:container md:mx-auto bg-neutral-900 grid grid-cols-2 grid-cols-2 md:grid-cols-4 gap-6">
            {works.map((item) => (
                <div key={item.id} className="relative group">
                    <div className="cursor-pointer max-w-xs overflow-hidden bg-cover bg-no-repeat" onClick={() => getAll(item)}>
                        <img src={item.imgSrc} alt={item.desc} className="w-full h-full object-cover aspect-square rounded-sm group-hover:blur-[2px]" />
                        <div className="absolute inset-0 h-full w-full bg-neutral-900 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-70 flex flex-col justify-center items-center">
                            <p className="text-white text-center">{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Portfolio;
