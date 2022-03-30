import {NavLink} from "react-router-dom";
import {ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";

const NavLinks = (props) => {
  return (
    <>
      <NavLink className='navlink' to='/about' onClick={props.onClick}>About</NavLink>
      <NavLink className='navlink' to='/talks' onClick={props.onClick}>Talks</NavLink>
      <NavLink className='navlink' to='/contact' onClick={props.onClick}>Contact</NavLink>

      <a href='https://github.com/cassm' className='.logo-container' onClick={props.onClick}>
        <GithubLogo className='logo' fill='red'/>
      </a>
    </>
  );
}

export default NavLinks;