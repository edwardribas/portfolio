import styles from './styles.module.scss';

export default function ProjectItem(props) {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt="Website"/>
                
                {props.technologies &&
                    <div className={styles.technologies}>
                            {props.technologies.map((el, i) => (
                                <div key={i} className={styles.techItem}>
                                    <span>{el}</span>
                                </div>
                            ))}
                    </div>
                }
            </div>

            <div className={styles.desc}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className={styles.links}>
                    {props.preview && <a href={props.preview} target="_blank" rel="noreferrer">Visitar</a>}
                    {props.repo && <a href={props.repo} target="_blank" rel="noreferrer">Github</a>}
                </div>
            </div>
    </div>
    )
}