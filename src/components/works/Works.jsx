import ImageGallery from "react-image-gallery";
import work1 from "../../img/work1.png";
import work3 from "../../img/work3.png";
import work4 from "../../img/work4.png";
import work5 from "../../img/work5.png";
import "./gallary.css";
import styles from "./Works.module.css";

const images = [
    {
        original: work1,
        thumbnail: work1,
        originalClass: styles.img_width,
        loading: "lazy",
    },
    {
        original: work3,
        thumbnail: work3,
        originalClass: styles.img_width,
        loading: "lazy",
    },
    {
        original: work4,
        thumbnail: work4,
        originalClass: styles.img_width,
        loading: "lazy",
    },
    {
        original: work5,
        thumbnail: work5,
        originalClass: styles.img_width,
        loading: "lazy",
    },
];

function Works() {
    return (
        <div className={styles.works} id="works">
            <h1>Here is my works</h1>
            <div className={styles.works__gallery}>
                <ImageGallery
                    items={images}
                    lazyLoad={true}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={true}
                    slideDuration={2000}
                    slideInterval={5000}
                />
            </div>
        </div>
    );
}

export default Works;
