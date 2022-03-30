import './NavMenu.css';
import NavLinks from "./NavLinks";
import classnames from 'classnames';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

const NavMenu = (props) => {
  const animation = useRef();
  const el = useRef();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    animation.current = gsap.timeline({paused: true, reversed: true, defaults: {duration: 0.3}});
    const q = gsap.utils.selector(el);

    animation.current
      // .duration(0.5)
      .to(q('#hamburger-top'), {y: "+=0.65rem", ease: "back.in(2)"}, 0)
      .to(q('#hamburger-bottom'), {y: "-=0.65rem", ease: "back.in(2)"}, 0)
      .to(q('#hamburger-top'), {rotate: 45, ease: "back.out(2)"}, ">")
      .to(q('#hamburger-mid'), {rotate: 45, ease: "back.out(2)"}, "<")
      .to(q('#hamburger-bottom'), {rotate: -45, ease: "back.out(2)"}, "<")
  }, [])

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    animation.current.reversed() ? animation.current.play() : animation.current.reverse();
  }

  return (
    <div ref={el}>
      <button id='hamburger' onClick={handleMenuClick} className={
        classnames({
          'open-hamburger': menuOpen,
          'closed-hamburger': !menuOpen,
        })
      }>
        <div id='hamburger-top' className='hamburger-bar'/>
        <div id='hamburger-mid' className='hamburger-bar'/>
        <div id='hamburger-bottom' className='hamburger-bar'/>
      </button>
    </div>

  );
};

export default NavMenu;

