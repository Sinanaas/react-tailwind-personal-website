import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'ABOUT',       href: '#ABOUT',      id: 'ABOUT' },
  { label: 'PORTFOLIO', href: '#PORTFOLIO', id: 'PORTFOLIO' },
  { label: 'EXPERIENCES',    href: '#EXPERIENCES',     id: 'EXPERIENCES' },
  { label: 'CONTACTS',  href: '#CONTACT',   id: 'CONTACT' },
];

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('ABOUT');

  useEffect(() => {
    const closeOnDesktop = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      {
        // Fire when a section crosses the upper 20% of the viewport
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="flex justify-between md:grid md:grid-cols-3 items-center w-full px-6 py-4 sticky top-0 z-50 bg-background border-b-2 border-surface-variant">
      <div className="flex items-center gap-3">
        <img
          src="/assets/deadlock-mark.svg"
          alt="Deadlock mark"
          className="h-8 w-8 object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(61%) saturate(568%) hue-rotate(338deg) brightness(102%) contrast(101%)' }}
        />
        <span className="text-xl font-black text-primary italic font-headline uppercase tracking-widest hidden sm:block">
          SINANAAS
        </span>
      </div>

      <nav className="hidden md:flex justify-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-label uppercase tracking-widest transition-all duration-200 px-1 pb-1 hover:text-primary hover:bg-surface-variant ${
              activeId === link.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-on-surface/60'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary p-2 hover:bg-surface-variant transition-all"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b-2 border-surface-variant md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-label uppercase tracking-widest px-8 py-4 transition-all border-b border-surface-variant hover:text-primary hover:bg-surface-variant ${
                  activeId === link.id ? 'text-primary' : 'text-on-surface/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Topbar;
