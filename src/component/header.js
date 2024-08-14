import React, { useState } from 'react';
import './pagedo.css';
import logo from './icon.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal'; 
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
 const Header = ()=>{
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };
  const shoot = () => {
    alert("notification");
  }

    return(
        <div >
            <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="sidediv mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo} alt="Trego Logo" className="logoimage" style={{marginLeft:"50px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
        <Form className="d-flex" >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{width:"800px",marginLeft:"10px"}}
                  />
                  <Button variant="outline-success"
                  style={{marginLeft:"30px"}}>Search</Button>
                </Form>

                <Nav className="justify-content-end flex-grow-1 pe-3" style={{marginLeft:"10px"}}>
  <Nav.Link href="#action2" className="usericon" style={{fontSize:'large'}} onClick={handleLoginButtonClick}><FontAwesomeIcon icon={faUser}/>   SignIn</Nav.Link>
  <LoginModal isOpen={showLoginModal} onClose={handleCloseLoginModal} /> 
</Nav>
       <Nav className="justify-content-end flex-grow-1 pe-3" style={{marginLeft:"10px"}}>
  <Nav.Link href="#action2" className="usericon" style={{fontSize:'large'}} onClick={shoot}><FontAwesomeIcon icon={faBell}/> Notification</Nav.Link>
</Nav>


              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

        </div>
    );
};
 export default Header;