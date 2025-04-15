import "./Contacts.css";
import { Container, Row, Col } from "react-bootstrap";
import YandexMap from "../YandexMap/YandexMap";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";

function Contacts() {
  return (
    <Container className="contacts" fluid>
      <Row>
        <Col md={4} className="contact-column">
          <h2> Контакты</h2>
          <p className="phone-contact">
            <IoIosPhonePortrait className="contact-icon" />
            +7 (911) 957-74-46
          </p>
          <p className="adress-contact">
            <BsBuildings className="contact-icon address-icon" />
            проспект Славы, 52, корп. 1
          </p>
        </Col>

        <Col md={8} className="map">
          <h2> Карта проезда</h2>
          <YandexMap />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
