import './App.css';
import {Frontpage} from "./Frontpage";
import {ThreeBackdrop} from "./ThreeBackdrop";

function App() {
  return (
    <section className="App">
      <div className='three-backdrop-canvas'>
        <ThreeBackdrop/>
      </div>
      <div className='page-section'>
        <Frontpage/>
      </div>
    </section>
  );
}

export default App;
