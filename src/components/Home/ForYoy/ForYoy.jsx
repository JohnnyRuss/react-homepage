import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./forYou.module.scss";

import Strada_Image from "assets/images/strada.jpg";
import Lolita_Image from "assets/images/lolita.jpg";
import Gardenia_Image from "assets/images/gardenia.jpg";
import Bar_Image from "assets/images/bar.jpg";
import Restaurant_1_Image from "assets/images/restaurant-0.jpg";
import Restaurant_2_Image from "assets/images/restaurant-1.jpg";
import Restaurant_3_Image from "assets/images/restaurant-2.jpg";

export default function ForYoy() {
  return (
    <div className={styles["for-you__container"]}>
      <div className={styles["for-you"]}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          speed={1000}
          initialSlide={0}
          loop={true}
          loopPreventsSliding={true}
          modules={[Autoplay]}
          centeredSlides={true}
          className={styles["for-you__swiper"]}
          breakpoints={{
            280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 4.1,
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
              className={styles["for-you__swiper-slide"]}
              key={`for-you__slide__${i}`}
            >
              <figure>
                <img src={item} alt="" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <span className={styles["for-you__label"]}>თქვენთვის</span>
      </div>
    </div>
  );
}
