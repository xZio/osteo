import "./Experience.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Container } from "react-bootstrap";
import Certificates from "../Certificates/Certificates";
import { institutionList } from "../../data/education";

function Experience() {
  return (
    <Container fluid>
      <div className="experience-section">
        <div className="experience">
          <h1 className="expierence-header"> Образование и опыт работы:</h1>
          <ul>
            {institutionList.map((el, index) => {
              return (
                <li key={index}>
                  <i className="expierence-list-icon">
                    <IoMdCheckmarkCircleOutline size={25} />
                    {el.year}
                  </i>
                  <p>{el.name} </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Certificates />
      </div>
      
    </Container>
  );
}

export default Experience;
