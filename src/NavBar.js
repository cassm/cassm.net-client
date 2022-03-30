import './NavBar.css';
import Logo from './Logo';
import { ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";
import {Link, NavLink} from 'react-router-dom';


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
        <NavLink className='navlink' to='/about'>About</NavLink>
        <NavLink className='navlink' to='/talks'>Talks</NavLink>
        <NavLink className='navlink' to='/contact'>Contact</NavLink>

        <a href='https://github.com/cassm'>
          <GithubLogo className='logo' fill='red'/>
        </a>
      </div>
    </div>
  )
}

export default NavBar;