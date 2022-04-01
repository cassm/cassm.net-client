import './NavBar.css';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import {memo} from 'react';
import FancyLink from "./FancyLink";
import NavMenu from "./NavMenu";
import {ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";

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
        <FancyLink content={"About"} to="/about"/>
        <FancyLink content={"Talks"} to="/talks"/>
        <FancyLink content={"Contact"} to="/contact"/>
        <a href='https://github.com/cassm' className='.logo-container'>
          <GithubLogo className='logo' fill='red'/>
        </a>
      </div>
      <div className='menu'>
        <NavMenu id="hamburger-menu"/>
      </div>
    </div>
  )
});

export default NavBar;