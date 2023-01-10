import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCode, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import Curriculo from '../../assets/documents/Curriculo.pdf';
import Container from '../../components/Container';
import styles from './styles.module.scss';
import { getAge } from '../../utils/getAge';

export default function Landing({ title }){
    document.title = title;
    const { age } = getAge();

    return (
        <Container>
            <section id={styles.landing}>
                {/* Text */}
                <p><span></span> Meu nome é</p>
                <h1>Eduardo Ribas</h1>

                {/* Icons */}
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCalendar}/>
                        </span>
                        <p>{age} anos</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCode}/>
                        </span>
                        <p>Desenvolvimento Web</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faEarthAmerica}/>
                        </span>
                        <p>SP, Brasil</p>
                    </li>
                </ul>
                <a href={Curriculo} download="Eduardo Ribas.pdf">Download C.V</a>
            </section>
        </Container>
    )
}
