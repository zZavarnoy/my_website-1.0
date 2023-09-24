import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";

function Header() {
    const [headerStyle, setHeaderStyle] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const isDesctop = useMediaQuery({ minWidth: 1025 });

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

    const toggleMenu = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
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
                {isDesctop ? (
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
                ) : (
                    isActive && (
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
                    )
                )}

                <div
                    className={
                        isActive ? styles.menu__btn_active : styles.menu__btn
                    }
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Header;
