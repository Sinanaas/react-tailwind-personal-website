import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_88ziwsr', 'template_5ty8935', form.current, 'MXZpCdpJz8PVU2j9_')
      .then(
        () => {
          alert('Transmission received!');
          e.target.reset();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  };

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden border-t-2 border-surface-variant" id="CONTACT">
      {/* Faint sticker decorations */}
      <img src="/assets/VotedSticker_01.png" alt="" aria-hidden="true" className="absolute top-8 right-10 w-20 opacity-[0.08] rotate-12 pointer-events-none select-none" />
      <img src="/assets/VotedSticker_03.png" alt="" aria-hidden="true" className="absolute bottom-16 left-8 w-14 opacity-[0.06] -rotate-12 pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section header — mirrors About style */}
        <div className="flex items-center gap-8 mb-20">
          <div className="h-[2px] flex-grow bg-outline-variant/30" />
          <h2 className="font-headline text-4xl font-bold text-on-surface italic whitespace-nowrap">
            CONTACTS
          </h2>
          <div className="h-[2px] flex-grow bg-outline-variant/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <p className="font-body text-on-surface/60 leading-relaxed">
              Open to backend engineering roles, freelance work, and technical conversations.
              Reach out through any channel below.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:muhammadsinanabdussyakur@gmail.com"
                className="group flex items-center gap-4 p-4 border border-outline-variant/20 bg-surface-container hover:border-primary/40 transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-xl shrink-0">mail</span>
                <div>
                  <p className="font-label text-[9px] text-outline uppercase tracking-widest mb-0.5">EMAIL</p>
                  <p className="font-label text-xs text-on-surface/70 group-hover:text-primary transition-colors break-all">muhammadsinanabdussyakur@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Sinanaas"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-outline-variant/20 bg-surface-container hover:border-primary/40 transition-colors"
              >
                <i className="devicon-github-original text-primary text-xl shrink-0" />
                <div>
                  <p className="font-label text-[9px] text-outline uppercase tracking-widest mb-0.5">GITHUB</p>
                  <p className="font-label text-xs text-on-surface/70 group-hover:text-primary transition-colors">github.com/Sinanaas</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-sinan-abdussyakur-836b13201/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-outline-variant/20 bg-surface-container hover:border-primary/40 transition-colors"
              >
                <i className="devicon-linkedin-plain text-primary text-xl shrink-0" />
                <div>
                  <p className="font-label text-[9px] text-outline uppercase tracking-widest mb-0.5">LINKEDIN</p>
                  <p className="font-label text-xs text-on-surface/70 group-hover:text-primary transition-colors">muhammad-sinan-abdussyakur</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-surface-container border border-outline-variant/20 relative">
            {/* Top amber bar */}
            <div className="h-[2px] w-full bg-primary" />

            <div className="px-8 py-6 border-b border-outline-variant/10 flex items-center gap-3">
              <img src="/assets/Souls.png" alt="" className="w-3 h-3 object-contain opacity-70" />
              <span className="font-label text-[10px] text-primary uppercase tracking-widest">LEAVE A MESSAGE</span>
            </div>

            <form ref={form} onSubmit={sendEmail} className="p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label text-[9px] text-outline uppercase tracking-widest">
                    SENDER NAME
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="ENTER NAME..."
                    required
                    className="bg-surface pl-2 border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface font-label text-xs py-2 px-0 placeholder:text-on-surface/20 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-[9px] text-outline uppercase tracking-widest">
                    RETURN EMAIL
                  </label>
                  <input
                    name="from"
                    type="email"
                    placeholder="USER@STATION.COM"
                    required
                    className="bg-surface border-0 pl-2 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface font-label text-xs py-2 px-0 placeholder:text-on-surface/20 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label text-[9px] text-outline uppercase tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="TYPE SIGNAL CONTENT HERE..."
                  required
                  className="bg-surface pl-2 border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface font-label text-xs py-2 px-0 placeholder:text-on-surface/20 outline-none resize-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-primary text-on-primary font-label font-bold text-xs px-10 py-3 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
                >
                  TRANSMIT
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
