import {NavLink} from "react-router-dom";
import FancyLink from './FancyLink';
import {ReactComponent as GithubLogo} from "./Octicons-mark-github.svg";

const NavLinks = (props) => {
  return (
    <>
      <FancyLink onClick={props.onClick}
                 content={"About"} to="/about"
      />
      <FancyLink onClick={props.onClick}
                 content={"Talks"} to="/talks"
      />
      <FancyLink onClick={props.onClick}
                 content={"Contact"} to="/contact"
      />
      <a href='https://github.com/cassm' className='.logo-container' onClick={props.onClick}>
        <GithubLogo className='logo' fill='red'/>
      </a>
    </>
  );
}

export default NavLinks;