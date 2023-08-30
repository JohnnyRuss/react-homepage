import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./styles/availableNow.module.scss";

import Strada_Image from "assets/images/strada.jpg";
import Lolita_Image from "assets/images/lolita.jpg";
import Gardenia_Image from "assets/images/gardenia.jpg";
import Bar_Image from "assets/images/bar.jpg";
import Restaurant_1_Image from "assets/images/restaurant-0.jpg";
import Restaurant_2_Image from "assets/images/restaurant-1.jpg";
import Restaurant_3_Image from "assets/images/restaurant-2.jpg";

export default function AvailableNow() {
  return (
    <div className={styles["available-now__container"]}>
      <div className={styles["available-now"]}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          speed={1000}
          initialSlide={0}
          loop={true}
          modules={[Autoplay]}
          className={styles["available-now__swiper"]}
          breakpoints={{
            280: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            500: {
              slidesPerView: 3.1,
              spaceBetween: 20,
            },
          }}
        >
          {[
            Restaurant_1_Image,
            Restaurant_2_Image,
            Restaurant_3_Image,
            Bar_Image,
            Gardenia_Image,
            Lolita_Image,
            Strada_Image,
          ].map((item, i) => (
            <SwiperSlide
              className={styles["available-now__swiper-slide"]}
              key={`available__slide__${i}`}
            >
              <figure>
                <img src={item} alt="" />
              </figure>
              <span>ABC</span>
            </SwiperSlide>
          ))}
        </Swiper>

        <span className={styles.label}>ახლა ხელმისაწვდომია</span>
      </div>
    </div>
  );
}
