import styles from './styles.module.scss';
import { useState } from 'react';
import FallbackImage from '../../assets/imgs/indisponivel.png';

export default function ProjectItem({
    image,
    technologies,
    name,
    description,
    preview,
    repo,
}) {
    const imageUrl = `https://i.imgur.com/${image}`;
    const [imgSrc, setImgSrc] = useState(imageUrl);

    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <img
                    src={imgSrc ? imgSrc : FallbackImage}
                    alt={name}
                    width={533}
                    height={300}
                    onError={() => setImgSrc(FallbackImage)}
                />
                
                {technologies && technologies.length > 0 &&
                    <div className={styles.technologies}>
                        {technologies.map((el, i) => (
                            <div
                                key={i}
                                className={styles.techItem}
                                style={{ transitionDelay: `${0.03*(i+1)}s` }}
                            >
                                <span>{el}</span>
                            </div>
                        ))}
                    </div>
                }
            </div>

            <div className={styles.desc}>
                {name && (
                    <h3>{name}</h3>
                )}

                {description && (
                    <p>{description}</p>
                )}

                <div className={styles.links}>
                    {preview && <a href={preview} target="_blank" rel="noreferrer">Visitar</a>}
                    {repo && <a href={repo} target="_blank" rel="noreferrer">Github</a>}
                </div>
            </div>
    </div>
    )
}