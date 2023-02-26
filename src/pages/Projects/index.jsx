import Container from '../../components/Container';
import ProjectItem from '../../components/ProjectItem';
import styles from './styles.module.scss';
import {
    MyPortfolio, FrontsideBlog, FyloLandingPage,
    TasksApp, PequenosTalentos, SmartToys,
    MyCalculator, BootstrapCV, RepoFinder, BeHealthy
} from '../../assets/imgs';

export default function Projects({ title }){
    document.title = title;

    return (
        <Container>
            <section id={styles.projects}>
                <ProjectItem
                    image={BeHealthy}
                    name="Behealthy"
                    description="Aplicação intuitiva para ver treinos e alimentação organizadamente."
                    repo="https://github.com/edwardribas/behealthy"
                    preview="https://ribby-behealthy.netlify.app/"
                    technologies={['React', 'SCSS', 'PWA']}
                />
                <ProjectItem
                    image={MyPortfolio}
                    name="Meu Portfólio"
                    description="O lugar pelo qual você pode ver e analisar alguns dos meus projetos."
                    repo="https://github.com/edwardribas/portfolio"
                    preview="https://edwardribas.netlify.app/"
                    technologies={['React', 'SCSS', 'PWA']}
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
                    technologies={['React', 'SCSS']}
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
                    technologies={['React', 'CSS']}
                />
                <ProjectItem
                    image={SmartToys}
                    name="SmartToys"
                    description="Uma das primeiras landing pages que já fiz, feita para um projeto institucional."
                    repo="https://github.com/edwardribas/smart-toys"
                    preview="https://edwardribas.github.io/smart-toys"
                    technologies={['HTML', 'CSS', 'JavaScript']}
                />
                <ProjectItem
                    image={BootstrapCV}
                    name="Bootstrap CV"
                    description="Avaliação institucional, se trata de um portfólio simples feito utilizando o Bootstrap"
                    repo="https://github.com/edwardribas/smart-toys"
                    preview="https://edwardribas.github.io/smart-toys"
                    technologies={['HTML', 'CSS', 'Bootstrap']}
                />
                <ProjectItem
                    image={MyCalculator}
                    name="Calculadora"
                    description="Calculadora simples feita para praticar JavaScript."
                    repo="https://github.com/edwardribas/calculator"
                    preview="https://edwardribas.github.io/calculator/"
                    technologies={['HTML', 'CSS', 'Bootstrap', 'JavaScript']}
                />
                <ProjectItem
                    image={RepoFinder}
                    name="Repo Finder"
                    description="Aplicação assíncrona que consome a API do Github para retornar dados de usuários."
                    repo="https://github.com/edwardribas/repo-finder"
                    preview="https://edwardribas.github.io/repo-finder/"
                    technologies={['HTML', 'CSS','JavaScript']}
                />
            </section>
        </Container>
    )
}