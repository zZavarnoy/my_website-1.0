import styles from "./About.module.css";
import my_photo from "../../img/my_photo.webp";

function About({ theme }) {
    return (
        <div className={styles.about} id="about">
            <div className={styles.about__main_info}>
                <div className={styles.about__img_box}>
                    <img
                        src={my_photo}
                        className={styles.about__photo}
                        alt="Michael Nepochatov"
                    />
                </div>
                <div className={styles.about__title}>
                    <p className={styles.about__primary_title}>
                        Hello, I'm{" "}
                        <span className={styles.highlight_text}>Michael</span>,
                        a passionate front-end developer with a creative flair
                        and a love for crafting engaging and user-friendly web
                        experiences. With{" "}
                        <span className={styles.highlight_text}>4</span> years
                        of experience in the ever-evolving world of{" "}
                        <span className={styles.highlight_text}>
                            web development
                        </span>
                        , I have honed my skills in turning design concepts into
                        seamless, responsive, and visually stunning websites.
                    </p>
                    <p className={styles.about__subtitle}>
                        My toolkit includes proficiency in{" "}
                        <span className={styles.highlight_text}>HTML</span>,{" "}
                        <span className={styles.highlight_text}>CSS</span>, and{" "}
                        <span className={styles.highlight_text}>
                            JavaScript
                        </span>
                        , and I'm constantly exploring the latest front-end
                        technologies and trends to stay ahead of the curve.{" "}
                        <span className={styles.highlight_text}>
                            I thrive on collaborating
                        </span>{" "}
                        with designers and back-end developers to bring ideas to
                        life, ensuring that the final product not only looks
                        exceptional but also functions flawlessly across various
                        devices and browsers.
                    </p>
                </div>
            </div>

            <div className={styles.about__advantages}>
                <div
                    className={
                        theme
                            ? styles.advantages__item_dark
                            : styles.advantages__item
                    }
                >
                    <span className={styles.advantages__highlight}>4+</span>
                    <br />
                    years of web development
                </div>
                <div
                    className={
                        theme
                            ? styles.advantages__item_dark
                            : styles.advantages__item
                    }
                >
                    <span className={styles.advantages__highlight}>30+</span>
                    <br />
                    satisfied customers from all over the world
                </div>
                <div
                    className={
                        theme
                            ? styles.advantages__item_dark
                            : styles.advantages__item
                    }
                >
                    <span className={styles.advantages__highlight}>50+</span>
                    <br />
                    unique designs and projects
                </div>
            </div>
        </div>
    );
}

export default About;
