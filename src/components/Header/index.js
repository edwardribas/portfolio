import { faBarsStaggered, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header(){
    const [headerState, setHeaderState] = useState(false);

    // Theme toggler is pending //
    // const icon = document.querySelector("#toggler");
    // const localTheme = localStorage.getItem('theme');
    // const setItem = value => localStorage.setItem('theme', value);
    // const toggleClass = n => icon.classList = `fa-solid ${n}`;
    // const changeTheme = bool => {
    //     document.body.classList.toggle('dark', bool);
    //     setItem(bool ? 'dark' : 'light');
    //     toggleClass(bool ? 'fa-sun' : 'fa-moon')
    // }
    // if (!localTheme || localTheme == 'light') changeTheme(0)
    // else changeTheme(1);
    // icon.onclick = () => changeTheme(!document.body.classList.contains("dark"));


    return (<>
        <header>
            <nav className={headerState ? styles.active : undefined}>
                <span id={styles.logo}>Edward</span>

                <ul>
                    <li onClick={() => setHeaderState(false)}>
                        <NavLink to="/" className={({isActive}) => isActive ? styles.active : undefined}>
                            Início
                        </NavLink>
                    </li>
                    <li onClick={() => setHeaderState(false)}>
                        <NavLink to="/about" className={({isActive}) => isActive ? styles.active : undefined}>
                            Sobre
                        </NavLink>
                    </li>
                    <li onClick={() => setHeaderState(false)}>
                        <NavLink to="/projects" className={({isActive}) => isActive ? styles.active : undefined}> 
                            Projetos 
                        </NavLink>
                    </li>
                </ul>

                <div>
                    <a 
                        href="https://api.whatsapp.com/send?phone=5511972329897" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        contato
                        </a>
                    
                    <span className={styles.toggler}>
                        <FontAwesomeIcon icon={ faSun }/>
                    </span>

                    <span className={styles.burger} onClick={() => setHeaderState(!headerState)}>
                        <FontAwesomeIcon icon={ faBarsStaggered }/>
                    </span>

                </div>
            </nav>
        </header>
        <div 
            id={styles.back}
            className={headerState ? styles.active : undefined}
            onClick={() => setHeaderState(false)}
        ></div>
    </>)
}