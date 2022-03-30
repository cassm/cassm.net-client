import './NavBar.css';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import NavLinks from "./NavLinks";


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='brand'>
        <Link to='/'>
          <Logo className='logo'/>
        </Link>
        <Link to='/' className='navlink' id='name'>
          Cassandra May
        </Link>
      </div>

      <div className='links'>
        <NavLinks id="verbose-links"/>
      </div>
    </div>
  )
}

export default NavBar;