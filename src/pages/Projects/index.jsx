import Container from '../../components/Container';
import ProjectItem from '../../components/ProjectItem';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Projects({ title }){
    const [query, updateQuery] = useState("");
    const [repositories, setRepositories] = useState([]);
    
    const handleGetRepositories = async () => {
        const data = await fetch("https://api.github.com/users/edwardribas/repos").then(e => e.json());
        setRepositories(data.filter(proj => proj.topics.includes('to-portfolio')));
    }

    useEffect(() => {
        handleGetRepositories();
    }, [])
    
    useEffect(() => {
        document.title = title
    }, [title])

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
                    {repositories.every(proj =>
                        !proj.description.split(' - ')[0].toLowerCase().includes(query.toLowerCase())) && (
                            <p className={styles.not_found_paragraph}>
                                Sua pesquisa não corresponde a nenhum projeto.
                            </p>
                        )
                    }

                    {repositories.map((proj, i) => {
                        const searchQueryIncludeProject = proj.description.split(' - ')[0].toLowerCase().includes(query.toLowerCase());

                        const {topics, html_url, homepage, description} = proj;
                        const projectName = description.split(' - ')[0];
                        const projectDesc = description.split(' - ')[1]?.split(' #')[0];
                        const projectImg = description.split(' - ')[1]?.split(' #')[1];
                        const projectRepo = html_url;
                        const projectWebsite = homepage;
                        const projectStack = topics.filter(e => e.startsWith('tec-'))
                            .map(e => {
                                const text = e.replace('tec-', '')
                                return text.slice(0, 1).toUpperCase() + text.slice(1)
                            });

                        return (
                            searchQueryIncludeProject && (
                                <ProjectItem
                                    key={i}
                                    name={projectName}
                                    description={projectDesc}
                                    image={projectImg}
                                    repo={projectRepo}
                                    preview={projectWebsite}
                                    technologies={projectStack}
                                />
                            )
                        )
                    })}
                </div>
            </section>
        </Container>
    )
}