import './LoadingCycle.css';
import gsap from 'gsap';
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState, useRef} from "react";

const LoadingCycle = (props) => {
  const [uuid] = useState(uuidv4());
  const dots = [];
  const numDots = props.numDots || 7;
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    const tl = gsap.timeline();
    const dotDuration = 0.3;
    const fadeDuration = 0.75;
    const staggerEach = 0.1;

    tl.set(q('.loading-cycle'), {transformOrigin: "50% 50%"})

    for (let i = 0; i < numDots; i++) {
      const dotSelector = q(`.loading-dot-${uuid}-${i}`);
      tl.set(dotSelector, {scale: 1})
        .set(dotSelector, {transformOrigin: "50% 50%"})
        .fromTo(dotSelector,
          {opacity: 0, scale: 0.6},
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            duration: dotDuration,
            fill: "#F7C90F",
            delay: staggerEach * i,
            repeat: -1,
            repeatDelay: staggerEach * (numDots) - dotDuration
          }, "0")
    .to(dotSelector,
          {
            scale: 0.3,
            opacity: 0,
            ease: "none",
            transformOrigin: "50% 50%",
            fill: "#dd00ed",
            duration: fadeDuration,
            repeat: -1,
            repeatDelay: staggerEach * (numDots) - fadeDuration
          }, ">");
    }
  }, [])

  const phasePerDot = 2 * 3.14 / (numDots);

  for (let i = 0; i < numDots; i++) {
    dots.push(
      <circle fill="transparent" className={`loading-dot-${uuid}-${i}`} key={uuidv4()}
              cx={50 + 40 * Math.sin(i * phasePerDot)}
              cy={50 - 40 * Math.cos(i * phasePerDot)}
              r="10"/>
    )
  }

  return (
    <div id={props.id} key={uuid} ref={el}>
      <svg className="loading-cycle" viewBox="0 0 100 100" overflow="visible">
        {dots}
      </svg>
    </div>
  );
};


export default LoadingCycle;
