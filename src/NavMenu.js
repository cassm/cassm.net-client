import './NavMenu.css';
import classnames from 'classnames';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";
import {NavLink} from "react-router-dom";

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
      .to(q('#menu-box'), {x: "-17rem", ease: "back.out(1.2)"}, "<")
      .to(q('.navlink'), {opacity: 1, ease: "power4.in", stagger: {each: 0.1}}, "<")
      .to(q('.logo'), {opacity: 1, ease: "power4.in", duration: 0.1, delay: 0.3}, "<")
  }, [])

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    animation.current.reversed() ? animation.current.play() : animation.current.reverse();
  }

  const handleNavClick = () => {
    setMenuOpen(false);
    animation.current.reverse();
  }

  return (
    <div ref={el} className='menu-container'>
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
      <div id='menu-box'>
        <NavLink className='navlink' to="/about" onClick={handleNavClick}>About</NavLink>
        <NavLink className='navlink'  to="/talks" onClick={handleNavClick}>Talks</NavLink>
        <NavLink className='navlink'  to="/contact" onClick={handleNavClick}>Contact</NavLink>
        <a href='https://github.com/cassm' className='.logo-container' onClick={handleNavClick}>
          <GithubLogo className='logo' fill='red'/>
        </a>
      </div>
    </div>

  );
};

export default NavMenu;

