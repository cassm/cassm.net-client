import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Frontpage} from "./Frontpage";
import ShaderBackdrop from "./ShaderBackdrop";
import {useEffect, useState} from "react";
import {Navigation} from "./Navigation";
import {About} from "./About";
import Talks from "./Talks";
import {Contact} from "./Contact";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    }
  }, []);

  return (
    <section className="App">
      <Router>
        <Navigation className='navbar'/>

        <div className='page'>
          <svg width='0' height='0'>
            <defs>
              <clipPath id='moon' clipPathUnits = 'userSpaceOnUse'>
                <circle cx={width*0.5} cy={0} r={width*0.4}/>
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
                <Route path='/' element={<Frontpage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/talks' element={<Talks/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
            </div>
        </div>
      </Router>
    </section>
  );
}

export default App;
