import './Prices.css'
import YandexMapWidget from "../YandexFeedback/YandexFeedback";
import { Container, Row, Col } from 'react-bootstrap';

function Prices() {
  return (
    <Container className='prices' fluid>
      <Row>
        <Col>
          <YandexMapWidget />
        </Col>
        <Col>

          <div className='prices-container'>
            <h2>Цены:</h2>
            <p>
              Взрослые - 7000 рублей
            </p>
            <p>
              Дети (до 10 лет) - 6000 рублей
            </p>
            <ul>
              <h3>В стоимость входит:</h3>
              <li>консультация</li>
              <li>работа специалиста</li>
              <li>рекомендации по физическим нагрузкам и питанию</li>
            </ul>
            <p>Продолжительность: 1 час</p>
            <p>Адрес: СПб, пр. Славы 52, корп.1, кв. 908</p>
            <p>Позаботьтесь о своём здоровье!</p>
            <p>Записывайтесь прямо сейчас</p>

          </div>
        </Col>
      </Row>

    </Container>)


}

export default Prices;