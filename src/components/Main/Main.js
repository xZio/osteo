import "./Main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

function Main() {
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
                <IoMdCheckmarkCircleOutline size={100} className="list-icon" />
                <p>
                  Закончил медицинское училище, педиатрический институт.
                  Появилось желание более серьезной работы. В итоге выбрал
                  специализацию: торакальный хирург, успешно работал
                </p>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline size={100} className="list-icon" />
                <p>
                  Меня всегда очаровывала мануальная терапия своей
                  загадочностью. В 1998 г. сменил специализацию на неврологию,
                  чтобы заниматься данной практикой
                </p>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline size={100} className="list-icon" />
                <p>
                  В процессе работы мануальщиком постепенно понял, что касаюсь
                  остеопатии. Поступил в остеопатический институт. Расширил свои
                  знания. На данный момент практикую, как остеопат.
                </p>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline size={100} className="list-icon" />
                <p>
                  У меня много потрясающих историй, я готов делиться с вами. С
                  удовольствием дам рекомендации по физическим нагрузкам и
                  правильном питании. Подписывайтесь на мой{" "}
                  <a href="#" className="telegram-link">
                    <FaTelegram size={20} color="#31babe" />
                    {" "}телеграм-канал
                  </a>{" "}
                  и вы узнайте много нового!
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
