import { Link } from "react-router";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo4.png";
import "./NavBar.css";

function NavBar() {
  function handleClick(e) {
    let list = document.querySelectorAll(".link");

    list.forEach((el) => {
      console.log(el.classList);
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  return (
    <>
      <Navbar expand="sm" className="p-0 ">
        <Container fluid>
          <Row className="align-items-center">
            <Col>
              <Navbar.Brand className="" href="/">
                <img
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block"
                  alt="logo"
                />
              </Navbar.Brand>
            </Col>
            <Col className="p-0">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="align-items-center">
                  <Nav.Link className="">
                    <Link to="/" className="link" onClick={handleClick}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/about" className="link" onClick={handleClick}>
                      О себе
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contacts" className="link" onClick={handleClick}>
                      Контакты
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/prices" className="link" onClick={handleClick}>
                      Цены
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
