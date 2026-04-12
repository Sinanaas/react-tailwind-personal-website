import './App.css';
import Topbar from './components/Topbar.jsx';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* Film grain overlay */}
      <div className="film-grain" />

      <Topbar />

      <main>
        <div id="ABOUT">
          <Home />
        </div>

        <Portfolio />

        <About />

        <Contacts />
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center justify-center w-full py-12 px-6 gap-4 bg-surface-container-low border-t-4 border-background overflow-hidden">
        <img
          src="/assets/minimap.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.04] pointer-events-none select-none"
        />

        <p className="text-on-surface/40 font-label text-[14px] uppercase tracking-[0.2em] mt-4 relative z-10">
          © {new Date().getFullYear()} SINANAAS
        </p>
        <p className="text-on-surface/25 font-label text-[9px] tracking-wide text-center max-w-lg relative z-10">
          Deadlock assets used in this portfolio are sourced from{' '}
          <a
            href="https://github.com/deadlock-api/deadlock-api-assets"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-on-surface/50 transition-colors"
          >
            github.com/its-nion/deadlock-assets
          </a>
          . All Deadlock assets are property of Valve Corporation. Not affiliated with or endorsed by Valve.
        </p>
      </footer>
    </div>
  );
}

export default App;
