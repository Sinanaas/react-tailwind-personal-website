const entries = [
  {
    period: 'NOV 2025 — PRESENT',
    title: 'BACKEND ENGINEER — PT. PARAGON TECHNOLOGY AND INNOVATION',
    location: 'Jakarta, Indonesia',
    status: 'ACTIVE',
    statusStyle: 'bg-primary-container/20 text-primary-container outline-primary-container/30',
    dotStyle: 'bg-primary',
    bullets: [
      'Developed and implemented a Product Information Management (PIM) system using Express.js and Sequelize ORM, supporting Paragon\'s omnichannel product data operations.',
      'Managed and delivered multiple Jira tickets spanning CRON Jobs, database migrations, proxy configuration, authentication, report generation, and CRUD operations.',
      'Enhanced maintainability by refactoring hardcoded values into enumerations and implementing reusable, modular code patterns.',
    ],
  },
  {
    period: 'FEB 2024 — FEB 2025',
    title: 'APPLICATION DEVELOPER — PT. ASTRA GRAPHIA INFORMATION TECHNOLOGY',
    location: 'Jakarta, Indonesia',
    status: 'ARCHIVED',
    statusStyle: 'bg-surface-container-highest text-outline outline-outline/30',
    dotStyle: 'bg-primary-container',
    bullets: [
      'Developed advanced features for an ERP system (Ax365 FO) using X++ and OOP, covering custom forms, SSRS reports, and Chain of Command extensions.',
      'Provided complex multi-table SQL queries to support the PowerApps testing team.',
      'Delivered CR Flagging Service Contract (validation & WR-to-WO conversion) and CR Validasi Expire (sorting, visual highlighting, and batch CRON Job for data flagging).',
    ],
  },
  {
    period: '2021 — 2025',
    title: 'COMPUTER SCIENCE — BINA NUSANTARA UNIVERSITY',
    location: 'Bandung, Indonesia · GPA 3.71',
    status: 'GRADUATED',
    statusStyle: 'bg-surface-container-highest text-outline outline-outline/30',
    dotStyle: 'bg-surface-container-highest',
    bullets: [
      'Focus area: Back-end / Full-Stack Development and Web Development.',
      'Coursework spanning C, Java, Laravel, ASP.NET, React, Data Structures, Algorithms, and Computer Networks.',
      'Built projects including a real-time auction platform (Go + WebSockets), vehicle rental portal (Laravel + React), and sign language detector (MediaPipe).',
    ],
  },
];

const About = () => {
  return (
    <section className="bg-surface py-24 px-6 relative overflow-hidden" id="EXPERIENCES">
      <img
        src="/assets/Hero_Seven.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-16 bottom-0 h-[90%] object-contain object-bottom opacity-[0.06] pointer-events-none select-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-8 mb-20">
          <div className="h-[2px] flex-grow bg-outline-variant/30" />
          <h2 className="font-headline text-4xl font-bold text-on-surface italic whitespace-nowrap">
            EXPERIENCES
          </h2>
          <div className="h-[2px] flex-grow bg-outline-variant/30" />
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-12 relative border-l-2 border-surface-variant ml-4 pl-12">
          {entries.map((entry, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[58px] top-0 w-4 h-4 border-4 border-surface ring-4 ring-primary/20 ${entry.dotStyle}`}
              />

              <div className="bg-surface-container p-8 border border-outline-variant/10 shadow-xl group-hover:border-primary/40 transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <div>
                    <span className="font-label text-xs text-primary flex items-center gap-1.5 mb-1">
                      <img src="/assets/Souls.png" alt="" className="w-3 h-3 object-contain opacity-70" />
                      {entry.period}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">{entry.title}</h3>
                    {entry.location && (
                      <p className="font-label text-[11px] text-outline tracking-wider mt-1">{entry.location}</p>
                    )}
                  </div>
                  <span
                    className={`font-label text-[10px] px-3 py-1 outline outline-1 uppercase ${entry.statusStyle}`}
                  >
                    STATUS: {entry.status}
                  </span>
                </div>

                {entry.bullets ? (
                  <ul className="font-body text-on-surface/70 space-y-3 list-none">
                    {entry.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-bold">»</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-body text-on-surface/70 italic">{entry.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
