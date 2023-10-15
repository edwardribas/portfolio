import Container from "../Container";
import styles from "./styles.module.scss";

export default function NotFound(props) {
  document.title = props.title;
  return (
    <Container>
      <section className={styles.notfound}>
        <h1>A página que você está tentando acessar não existe.</h1>
      </section>
    </Container>
  );
}
