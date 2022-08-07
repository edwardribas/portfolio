import Container from '../../components/Container';
import ProjectItem from '../../components/ProjectItem';

import {
    MyPortfolio, FrontsideBlog, FyloLandingPage,
    TasksApp, PequenosTalentos
} from '../../assets/imgs';

import styles from './styles.module.scss';

export default function Projects(props){
    document.title = props.title;
    return (
        <Container>
            <section id={styles.projects}>
                <ProjectItem
                    image={MyPortfolio}
                    name="Meu Portfólio"
                    description="O lugar pelo qual você pode ver e analisar alguns dos meus projetos."
                    repo="https://github.com/edwardribas/edwardribas.github.io"
                    preview="https://edwardribas.github.io/"
                    technologies={['HTML', 'SCSS', 'React']}
                />
                <ProjectItem
                    image={FrontsideBlog}
                    name="Frontside"
                    description="Um portal de artigos com o intuito de facilitar o entendimento de assuntos sobre web."
                    repo="https://github.com/edwardribas/frontside"
                    preview="https://frontsideclub.netlify.app/"
                    technologies={['HTML', 'CSS', 'JavaScript']}
                />
                <ProjectItem
                    image={FyloLandingPage}
                    name="Fylo"
                    description="Desafio do Frontend Mentor que consiste na construção de uma landing page."
                    repo="https://github.com/edwardribas/fylo-landing-page"
                    preview="https://ribas-fylopage.netlify.app/"
                    technologies={['HTML', 'SCSS', 'React']}
                />
                <ProjectItem
                    image={TasksApp}
                    name="Tarefas"
                    description="Aplicação simples de tarefas que armazena no localStorage por meio de JSON stringify."
                    repo="https://github.com/edwardribas/js-practice/tree/main/12%20-%20Tarefas"
                    preview="https://gitribas-tasks.netlify.app/"
                    technologies={['HTML', 'CSS', 'JavaScript']}
                />
                <ProjectItem
                    image={PequenosTalentos}
                    name="Pequenos Talentos"
                    description="Landing page feita para o projeto Pequenos Talentos da Tecnologia Única."
                    repo="https://github.com/edwardribas/smalltalents"
                    preview="https://pequenostalentos.tecnologiaunica.com.br/"
                    technologies={['HTML', 'CSS', 'React']}
                />
            </section>
        </Container>
    )
}