import './App.css'
import Topbar from './components/Topbar.jsx';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <>
    <div className="all-container">
      <Topbar />
      <div className='home-section px-0 py-0 dark:bg-neutral-900'>
        <Home />
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="portfolio-section dark:bg-neutral-900">
        <Portfolio />
      </div>
    </div>
    </>
  )
}

export default App
