import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
    const [headerStyle, setHeaderStyle] = useState(false);

    const toggleHeaderStyle = () => {
        const scrolled = window.scrollY;
        if (scrolled > 300) {
            setHeaderStyle(true);
        } else {
            setHeaderStyle(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleHeaderStyle);
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.hearer__container}>
                <a
                    className={
                        headerStyle
                            ? styles.header__logo_small
                            : styles.header__logo
                    }
                    href="/"
                >
                    Nepochatov [dev]
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
        </div>
    );
}

export default Header;
