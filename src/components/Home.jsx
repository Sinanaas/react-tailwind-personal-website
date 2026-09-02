const bgImg = '/assets/team1_bg_psd.png';
const soulsIcon = '/assets/Souls.png';
const spiritIcon = '/assets/Spirit.png';

const skills = {
  'LANGUAGES': ['Golang', 'JavaScript', 'TypeScript', 'Java', 'X++ (Ax365 F&O)'],
  'BACKEND': ['Express.js', 'gRPC', 'RabbitMQ', 'Consul', 'Jaeger'],
  'FRONTEND': ['HTML5', 'Tailwind CSS'],
  'DATABASES': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'TOOLS': ['Docker', 'Nginx', 'AWS', 'Git'],
};

const Home = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 lg:px-20 py-20 bg-surface">
      {/* Deadlock menu background */}
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          className="w-full h-full object-cover"
          src={bgImg}
        />
        {/* Dark vignette so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 py-1 px-3 bg-surface-container-highest border-l-4 border-primary self-start">
            <span className="font-label text-xs tracking-tighter text-primary">
              BINA NUSANTARA UNIVERSITY - CLASS 2025
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none text-on-surface tracking-tighter italic">
            MUHAMMAD SINAN<br />
            <span className="text-primary-container">ABDUSSYAKUR</span>
          </h1>

          <p className="font-label text-sm text-primary uppercase tracking-[0.3em]">
            BACKEND ENGINEER
          </p>

          <p className="font-body text-xl text-on-surface/80 max-w-xl leading-relaxed">
            I build backend systems. Express (JS/TS) APIs at Paragon, X++ (Ax365 F&O) ERP features at AGIT,
            and Golang side projects: event-driven microservices on gRPC and RabbitMQ, with PostgreSQL, MongoDB, and Docker.
          </p>

          {/* Status + social chips */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-surface-container-highest/60 px-3 py-2 border border-outline-variant/20">
              <img src={soulsIcon} alt="Souls" className="w-5 h-5 object-contain" />
              <span className="font-label text-[10px] text-primary uppercase tracking-widest">2 INTERNSHIPS</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-highest/60 px-3 py-2 border border-outline-variant/20">
              <img src={spiritIcon} alt="Spirit" className="w-5 h-5 object-contain" />
              <span className="font-label text-[10px] text-primary uppercase tracking-widest">OPEN TO WORK</span>
            </div>
            <a
              href="https://github.com/Sinanaas"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-surface-container-highest/60 px-3 py-2 border border-outline-variant/20 hover:border-primary/40 transition-colors"
            >
              <i className="devicon-github-original text-primary text-base" />
              <span className="font-label text-[10px] text-on-surface/70 group-hover:text-primary uppercase tracking-widest transition-colors">GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sinan-abdussyakur-836b13201/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-surface-container-highest/60 px-3 py-2 border border-outline-variant/20 hover:border-primary/40 transition-colors"
            >
              <i className="devicon-linkedin-plain text-primary text-base" />
              <span className="font-label text-[10px] text-on-surface/70 group-hover:text-primary uppercase tracking-widest transition-colors">LINKEDIN</span>
            </a>
          </div>

          {/* Primary actions */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="mailto:muhammadsinanabdussyakur@gmail.com">
              <button className="bg-gradient-to-r from-primary to-primary-container px-8 py-4 font-label font-bold text-on-primary uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all">
                EMAIL ME
              </button>
            </a>
            <a href="#PORTFOLIO">
              <button className="border border-outline-variant bg-surface-container-highest px-8 py-4 font-label font-bold text-primary uppercase tracking-wider hover:bg-surface-bright transition-all">
                VIEW PORTFOLIO
              </button>
            </a>
            <a href="/assets/resume.pdf" download="Muhammad Abdussyakur - Resume.pdf">
              <button className="border border-outline-variant bg-surface-container-highest px-8 py-4 font-label font-bold text-primary uppercase tracking-wider hover:bg-surface-bright transition-all">
                DOWNLOAD CV
              </button>
            </a>
          </div>

          {/* Skills strip */}
          <div className="border-t border-outline-variant/20 pt-6 flex flex-wrap gap-x-6 gap-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex items-center gap-2">
                <span className="font-label text-[9px] text-outline uppercase tracking-widest shrink-0">{category}</span>
                <span className="text-outline-variant/30">·</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-label text-[10px] uppercase px-2 py-0.5"
                      style={{ color: 'rgba(255,185,95,0.6)', border: '1px solid rgba(255,185,95,0.15)', background: 'rgba(255,185,95,0.05)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Home;
