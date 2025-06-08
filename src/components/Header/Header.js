import CallbackForm from "../CallbackForm/CallbackForm";
import "./Header.css";

import NavBar from "../NavBar/NavBar";
import { Container } from "react-bootstrap";

function Header({toggleForm, isFormOpen}) {
  return (
    <Container fluid className="no-padding">
      <header className="header" id="header">
        <NavBar></NavBar>
        <CallbackForm toggleForm={toggleForm} isFormOpen={isFormOpen}/>
      </header>
    </Container>
  );
}

export default Header;
