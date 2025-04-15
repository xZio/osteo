import { NavLink } from "react-router-dom"; // Измененный импорт
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo_final.png";
import "./NavBar.css";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
  return (
    <>
      <Navbar expand="sm" className="p-3">
        <Container id="navbar" className="m-0">
          <Navbar.Brand>
            <NavLink to="/" end>
              <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block logo"
                alt="logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            id="navButton"
            aria-controls="basic-navbar-nav "
            children={<FiAlignJustify size={40} className="button-icon" />}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="div">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  О себе
                </NavLink>
              </Nav.Link>
              <Nav.Link as="div">
                <NavLink
                  to="/certificates"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Опыт
                </NavLink>
              </Nav.Link>
              <Nav.Link as="div">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Контакты
                </NavLink>
              </Nav.Link>
              <Nav.Link as="div">
                <NavLink
                  to="/prices"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Цены
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
