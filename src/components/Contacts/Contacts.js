import "./Contacts.css";
import { Container, Row, Col } from "react-bootstrap";
import YandexMap from "../YandexMap/YandexMap";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LiaTelegram } from "react-icons/lia";
import road from "../../videos/RoadTo.mp4";

function Contacts() {
  return (
    <Container className="contacts" fluid>
      <Row>
        <Col>
          <div className="vertical-video-section">
            <h2 className="video-title">Как пройти</h2>
            <div className="vertical-video-wrapper">
              <video
                controls
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload"
                className="vertical-video"
                //poster="/images/vertical-preview.jpg" // Превью 9:16
              >
                <source src={road} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </Col>

        <Col md={8} className="map">
          <h2> Карта проезда</h2>
          <YandexMap />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="contact-column">
          <h2> Контакты</h2>

          <p className="contact phone-contact">
            <IoIosPhonePortrait className="contact-icon" />
            <a _blank href="tel:+79119577446">
              +7 (911) 957-74-46
            </a>
          </p>
          <p className="contact adress-contact">
            <BsBuildings className="contact-icon address-icon" />
            <span>192241, Санкт-Петербург, проспект Славы, 52к1</span>
          </p>
          <p className="contact">
            <IoMailUnreadOutline className="contact-icon address-icon" />
            <a href="mailto:sky_11@inbox.ru">sky_11@inbox.ru</a>
          </p>
          <p className="contact">
            <LiaTelegram className="contact-icon address-icon" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/chelomosteo"
            >
              https://t.me/chelomosteo
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
