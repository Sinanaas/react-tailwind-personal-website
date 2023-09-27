import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
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

  return (
    <div className="p-10 md:p-20 md:px-80 min-h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl mb-8 md:mb-16 text-amber-100 font-semibold underline">PORTFOLIO</h1>
        <div className={model ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80' : 'hidden'}>
            <div className="md:flex w-[80%] max-h-[80%] bg-amber-50 rounded-lg p-10">
                <div className="modal-image flex flex-col justify-center items-center md:w-[60%]">
                    <h2 className='font-bold text-lg md:text-2xl mb-2 md:hidden'>{tempTitle}</h2>
                    <img src={tempimgSrc} alt={tempDesc} className="rounded drop-shadow-xl aspect-square object-cover md:object-contain h-full" />
                </div>
                <div className="flex flex-col modal-details md:ml-4 w-full md:text-left pt-4 md:pt-10 md:w-[60%]">
                    <h2 className='font-bold text-2xl mb-2 hidden md:block'>{tempTitle}</h2>
                    <h2 className="text-base text-left text-left hidden md:block">{tempDesc}</h2>
                    <a href={tempLink} className="mb-4">
                        <button className="bg-blue-500 md:w-40 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">Visit Link</button>
                    </a>
                    <h2 className="md:text-xl text-sm text-left md:text-center sm:hidden">{tempDesc}</h2>
                </div>
                <div className="close-button">
                    <FontAwesomeIcon icon={faClose} className="text-gray-500 cursor-pointer" size="2x" onClick={closeModal} />
                </div>
            </div>
        </div>
        <div className="md:container md:mx-auto dark:bg-neutral-900 grid grid-cols-2 grid-cols-2 md:grid-cols-4 gap-6">
            {works.map((item) => (
                <div key={item.id}>
                    <div className="cursor-pointer" onClick={() => getAll(item)}>
                        <img src={item.imgSrc} alt={item.desc} className="w-full h-full object-cover aspect-square rounded-sm " />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Portfolio;
