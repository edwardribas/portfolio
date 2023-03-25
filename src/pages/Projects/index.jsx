import Container from '../../components/Container';
import ProjectItem from '../../components/ProjectItem';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { projects } from '../../utils/getProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Projects({ title }){
    useEffect(() => { document.title = title }, [title])
    const [query, updateQuery] = useState("");

    return (
        <Container>
            <section>
                <div className={styles.search_box}>
                    <span>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </span>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Buscar por um projeto"
                        value={query}
                        onChange={(e) => updateQuery(e.target.value)}
                    />
                </div>

                <div id={styles.projects}>
                    {projects.every((proj) => !proj.name.toLowerCase().includes(query.toLowerCase()))
                        && (
                            <p className={styles.not_found_paragraph}>
                                Sua pesquisa não corresponde a nenhum projeto.
                            </p>
                        )    
                    }

                    {projects.map((proj, i) => {
                        return proj.name.toLowerCase().includes(query.toLowerCase()) && (
                            <ProjectItem
                                key={i}
                                image={proj.img}
                                name={proj.name}
                                description={proj.description}
                                repo={proj.repo}
                                preview={proj.preview}
                                technologies={proj.technologies}
                            />
                        )
                    })}
                </div>
            </section>
        </Container>
    )
}