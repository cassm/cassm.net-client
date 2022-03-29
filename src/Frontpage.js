import './Frontpage.css';
import Logo from './Logo';
import {gsap} from 'gsap';
import {useEffect, useRef} from "react";
import {v4 as uuidv4} from 'uuid';
import useInterval from "use-interval";

export function Frontpage() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const tl_repeat = useRef();

  const minDimension = Math.min(window.innerHeight, window.innerWidth);

  useEffect(() => {
    tl.current = gsap.timeline()
      .set(q("#logo"), {opacity: 0, transformOrigin: "50%"})
      .set(q(".front-logo"), {opacity: 1, scale: 1.0125}, "0")
      .add("pop", ">")
      .to(q(".front-logo"), {scale: 1, duration: 0.5, ease: "power4.out"}, "pop")
      .to(q(".front-logo"), {opacity: 0.4, duration: 4, ease: "power2.out"}, "pop")

    tl_repeat.current = gsap.timeline({repeat: -1, repeatDelay: 3})
      .to(q(".echo-logo"), {opacity: 0.75, scale: 1.0125, duration: 0.15, stagger: {each: 0.35}}, "0")
      .to(q(".echo-logo"), {opacity: 0, scale: 1.125, delay: 0.1, duration: 2, ease: "power1.out", stagger: {each: 0.35, from: "start"}}, "0")
  }, []);

  return (
    <div ref={el}>
      <Logo height={minDimension*0.5} key={uuidv4()} className='logo-instance front-logo'/>
      <Logo height={minDimension*0.5} key={uuidv4()} index={1} className='logo-instance echo-logo logo1'/>
      <Logo height={minDimension*0.5} key={uuidv4()} className='logo-instance echo-logo logo2'/>
      <Logo height={minDimension*0.5} key={uuidv4()} className='logo-instance echo-logo logo3'/>
      <Logo height={minDimension*0.5} key={uuidv4()} className='logo-instance echo-logo logo4'/>
    </div>
  )
}