import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggler } from "../ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
  const [headerState, setHeaderState] = useState(false);
  const [pageScrolled, setPageScrolled] = useState(false);

  const handleLinkClick = () => {
    setHeaderState(false);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.onscroll = () =>
      window.scrollY > 20 ? setPageScrolled(true) : setPageScrolled(false);
  }, []);

  return (
    <>
      <header className={pageScrolled ? styles.scrolled : undefined}>
        <nav className={headerState ? styles.active : undefined}>
          <span id={styles.logo}>Edward</span>

          <ul>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Início
              </NavLink>
            </li>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Sobre
              </NavLink>
            </li>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
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
              <ThemeToggler />
            </span>

            <span
              className={styles.burger}
              onClick={() => setHeaderState(!headerState)}
            >
              <FontAwesomeIcon icon={faBarsStaggered} />
            </span>
          </div>
        </nav>
      </header>
      <div
        id={styles.back}
        className={headerState ? styles.active : undefined}
        onClick={() => setHeaderState(false)}
      ></div>
    </>
  );
}
