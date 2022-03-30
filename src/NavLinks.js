import {NavLink} from "react-router-dom";
import {ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";

const NavLinks = () => {
  return (
    <>
      <NavLink className='navlink' to='/about'>About</NavLink>
      <NavLink className='navlink' to='/talks'>Talks</NavLink>
      <NavLink className='navlink' to='/contact'>Contact</NavLink>

      <a href='https://github.com/cassm' className='.logo-container'>
        <GithubLogo className='logo' fill='red'/>
      </a>
    </>
  );
}

export default NavLinks;