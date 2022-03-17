import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { ReactComponent as Logo} from "./logo.svg";


export function Navigation() {
  return (
    <Navbar bg='dark' fixed='top' className='navbar'>
        <Container>
          <Navbar.Brand href="#home" className='brand'>
            <Logo className='logo'/>
            Cassandra May
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Talks</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}