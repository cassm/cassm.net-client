import './FancyLink.css';
import gsap from 'gsap';
import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const FancyLink = (props) => {
  const ref = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  const openTl = useRef();
  const activeTl = useRef();

  const [dimensions, setDimensions] = useState({x: 0, y: 0, aspectRatio: 0})
  const [svgWidth, setSvgWidth] = useState(100);
  const [bgSvg, setBgSvg] = useState(
    <svg id='link-bg'
         style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}/>);
  const [activeSvg, setActiveSvg] = useState(
    <svg id='link-bg-active'
         style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}/>);
  const [svgRendered, setSvgRendered] = useState(false);

  useEffect(() => {
    if (ref && ref.current.offsetWidth) {
      setDimensions({
        x: ref.current.scrollWidth,
        y: ref.current.scrollHeight,
        aspectRatio: ref.current.scrollWidth/ref.current.scrollHeight
      });
      setSvgWidth(100*dimensions.aspectRatio);
    }
  }, [ref, ref.current, props.windowDimensions])


  useEffect(() => {
    if (dimensions.x === 0 || dimensions.y === 0) {
      setBgSvg(
        <svg id='link-bg'
           style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}/>);
      setActiveSvg(
        <svg id='link-bg-active'
             style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}/>);
    } else {
      setBgSvg(
        <svg id="link-bg" viewBox={`0 0 ${svgWidth} 100`}
             style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}>
          <rect id="centre-rect" x="50" y="0" height="100" width={`${svgWidth - 100}`}/>
          <circle id="left-circle" cx={svgWidth / 2} cy="50" r="50"/>
          <circle id="right-circle" cx={svgWidth / 2} cy="50" r="50"/>
        </svg>);

      setActiveSvg(
        <svg id="link-bg-active" viewBox={`0 0 ${svgWidth} 100`}
             style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}>
          <rect id="centre-rect-active" x="50" y="0" height="100" width={`${svgWidth - 100}`}/>
          <circle id="left-circle-active" cx="50" cy="50" r="50"/>
          <circle id="right-circle-active" cx={svgWidth - 50} cy="50" r="50"/>
        </svg>);

      setSvgRendered(true);
    }
  }, [svgWidth])

  useEffect(() => {
    if (dimensions.x !== 0 && dimensions.y !== 0) {
      openTl.current = gsap.timeline({paused: true, defaults: {duration: 0.15, ease: "back.out(1.8)"}});
      activeTl.current = gsap.timeline({paused: true});

      openTl.current
        .set(q("#link-bg"), {opacity: 0, scale: 1})
        .set(q("#left-circle, #right-circle"), {scale: 0, transformOrigin: "50% 50%"})
        .set(q("#centre-rect"), {scale: 0, transformOrigin: "50% 50%"})
        .set(q("#left-circle"), {x: 0})
        .to(q("#link-bg"), {opacity: 0.15, duration: 0.05}, "0")
        .to(q("#left-circle, #right-circle"), {scale: 1, duration: 0.1, ease: "back.out(1.2)"}, "0")
        .to(q("#right-circle"), {x: svgWidth / 2 - 50}, "<")
        .to(q("#left-circle"), {x: -(svgWidth / 2 - 50)}, "<")
        .to(q("#centre-rect"), {scaleX: 1}, "<")
        .to(q("#centre-rect"), {scaleY: 1, duration: 0.1, ease: "back.out(1.6)"}, "<")

      activeTl.current
        .to(q("#link-bg-active"), {opacity: 0.25, duration: 0.1}, "0")
        .to(q("#link-bg-active"), {scale: 1.5, opacity: 0, duration: 0.4, ease: ".out"}, ">-0.05");

      const openBg = () => {
        openTl.current.play();
      }

      const closeBg = () => {
        openTl.current.reverse();
      }

      const clickBg = () => {
        activeTl.current.restart();
      }

      const target = el.current;

      target.addEventListener("mouseenter", openBg);
      target.addEventListener("mouseleave", closeBg);
      target.addEventListener("click", clickBg);

      return () => {
        openTl.current.pause("0");
        activeTl.current.pause("0");
        target.removeEventListener("mouseenter", openBg)
        target.removeEventListener("mouseleave", closeBg)
        target.removeEventListener("click", clickBg);
      }
    }
  }, [svgRendered]);

  return (
    <div ref={el} id='link-container'>
      <NavLink id='content' className='navlink' ref={ref} to={props.to}>
        {props.content}
      </NavLink>
      {bgSvg}
      {activeSvg}

    </div>
  )

}

export default FancyLink;