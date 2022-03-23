import './Navigation.css';
import { ReactComponent as Logo} from "./logo.svg";
import { ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";
import {Link, NavLink} from 'react-router-dom';


const Navigation = () => {
  return (
    <div className='navbar'>
      <div className='brand'>
        <Link to='/'>
          <Logo className='logo'/>
        </Link>
        <Link to='/' className='navlink'>
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

export default Navigation;