import './FancyLink.css';
import gsap from 'gsap';
import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const FancyLink = (props) => {
  const ref = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  const openTl = useRef();
  const closeTl = useRef();

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
    openTl.current = gsap.timeline({paused: true, defaults: {duration: 0.1, ease: "back.out"}});

    openTl.current
      .set(q("#link-bg"), {opacity: 1})
      .set(q("#left-circle, #right-circle"), {scale: 0, transformOrigin: "50% 50%"})
      .set(q("#centre-rect"), {scaleX: 0})
      .set(q("#right-circle"), {x: -(svgWidth-100)})
      .set(q("#left-circle"), {x: 0})
      .set(q("#link-container"), {backgroundColor: "#706970"})
      .to(q("#left-circle, #right-circle"), {scale: 1, duration: 0.2}, "0")
      .to(q("#right-circle"), {x: 0}, ">-0.1")
      .to(q("#centre-rect"), {scaleX: 1}, "<")

    const openBg = () => {
      openTl.current.restart();
    }

    el.current.addEventListener("mouseenter", openBg);

    return () => {
      el.current.removeEventListener("mouseenter", openBg)
    }
  }, [dimensions]);
  useEffect(() => {
    closeTl.current = gsap.timeline({paused: true, defaults: {duration: 0.1, ease: "back.in"}});

    closeTl.current
      .set(q("#link-bg"), {opacity: 1})
      .set(q("#left-circle, #right-circle"), {scale: 1, transformOrigin: "50% 50%"})
      .set(q("#right-circle"), {x: 0})
      .set(q("#centre-rect"), {scaleX: 1, transformOrigin: "100% 0%"})
      .set(q("#link-container"), {backgroundColor: "transparent"})
      .to(q("#left-circle"), {x: svgWidth-100}, "0")
      .to(q("#centre-rect"), {scaleX: 0}, "<")
      .to(q("#left-circle, #right-circle"), {scale: 0, duration: 0.2}, ">-0.1")
      .set(q("#centre-rect"), {scaleX: 0}, ">")

    const closeBg = () => {
      closeTl.current.restart();
    }

    el.current.addEventListener("mouseleave", closeBg);

    return () => {
      el.current.removeEventListener("mouseleave", closeBg)
    }
  }, [dimensions]);


  return (
    <div ref={el} id='link-container'>
      <svg id="link-bg" viewBox={`0 0 ${svgWidth} 100`} style={{height: dimensions.y, width: dimensions.x}}>
        <rect id="centre-rect" x="50" y="0" height="100" width={`${svgWidth-100}`}/>
        <circle id="left-circle" cx="50" cy="50" r="50"/>
        <circle id="right-circle" cx={svgWidth-50} cy="50" r="50"/>
      </svg>
      <NavLink id='content' className='navlink' ref={ref} style={{marginTop: -dimensions.y}} to={props.to}>
        {props.content}
      </NavLink>

    </div>
  )

}

export default FancyLink;