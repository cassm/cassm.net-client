import gsap from 'gsap';
import {v4 as uuidv4} from 'uuid';
import {useEffect, useRef} from "react";

const LoadingCycle = (props) => {
  const dots = [];
  const numDots = props.numDots || 7;
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    const tl = gsap.timeline();
    const dotDuration = 0.4;
    const fadeDuration = 1.0
    const staggerEach = 0.2

    tl.set(q('.loading-cycle'), {transformOrigin: "50% 50%"})
      .to(q('.loading-cycle'), {rotation: -360, ease: "none", duration: 4 * (staggerEach*numDots + dotDuration + fadeDuration), repeat: -1});

    for (let i = 0; i < numDots; i++) {
      tl.set(q(`.loading-dot-${i}`), {scale: 1})
        .set(q(`.loading-dot-${i}`), {transformOrigin: "50% 50%"})
        .fromTo(q(`.loading-dot-${i}`),
          {opacity: 0, scale: 0.3},
          {
            opacity: 1,
            scale: 1,
            ease: "back.out",
            duration: dotDuration,
            fill: "#F7C90F",
            delay: staggerEach * i,
            repeat: -1,
            repeatDelay: staggerEach * (numDots) - dotDuration
          }, "0")
    .fromTo(q(`.loading-dot-${i}`),
          {scale: 1, opacity: 1, fill: "#F7C90F"},
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
      <circle fill="white" className={`loading-dot-${i}`} key={uuidv4()}
              cx={50 + 40 * Math.sin(i * phasePerDot)}
              cy={50 - 40 * Math.cos(i * phasePerDot)}
              r="10"/>
    )
  }

  return (
    <div ref={el}>
      <svg className="loading-cycle" viewBox="0 0 100 100" overflow="visible">
        {dots}
      </svg>
    </div>
  );
};


export default LoadingCycle;
