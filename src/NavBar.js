import './NavBar.css';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import {memo} from 'react';
import NavLinks from "./NavLinks";
import FancyLink from "./FancyLink";
import NavMenu from "./NavMenu";

const NavBar = memo(() => {
  return (
    <div className='navbar'>
      <div className='brand'>
        <Link to='/'>
          <Logo className='logo'/>
        </Link>
        <div id="name">
          <FancyLink content="Cassandra May" to="/"/>
        </div>
      </div>

      <div className='links'>
        <NavLinks id="verbose-links"/>
      </div>
      <div className='menu'>
        <NavMenu id="hamburger-menu"/>
      </div>
    </div>
  )
});

export default NavBar;