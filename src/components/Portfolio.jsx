import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import works from '../works.json';

const techLabel = {
  react: 'REACT',
  laravel: 'LARAVEL',
  python: 'PYTHON',
  java: 'JAVA',
  'dot-net': 'ASP.NET',
  golang: 'GO',
  postgresql: 'POSTGRES',
  tailwindcss: 'TAILWIND',
  bootstrap: 'BOOTSTRAP',
  htmx: 'HTMX',
  templ: 'TEMPL',
};

const getTechLabel = (tech) => techLabel[tech] || tech.toUpperCase();

const ItemCard = ({ item, onOpen }) => (
  <div
    className="group relative bg-surface-container-low flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
    style={{ boxShadow: '0 2px 0 rgba(255,185,95,0.15), 0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(255,185,95,0.1)' }}
    onClick={() => onOpen(item)}
  >
    <div className="h-[2px] w-full bg-primary opacity-60" />

    <div className="aspect-[16/10] overflow-hidden relative bg-surface-container-lowest" style={{ transform: 'translateZ(0)' }}>
      <img
        src={item.imgSrc}
        alt={item.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-50 group-hover:opacity-90"
        style={{ transition: 'transform 700ms ease, filter 700ms ease, opacity 700ms ease', willChange: 'transform, filter, opacity', backfaceVisibility: 'hidden' }}
      />
      <div className="scanlines absolute inset-0 z-10 pointer-events-none opacity-40" />
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #20201f 0%, transparent 60%)' }} />
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-1 bg-background/80" style={{ borderLeft: '2px solid #ffb95f' }}>
        <img src="/assets/Souls.png" alt="" className="w-3 h-3 object-contain opacity-80" />
        <span className="font-label text-[9px] text-primary tracking-[0.2em] uppercase">
          {String(item.id).padStart(3, '0')}
        </span>
      </div>
    </div>

    <div className="flex flex-col gap-3 px-5 py-4 flex-1">
      <h3 className="font-headline text-xl font-bold text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">
        {item.title}
      </h3>
      <p className="font-body text-[13px] text-on-surface/45 line-clamp-2 leading-relaxed">
        {item.desc}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,185,95,0.1)' }}>
        <div className="flex gap-1.5 flex-wrap">
          {item.tech.slice(0, 3).map((t) => (
            <span key={t}
              className="px-2 py-0.5 font-label text-[9px] uppercase tracking-wider"
              style={{ color: 'rgba(255,185,95,0.5)', border: '1px solid rgba(255,185,95,0.15)' }}>
              {getTechLabel(t)}
            </span>
          ))}
        </div>
        <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 text-lg">
          arrow_forward
        </span>
      </div>
    </div>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    id:     PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    desc:   PropTypes.string.isRequired,
    tech:   PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);

  const openModal = (item) => {
    setSelected(item);
    setClosing(false);
    setModal(true);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => { setModal(false); setClosing(false); }, 200);
  };

  const handleModalClick = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    closeModal();
  };

  useEffect(() => {
    document.body.style.overflowY = modal ? 'hidden' : 'scroll';
    const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflowY = 'scroll';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [modal]);

  return (
    <section className="bg-surface-container-low py-24 px-6 border-y-4 border-surface" id="PORTFOLIO">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-5xl font-bold text-primary mb-2 italic">
              PORTFOLIO
            </h2>
            <div className="h-1 w-32 bg-primary" />
          </div>
          <p className="hidden md:block font-label text-xs text-outline tracking-widest max-w-xs text-right">
            [ PAST PROJECTS ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((item, idx) => (
            <ItemCard key={item.id + '-' + idx} item={item} onOpen={openModal} />
          ))}
        </div>
      </div>

      {modal && selected && (() => (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleModalClick}>
          <div className={`absolute inset-0 bg-black/80 ${closing ? 'modal-backdrop-exit' : 'modal-backdrop-enter'}`} />

          <div
            ref={modalRef}
            className={`relative w-[90%] max-w-3xl bg-surface-container overflow-y-auto max-h-[85vh] border border-outline-variant/30 ${closing ? 'modal-panel-exit' : 'modal-panel-enter'}`}
          >
            <div className="h-[2px] w-full bg-primary" />

            <div className="flex items-center justify-between px-6 py-3 border-b border-outline-variant/20 bg-surface-container-high">
              <div className="flex items-center gap-3">
                <span className="font-label text-[9px] uppercase tracking-widest px-2 py-0.5 text-primary border border-primary/40">
                  PROJECT
                </span>
                <span className="font-label text-xs text-on-surface/60 uppercase tracking-widest">
                  {selected.title.toUpperCase()}
                </span>
              </div>
              <button onClick={closeModal} className="text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="md:flex">
              <div className="md:w-1/2 bg-surface-container-lowest relative overflow-hidden">
                <img
                  src={selected.imgSrc}
                  alt={selected.title}
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
                <div className="scanlines absolute inset-0 pointer-events-none opacity-40" />
              </div>

              <div className="md:w-1/2 p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/assets/Souls.png" alt="" className="w-4 h-4 object-contain" />
                    <span className="font-label text-[10px] text-primary">PROJECT #{String(selected.id).padStart(3, '0')}</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface italic">
                    {selected.title}
                  </h3>
                </div>

                <p className="font-body text-sm text-on-surface/75 leading-relaxed">
                  {selected.desc}
                </p>

                <div>
                  <p className="font-label text-[9px] text-outline uppercase tracking-widest mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[11px] font-label uppercase"
                        style={{ color: '#ffb95f', border: '1px solid rgba(255,185,95,0.3)', background: 'rgba(255,185,95,0.08)' }}
                      >
                        {getTechLabel(t)}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={selected.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <button className="w-full font-label font-bold py-3 uppercase tracking-wider transition-all hover:brightness-110 bg-primary text-on-primary">
                    OPEN
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))()}
    </section>
  );
};

export default Portfolio;
