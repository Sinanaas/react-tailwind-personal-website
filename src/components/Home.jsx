const bgImg = '/assets/team1_bg_psd.png';
const soulsIcon = '/assets/Souls.png';
const spiritIcon = '/assets/Spirit.png';

const skills = {
  'LANGUAGES': ['Golang', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'X++', 'C'],
  'BACKEND': ['Express.js', 'Sequelize ORM', 'ASP.NET', 'Laravel', 'Spring Boot', 'Jest', 'PHP'],
  'FRONTEND': ['React', 'Tailwind CSS', 'Bootstrap', 'HTMX'],
  'DATABASES': ['PostgreSQL', 'MySQL', 'Microsoft SQL Server'],
  'TOOLS': ['Git', 'Docker', 'Linux', 'Jira', 'Postman'],
};

const Home = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 py-20 bg-surface">
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

      <div className="relative z-10 max-w-5xl w-full flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 py-1 px-3 bg-surface-container-highest border-l-4 border-primary self-start">
            <span className="font-label text-xs tracking-tighter text-primary">
              BINA NUSANTARA UNIVERSITY — CLASS 2025
            </span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-extrabold leading-none text-on-surface tracking-tighter italic">
            BACKEND<br />
            <span className="text-primary-container">ENGINEER</span>
          </h1>

          <p className="font-body text-xl text-on-surface/80 max-w-xl leading-relaxed">
            Motivated backend engineer with hands-on experience at PT Paragon Technology and Innovation and PT Astra Graphia Information Technology.
            Proficient in Golang, Java, SQL, and Express.js — building scalable systems and delivering production-ready features.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#CONTACT">
              <button className="bg-gradient-to-r from-primary to-primary-container px-8 py-4 font-label font-bold text-on-primary uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all">
                CONTACT
              </button>
            </a>
            <a href="#PORTFOLIO">
              <button className="border border-outline-variant bg-surface-container-highest px-8 py-4 font-label font-bold text-primary uppercase tracking-wider hover:bg-surface-bright transition-all">
                VIEW PORTFOLIO
              </button>
            </a>
          </div>

          {/* Deadlock stat badges */}
          <div className="flex gap-6 mt-2">
            <div className="flex items-center gap-2 bg-surface-container-highest/60 px-3 py-2 border border-outline-variant/20">
              <img src={soulsIcon} alt="Souls" className="w-5 h-5 object-contain" />
              <span className="font-label text-[10px] text-primary uppercase tracking-widest">2 INTERNSHIPS</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-highest/60 px-3 py-2 border border-outline-variant/20">
              <img src={spiritIcon} alt="Spirit" className="w-5 h-5 object-contain" />
              <span className="font-label text-[10px] text-primary uppercase tracking-widest">OPEN TO WORK</span>
            </div>
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
