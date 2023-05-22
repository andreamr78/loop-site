import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';
import "../sass/TopbarStyles.scss"
import {useState} from 'react';

function Topbar() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" variant="dark">
          <Container>
            <Navbar.Brand className='brand-logo' href="#">loopstudios</Navbar.Brand>
            <Navbar.Toggle style={{border:"none"}} aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show} 
            >
              <Offcanvas.Header >
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                loopstudios
                </Offcanvas.Title>
                <CloseButton variant="white" onClick={handleClose}/>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About</Nav.Link>
                  <Nav.Link href="#action2">Carrers</Nav.Link>
                  <Nav.Link href="#action3">Events</Nav.Link>
                  <Nav.Link href="#action4">Products</Nav.Link>
                  <Nav.Link href="#action5">Support</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Topbar;