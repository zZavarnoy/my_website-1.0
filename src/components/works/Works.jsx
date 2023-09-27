import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import work1 from "../../img/work1.webp";
import work2 from "../../img/work2.webp";
import work3 from "../../img/work3.webp";
import work4 from "../../img/work4.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Works.module.css";

function Works() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <div className={styles.works} id="works">
            <h1>Here is my works</h1>
            <Swiper
                className={styles.works__swiper}
                spaceBetween={50}
                slidesPerView={1}
                speed={1500}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                navigation={true}
                lazy="true"
                pagination={pagination}
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img
                        src={work1}
                        alt="work1"
                        loading="lazy"
                        className={styles.works__img}
                    ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={work2}
                        alt="work2"
                        loading="lazy"
                        className={styles.works__img}
                    ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={work3}
                        alt="work3"
                        loading="lazy"
                        className={styles.works__img}
                    ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={work4}
                        alt="work4"
                        loading="lazy"
                        className={styles.works__img}
                    ></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Works;
