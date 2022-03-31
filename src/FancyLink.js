import './FancyLink.css';
import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const FancyLink = (props) => {
  const ref = useRef();

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

  }, [ref, ref.current]);

  const svgWidth = 100*dimensions.aspectRatio;

  return (
    <div id='link-container'>
      <svg id="link-bg" viewBox={`0 0 ${svgWidth} 100`} style={{height: dimensions.y}}>
        <rect x="50" y="0" height="100" width={`${svgWidth-100}`}/>
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