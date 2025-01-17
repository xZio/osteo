import { Link } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo_final.png";
import "./NavBar.css";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
  function handleToggle(e) {
    console.log(e.target.classList);
  }

  return (
    <>
      <Navbar expand="sm" className="p-3">
        <Container id="navbar">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block logo"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            children={<FiAlignJustify size={40} className="button-icon" />}
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="div">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/about">О себе</Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/contacts">Контакты</Link>
              </Nav.Link>
              <Nav.Link as="div">
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
