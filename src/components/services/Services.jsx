import styles from "./Services.module.css";
import { AiOutlineTeam } from "react-icons/ai";
import { TbHandFinger } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";

function Services() {
    return (
        <div className={styles.services} id="services">
            <div className={styles.services__title}>
                <div className={styles.title__items}>
                    <AiOutlineTeam className={styles.item__icon} />
                    <p>Experienced Team</p>
                </div>
                <div className={styles.title__items}>
                    <TbHandFinger className={styles.item__icon} />
                    <p>Responsive Design</p>
                </div>
                <div className={styles.title__items}>
                    <AiOutlineUser className={styles.item__icon} />
                    <p>User-Centric Approach</p>
                </div>
                <div className={styles.title__items}>
                    <MdSpeed className={styles.item__icon} />
                    <p>User-Centric Approach</p>
                </div>
            </div>
            <div className={styles.services__price}>
                <div className={styles.price__item}>
                    <span className={styles.price__highlight}>
                        Сonsultation
                    </span>
                    <p>
                        consultation on creating a website or application with a
                        development roadmap
                    </p>
                    <span className={styles.price__highlight}>Free</span>
                </div>
                <div className={styles.price__item}>
                    <span className={styles.price__highlight}>
                        Design Creation
                    </span>
                    <p>Сreating a unique design tailored to your preferences</p>
                    <span className={styles.price__highlight}>$100</span>
                </div>
                <div className={styles.price__item}>
                    <span className={styles.price__highlight}>
                        Website Сreation
                    </span>
                    <p>
                        Full site creation from design to installation on
                        hosting
                    </p>
                    <span className={styles.price__highlight}>$300</span>
                </div>
            </div>
        </div>
    );
}

export default Services;
