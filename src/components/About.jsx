const entries = [
  {
    period: 'NOV 2025 - MAY 2026',
    title: 'BACKEND ENGINEER INTERN - PT. PARAGON TECHNOLOGY AND INNOVATION',
    location: 'Jakarta, Indonesia',
    status: 'ARCHIVED',
    statusStyle: 'bg-surface-container-highest text-outline outline-outline/30',
    dotStyle: 'bg-primary-container',
    bullets: [
      'Worked on a Product Information Management (PIM) system in Express.js and Sequelize that handles product data for Paragon\'s online marketplaces.',
      'Built cron jobs, migrations, authentication, and reporting for the multi-department product-approval pipeline; ≥80% of product submissions passed approval within 3 days and rework stayed below 20%.',
      'Replaced scattered hardcoded values with enums and cleaned up repeated code.',
    ],
  },
  {
    period: 'FEB 2024 - FEB 2025',
    title: 'APPLICATION DEVELOPER INTERN - PT. ASTRA GRAPHIA INFORMATION TECHNOLOGY',
    location: 'Jakarta, Indonesia',
    status: 'ARCHIVED',
    statusStyle: 'bg-surface-container-highest text-outline outline-outline/30',
    dotStyle: 'bg-primary-container',
    bullets: [
      'Built custom features for a Microsoft Dynamics 365 Finance & Operations (D365 F&O) ERP system in X++, using the Chain of Command extension pattern to extend without touching base code.',
      'Wrote SQL queries to support the PowerApps team during integration testing.',
      'Shipped several ERP features end-to-end in X++: custom forms, business-rule validation, and a scheduled batch job that flags records automatically.',
    ],
  },
  {
    period: '2021 - 2025',
    title: 'COMPUTER SCIENCE - BINA NUSANTARA UNIVERSITY',
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
    <section className="bg-surface py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="EXPERIENCES">
      <div className="max-w-6xl mx-auto relative z-10">
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
