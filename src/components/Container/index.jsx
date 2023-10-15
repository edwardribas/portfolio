import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import styles from "./styles.module.scss";

export default function Container({ children }) {
  return (
    <>
      <div id={styles.container}>
        {children}

        <section id={styles.contact}>
          <div id={styles.email}>
            <h2>Eduardo Ribas</h2>
            <a href="mailto:ribasedu2005@gmail.com">ribasedu2005@gmail.com</a>
          </div>
          <div id={styles.repositories}>
            <p>A fim de ver os meus repositórios?</p>
            <a
              href="https://github.com/edwardribas?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Ir{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
