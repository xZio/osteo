import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <>
      <Container fluid className="main">
        <h1>Врач-остеопат</h1>
        <Row>
          <Col sm={5}>
            <p>
              Дорогие друзья, меня зовут Александр Челомбиткин! <br /> Вот
              несколько интересных фактов обо мне:
            </p>
            <ul>
              <li>
                <i className="list-icon">
                  <IoMdCheckmarkCircleOutline size={25} />
                </i>

                <p>
                  Закончил медицинское училище, педиатрический институт.
                  Появилось желание более серьезной работы. В итоге выбрал
                  специализацию: торакальный хирург, успешно работал
                </p>
              </li>
              <li>
                <i className="list-icon">
                  <IoMdCheckmarkCircleOutline size={25} />
                </i>

                <p>
                  Меня всегда очаровывала мануальная терапия своей
                  загадочностью. В 1998 г. сменил специализацию на неврологию,
                  чтобы заниматься данной практикой
                </p>
              </li>
              <li>
                <i className="list-icon">
                  <IoMdCheckmarkCircleOutline size={25} />
                </i>
                <p>
                  В процессе работы мануальщиком постепенно понял, что касаюсь
                  остеопатии. Поступил в остеопатический институт. Расширил свои
                  знания. На данный момент практикую, как остеопат.
                </p>
              </li>
              <li>
                <i className="list-icon">
                  <IoMdCheckmarkCircleOutline size={25} />
                </i>
                <p>
                  У меня много потрясающих историй, я готов делиться с вами. С
                  удовольствием дам рекомендации по физическим нагрузкам и
                  правильном питании. Подписывайтесь на мой{" "}
                  <a
                    href="https://github.com/xZio/www/settings/pages"
                    className="telegram-link"
                  >
                    <FaTelegram size={20} color="#31babe" /> телеграм-канал
                  </a>{" "}
                  и вы узнаете много нового!
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
