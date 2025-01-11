//import "./Main.css";
import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <Container fluid>
      <Header />
      <main className="main">Main</main>
      <Footer />
    </Container>
  );
}

export default Main;
