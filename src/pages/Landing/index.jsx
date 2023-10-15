import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import Curriculo from "../../assets/documents/Curriculo.pdf";
import Container from "../../components/Container";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { getAge } from "../../utils/getAge";

export const ListItem = ({ icon, text }) => {
  return (
    <li>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <p>{text}</p>
    </li>
  );
};

export default function Landing({ title }) {
  const { age } = getAge();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Container>
      <section id={styles.landing}>
        {/* Text */}
        <p>
          <span></span> Meu nome é
        </p>
        <h1>Eduardo Ribas</h1>

        {/* Icons */}
        <ul>
          <ListItem text={`${age} anos`} icon={faCalendar} />
          <ListItem text={"Desenvolvimento Web"} icon={faCode} />
          <ListItem text={"SP, Brasil"} icon={faEarthAmerica} />
        </ul>
        <a href={Curriculo} download="Eduardo Ribas.pdf">
          Download C.V
        </a>
      </section>
    </Container>
  );
}
