import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./Certificates.css";

import { Container } from "react-bootstrap";
import img1 from "../../images/certificates/1.jpg";
import img2 from "../../images/certificates/2.jpg";
import img3 from "../../images/certificates/3.jpg";
import img4 from "../../images/certificates/4.jpg";
import img5 from "../../images/certificates/5.jpg";
import img6 from "../../images/certificates/6.jpg";
import img7 from "../../images/certificates/7.jpg";
import img8 from "../../images/certificates/8.jpg";
import img9 from "../../images/certificates/9.jpg";
import frIcon from "../../images/french-icon.png";

function Certificates() {
  const certificatesList = [
    {
      imgSrc: img1,
      title: "Диплом Парижской остеопатической школы",
      date: "21 июня 2017 года",
    },
    {
      imgSrc: img2,
      title: "Движение и неподвижность - концепция Р.Беккера, 1 уровень",
      date: "1 декабря 2019 года",
    },
    {
      imgSrc: img3,
      title: "Движение и неподвижность - концепция Р.Беккера, 2 уровень",
      date: "12 февраля 2020 года",
    },
    {
      imgSrc: img4,
      title: "Тканевый подход, 1 уровень",
      date: "4 сентября 2018 года",
    },
    {
      imgSrc: img5,
      title: "Остеопатическое сопровождение женщин и детей",
      date: "12 сентября 2021 года",
    },
    {
      imgSrc: img6,
      title:
        "Биодинамический взгляд на остеопатию в краниальной области, фаза-4",
      date: "26 июля 2024 года",
    },
    {
      imgSrc: img7,
      title: "Остеопатическое лечение синдрома хронической тазовой боли",
      date: "17 сентября 2017 года",
    },
    {
      imgSrc: img8,
      title:
        "Биодинамический взгляд на остеопатию в краниальной области, фаза-3",
      date: "9 февряля 2024 года",
    },
    {
      imgSrc: img9,
      title: "Другие дипломы и свидеьельства",
      date: "",
    },
  ];

  return (
    <Container fluid>
      <div className="experience">
        <h1 className="expierence-header"> Образование и опыт работы:</h1>
        <ul>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1987- 1990
            </i>
            <p>Медицинское училище</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              ⁠1989 - 1990
            </i>
            <p>Фельдшер - лаборант</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1991-1997
            </i>
            <p>СПБ ГПМА, врач педиатр</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              ⁠1991-1992
            </i>
            <p>Лаборант кафедры микробиологии СПБ ГПМА</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1997- 1998
            </i>
            <p>МАПО, торакальный хирург</p>
          </li>
          <li>
            ⁠
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1997-1998
            </i>
            <p>Хирург торакоабдоминального отделения больницы 26</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1999
            </i>
            <p>МАПО невролог</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1999
            </i>
            <p>СПБ ГПМА мануальный терапевт</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              1999 - 2002
            </i>
            <p>Зам. гл. врача в кардиоревматологическом санатории</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              2013-2017
            </i>
            <p>ИОМ им. Андрианова, остеопат</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              2003 по н.в.
            </i>
            <p>частные медцентры, невролог, ман. терапевт, остеопат</p>
          </li>
          <li>
            <i className="expierence-list-icon">
              <IoMdCheckmarkCircleOutline size={25} />
              2022 по н.в.
            </i>
            <p>биодинамическая модель в остеопатии Джелоса</p>
          </li>
        </ul>
      </div>
      <h2 className="serts-header"> Сертификаты:</h2>
      <div className="serts-paragraf">
        <p> Друзья, часть моих сертификатов и дипломов.</p>
        <p>
          Первый сертификат с лентой для меня самый значимый и ценный:{" "}
          <span> Институт остеопатической медицины им. В.Л. Андрианова</span>. 4
          года обучения. Данный институт сотрудничает с преподавателями из
          Франции, выпускные экзамены принимают французские преподаватели,
          выпускники получают диплом{" "}
          <span>Парижской остеопатической школы</span>{" "}
          <i>
            <img src={frIcon} alt="иконка флага Франции"></img>
          </i>
          . С остальными можно ознакомиться лично, в моем кабинете.
        </p>
      </div>

      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log()}
          onSlideChange={() => console.log("slide change")}
          centeredSlides
          slideToClickedSlide
          /*  breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }} */
        >
          {certificatesList.map((el) => (
            <SwiperSlide>
              <img
                src={el.imgSrc}
                alt={el.title}
                className="certificate-image"
              ></img>

              <p className="certificate-date">{el.date}</p>
              <p className="certificate-title">{el.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default Certificates;
