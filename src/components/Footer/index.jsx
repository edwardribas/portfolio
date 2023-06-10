import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

export default function Footer() {
    return (
        <footer>
            <div id={styles.branding}>
                <div id={styles.social}>
                    <h3>redes que eu costumo frequentar</h3>
                    <ul>
                        <li><a href="https://github.com/edwardribas" target="_blank" rel="noreferrer" data-name="Github">
                            <FontAwesomeIcon icon={ faGithub }/>
                        </a></li>
                        <li><a href="https://twitter.com/edwardb_as" target="_blank" rel="noreferrer" data-name="Twitter">
                            <FontAwesomeIcon icon={ faTwitter }/>
                        </a></li>
                        <li><a href="https://www.instagram.com/edwardb.as/" target="_blank" rel="noreferrer" data-name="Instagram">
                            <FontAwesomeIcon icon={ faInstagram }/>
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/edwardribas" target="_blank" rel="noreferrer" data-name="LinkedIn">
                            <FontAwesomeIcon icon={ faLinkedinIn }/>
                        </a></li>
                    </ul>
                </div>

                <div id={styles.info}>
                    <h3>{new Date().getFullYear()} &copy; <span>Eduardo Ribas</span>.</h3>
                </div>
            </div>
        </footer>
    )
}
