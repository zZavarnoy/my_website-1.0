import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";
import styles from "./ButtonScrollToTop.module.css";

function ButtonScrollToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className={styles.up_button}
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
        >
            <AiOutlineArrowUp />
        </button>
    );
}

export default ButtonScrollToTop;
