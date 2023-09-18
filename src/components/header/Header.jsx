import styles from "./Header.module.css";
import logo from "../../img/logo.png";

function Header() {
    return (
        <div className={styles.header}>
            <a className={styles.header__logo} href="/">
                <img src={logo} className={styles.logo} alt="logo" />
            </a>
            <nav className={styles.header__menu}>
                <a className={styles.menu__item} href="#about">
                    About
                </a>
                <a className={styles.menu__item} href="#works">
                    My Works
                </a>
                <a className={styles.menu__item} href="#services">
                    Services
                </a>
                <a className={styles.menu__item} href="#contacts">
                    Contacts
                </a>
            </nav>
        </div>
    );
}

export default Header;
