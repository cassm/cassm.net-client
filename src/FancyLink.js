import './FancyLink.css';
import gsap from 'gsap';
import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const FancyLink = (props) => {
  const ref = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  const openTl = useRef();

  const [dimensions, setDimensions] = useState({x: 0, y: 0})

  useEffect(() => {
    if (ref && ref.current) {
      setDimensions({
        x: ref.current.scrollWidth,
        y: ref.current.scrollHeight,
        aspectRatio: ref.current.scrollWidth/ref.current.scrollHeight
      });
      console.log(dimensions)
    }

  }, [ref, ref.current])

  const svgWidth = 100*dimensions.aspectRatio;

  useEffect(() => {
    openTl.current = gsap.timeline({paused: true, defaults: {duration: 0.1, ease: "back.out(1.5)"}});

    openTl.current
      .set(q("#link-bg"), {opacity: 0, scale: 1})
      .set(q("#left-circle, #right-circle"), {scale: 0, transformOrigin: "50% 50%"})
      .set(q("#centre-rect"), {scaleX: 0, transformOrigin: "50% 0"})
      .set(q("#left-circle"), {x: 0})
      .to(q("#link-bg"), {opacity: 0.15, duration: 0.05}, "0")
      .to(q("#left-circle, #right-circle"), {scale: 1, duration: 0.1}, "0")
      .to(q("#right-circle"), {x: svgWidth/2 - 50}, ">-0.075")
      .to(q("#left-circle"), {x: -(svgWidth/2 - 50)}, "<")
      .to(q("#centre-rect"), {scaleX: 1}, "<")

    const openBg = () => {
      openTl.current.play();
    }

    const closeBg = () => {
      openTl.current.reverse();
    }

    }

    el.current.addEventListener("mouseenter", openBg);
    el.current.addEventListener("mouseleave", closeBg);

    return () => {
      el.current.removeEventListener("mouseenter", openBg)
      el.current.removeEventListener("mouseleave", closeBg)
    }
  }, [dimensions]);

  return (
    <div ref={el} id='link-container'>
      <NavLink id='content' className='navlink' ref={ref} to={props.to}>
        {props.content}
      </NavLink>
      <svg id="link-bg" viewBox={`0 0 ${svgWidth} 100`} style={{marginTop: -dimensions.y, height: dimensions.y, width: dimensions.x}}>
        <rect id="centre-rect" x="50" y="0" height="100" width={`${svgWidth-100}`}/>
        <circle id="left-circle" cx={svgWidth/2} cy="50" r="50"/>
        <circle id="right-circle" cx={svgWidth/2} cy="50" r="50"/>
      </svg>

    </div>
  )

}

export default FancyLink;