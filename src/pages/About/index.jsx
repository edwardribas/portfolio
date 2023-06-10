import styles from './styles.module.scss';
import { Edward } from '../../assets/imgs';
import Container from '../../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { getAge } from '../../utils/getAge';

export default function About({ title }){
    const phrases = [
        'Não costumo tomar muito café.',
        'Sonho morar no Canadá.',
        'Amo desenvolver sites.',
        'Comecei a me dedicar em Web Development em 2021.',
        'Ouço música a quase todo momento.',
        'Tive meu primeiro contato com HTML e CSS em 2018.',
        'Em 25 de maio de 2022, tive minha primeira entrevista de emprego.',
        '13 de junho de 2022 marca o início do meu primeiro estágio!',
        'Alguns dos meus planos para 2023 são adquirir minha carta de habilitação e iniciar na academia.',
        'Um dos grandes prazeres da minha vida é rir como se não houvesse amanhã.',
        'Gosto da experiência de desenvolver projetos do zero.',
        'Sou apaixonado em cantar, mesmo não fazendo com muita maestria.',
    ]
    
    const phraseWrapper = useRef();
    const { age } = getAge();
    const randomNumber = () =>  Math.floor(Math.random() * phrases.length);
    const getRandomPhrase = index => phraseWrapper.current.innerText = phrases[index];

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <Container>
            <section id={styles.card} onMouseEnter={() => getRandomPhrase(randomNumber())}>
                {/* Image Container */}
                <div id={styles.image}>
                    <img src={Edward} alt="Author"/>
                </div>

                {/* Description */}
                <div id={styles.desc}>
                    <h1>Eduardo Ribas, {age}</h1>
                    <div id={styles.about}>
                        <p>Desenvolvedor Web.</p>
                        <p>Cursando Técnico em Informática para Internet.</p>
                        <p>Atualmente no 3º ano do Ensino Médio.</p>
                    </div>
                    <div id={styles.location}>
                        <span><FontAwesomeIcon icon={faLocationDot}/></span>
                        <p>São Paulo, Brasil.</p>
                    </div>
                </div>

                <div id={styles.randomPhrases}>
                    <p ref={phraseWrapper}></p>
                </div>
            </section>
        </Container>
    )
}