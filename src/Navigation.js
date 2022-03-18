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
          <h2>Cassandra May</h2>
        </Link>
      </div>

      <div className='links'>
        <NavLink className='navlink' to='/about'>About</NavLink>
        <NavLink className='navlink' to='/talks'>Talks</NavLink>
        <NavLink className='navlink' to='/contact'>Contact</NavLink>

        <a href='https://github.com/cassm'>
          <GithubLogo className='logo' fill='red'/>
          {/*<img className='github'*/}
          {/*     src='/GitHub-Mark-Light-64px.png'*/}
          {/*     alt='GitHub Logo'/>*/}
        </a>
      </div>
    </div>
  )
}

export default Navigation;