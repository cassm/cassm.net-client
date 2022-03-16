import './App.css';
import {Frontpage} from "./Frontpage";
import ShaderBackdrop from "./ShaderBackdrop";
import {useState, useEffect} from "react";

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
        <Frontpage/>
      </div>
    </section>
  );
}

export default App;
