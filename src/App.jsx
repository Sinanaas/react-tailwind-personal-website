import './App.css'
import Topbar from './components/Topbar.jsx';
import About from './components/About';


function App() {
  return (
    <>
    <div className="all-container">
      <Topbar />
      <div className='about-section px-0 py-0 dark:bg-neutral-900'>
        <About />
      </div>
      

    </div>
    </>
  )
}

export default App
