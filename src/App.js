import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Frontpage from "./Frontpage";
import ShaderBackdrop from "./ShaderBackdrop";
import {useEffect, useState} from "react";
import NavBar from "./NavBar";
import About from "./About";
import Talks from "./Talks";
import Contact from "./Contact";

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  })

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        x: window.innerWidth,
        y: window.innerHeight
      });
    }

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar className='navbar' windowDimensions={windowDimensions}/>

        <div className='page'>
          <svg width='0' height='0'>
            <defs>
              <clipPath id='moon' clipPathUnits='userSpaceOnUse'>
                <circle cx={windowDimensions.x * 0.5} cy={0} r={windowDimensions.y * 0.8}/>
              </clipPath>
            </defs>
          </svg>

          <div className='shader-blur'>
            <div className='shader-backdrop'>
              <ShaderBackdrop/>
            </div>
          </div>
          <div className='page-section'>
            <Routes>
              <Route path='/' element={<Frontpage windowDimensions={windowDimensions}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/talks' element={<Talks/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
