import './App.css'
import Topbar from './components/Topbar.jsx';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import FadeInSection from "./components/FadeInSection";
import Movies from './components/Movies';



function App() {
  return (
    <>
      <div className="all-container">
        <Topbar />
        <div className='home-section px-0 py-0 bg-neutral-900' id='HOME'>
          <FadeInSection>
            <Home />
          </FadeInSection>
        </div>
        <div className="about-section scroll-mt-[10vh]" id='ABOUT' >
          <About />
        </div>
        <div className="portfolio-section bg-neutral-900 scroll-mt-[10vh]" id='PORTFOLIO'>
          <Portfolio />
        </div>
        <div className="movies-section bg-neutral-900 scroll-mt-[10vh]" id='MOVIES'>
          <Movies />
        </div>
        <div className="contacts-section" id='CONTACT'>
          <Contacts />
        </div>
      </div>
    </>
  )
}

export default App
