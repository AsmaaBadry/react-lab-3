import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MOVISE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavLink className='nav-a'  style={({isActive})=>{

              return {
                'color':(isActive)?'#e432ae':''
              }

            }} to="/">
              Movise</NavLink>


            <NavLink  className='nav-a'  style={({isActive})=>{

                  return {
                    'color':(isActive)?'#e432ae':''
                  }

                  }} 
                to="/BestMovie"> Favorites</NavLink>



            <NavLink  className='nav-a' style={({isActive})=>{

                return {
                  'color':(isActive)?'#e432ae':''
                }

                }}  to="/Login"> 
            Login
            
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;