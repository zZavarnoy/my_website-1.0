import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__info}>
                    <div className={styles.footer__info__text}>
                        When you visit or interact with this site, it may use
                        cookies to store information to help you experience the
                        site better, faster and more securely, and for marketing
                        purposes.
                    </div>
                    <div className={styles.footer__info__text}>
                        The site owner grants individuals/legal entities
                        permission to publish or retransmit the content
                        presented on this site, subject to mention (link to the
                        original page and text/verbal description). The
                        provision does not apply to individuals/legal entities
                        using the content for financial gain.
                    </div>
                </div>
                <div className={styles.footer__contacts}>
                    <p className={styles.footer__contacts__text}>
                        Contact with me:
                    </p>
                    <a
                        href="tel:+380680908367"
                        className={styles.footer__contacts__item}
                    >
                        <FaPhoneSquareAlt />
                    </a>
                    <a
                        href="mailto:nepochatov.mikhail@gmail.com"
                        className={styles.footer__contacts__item}
                    >
                        <HiOutlineMail />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mikhail-nepochatov-6b00b523a/"
                        className={styles.footer__contacts__item}
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
