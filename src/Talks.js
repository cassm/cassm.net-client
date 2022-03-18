import './Talks.css';
import {memo} from 'react';
import Talk from './Talk'

const Talks = memo((props) => {
  return (
    <div className='talks'>
      <Talk
        src='https://www.youtube.com/embed/iU2-qH7wGcU'
        title='[EMF 2018] Algorithmic Light Art: How to Not Suck'
        description={
          <div>
            Everybody loves blinky LEDs, but what do you do with them once you've got them to not catch fire? A veteran
            LED
            addict presents a selection of tips, tricks, and cheats (oh god so many cheats) for getting your project to,
            well, shine.

            <ul>
              <li>LED types (RGB, RGBW, RGBWW, WWA, WTF?)</li>
              <li>Getting away with the bare minimum (six sine waves and a bitmap)</li>
              <li>Gamma correction, why and how?</li>
              <li>Easing functions</li>
              <li>Optimisation (cheating)</li>
              <li>Geometry and localisation</li>
              <li>When to random</li>
              <li>How not to random</li>
              <li>An exclusive collection of my personal fuckups</li>
            </ul>
          </div>
        }/>
    </div>
  );
});


export default Talks;