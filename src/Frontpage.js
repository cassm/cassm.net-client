import './Frontpage.css';
import Logo from './Logo';
import {gsap} from 'gsap';
import {useEffect, useRef, memo} from "react";
import {v4 as uuidv4} from 'uuid';

const Frontpage = memo((props) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const tl_repeat = useRef();

  let minDimension = Math.min(props.windowDimensions.x, props.windowDimensions.y);

  useEffect(() => {
    const handleResize = () => {
      minDimension = Math.min(props.windowDimensions.x, props.windowDimensions.y);
      gsap.to(q("#logo-instance"), {
        top: props.windowDimensions.y / 2 - minDimension * 0.25,
        left: props.windowDimensions.x / 2 - minDimension * 0.26,
      });
      gsap.to(q("#start-circle-svg"), {
        top: props.windowDimensions.y / 2 - minDimension * 0.25,
        left: props.windowDimensions.x / 2 - minDimension * 0.26,
      });
    }
  }, [props.windowDimensions]);

  useEffect(() => {
    tl.current = gsap.timeline()
      .set(q(".logo-instance"), {scale: 0, rotation: -90, transformOrigin: "50%"})
      .set(q("#start-circle"), {opacity: 0.9, scale: 1, transformOrigin: "50%"})
      .to('#start-circle', {scale: 0, ease: "back.in", duration: 0.5}, "0")
      .add("point")
      .to(q(".logo-instance"), {opacity: 1, scale: 1, rotation: 0, duration: 0.9, ease: "back.out(1.7)"}, "point-0.15")
      .add("pop", ">")
      .to(q(".front-logo"), {scale: 1, duration: 0.6, ease: "power4.out"}, "pop")
      .to(q(".front-logo"), {opacity: 0.6, duration: 4, ease: "power2.out"}, "pop")

    tl_repeat.current = gsap.timeline({repeat: -1, repeatDelay: 3, delay: 0.75})
      .set(q(".echo-logo"), {opacity: 0}, "0")
      .to(q(".echo-logo"), {opacity: 0.75, duration: 0.25, stagger: {each: 0.35}}, "0.38")
      .to(q(".echo-logo"), {opacity: 0, scale: 1.125, delay: 0.1, duration: 2, ease: "power1.out", stagger: {each: 0.35, from: "start"}}, "<")
  }, []);

  return (
    <div className='logo-container' ref={el}>
      <svg id='start-circle-svg' viewBox="0 0 100 101">
        <circle cx="50" cy="51" r="50" id='start-circle'/>
      </svg>
      <Logo key={uuidv4()} className='logo-instance front-logo'/>
      <Logo key={uuidv4()} className='logo-instance echo-logo logo1'/>
      <Logo key={uuidv4()} className='logo-instance echo-logo logo2'/>
      <Logo key={uuidv4()} className='logo-instance echo-logo logo3'/>
      <Logo key={uuidv4()} className='logo-instance echo-logo logo4'/>
    </div>
  )
});

export default Frontpage;