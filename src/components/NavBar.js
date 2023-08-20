import {Container,Nav,Navbar} from 'react-bootstrap';
import logo from './images/DivineDestiny Adventures -logos_black.png'
import { Link} from "react-router-dom";


function NavBar() {
  return (
    <>
      <Navbar className='navs'>
        <Container>
          <Navbar.Brand as={Link} to='/'><img className='logo' src={logo} /></Navbar.Brand>
          <Nav className="nav-items">
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link as={Link} to='/destination' >Destination</Nav.Link>
            <Nav.Link as={Link} to='/aboutus' >About Us</Nav.Link>
            <Nav.Link as={Link} to='/contactUs' >Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
      
</>
  );}
  export default NavBar;