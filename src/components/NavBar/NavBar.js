import { Link } from "react-router";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo3.png";
import "./NavBar.css";


function NavBar() {
  return (
    <>
      <Navbar expand="sm" className="p-0 navbar">
        <Container>
          <Navbar.Brand>
            <Image src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="pills">
              <Nav.Link >
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">О себе</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contacts">Контакты</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/prices">Цены</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
