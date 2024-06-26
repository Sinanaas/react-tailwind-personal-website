import React, { useState, useEffect } from 'react';

const Topbar = () => {

  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed z-50 px-8 min-h-[10vh] py-2 pt-3 mb-4 drop-shadow-lg ${scrolling ? 'bg-neutral-900' : 'bg-transparent'} transition-all duration-500 ease-in-out `}>
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 `}>
        <a href="#HOME" className="flex items-center">
          <span className="self-center md:text-4xl text-2xl font-semibold whitespace-nowrap text-amber-100">SINANAAS</span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-100 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${menuOpen ? 'hidden' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
          <svg
            className={`w-5 h-5 ${menuOpen ? '' : 'hidden'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className={`font-medium flex flex-col md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  border-neutral-700`}>
            <li onClick={toggleMenu}>
              <a href="#ABOUT" className="text-xl block py-2 pl-3 pr-4 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0 md:p-0 text-amber-50 md:hover:text-amber-200 hover:underline hover:underline-offset-4 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">
                About
              </a>
            </li>
            <li className='border-t-[1px] md:border-[0] border-neutral-700' onClick={toggleMenu}>
              <a href="#PORTFOLIO" className="text-xl block py-2 pl-3 pr-4 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0  md:p-0 text-amber-50 md:hover:text-amber-200 hover:underline hover:underline-offset-4 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">
                Portfolio
              </a>
            </li>
            <li className='border-t-[1px] md:border-[0] border-neutral-700' onClick={toggleMenu}>
              <a href="#CONTACT" className="text-xl block py-2 pl-3 pr-4 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0  md:p-0 text-amber-50 md:hover:text-amber-200 hover:underline hover:underline-offset-4 hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
