import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import SliderBg_Image from "assets/images/slider_bg.png";
import styles from "./styles/restaurantsSlider.module.scss";

import Strada_Image from "assets/images/strada.jpg";
import Lolita_Image from "assets/images/lolita.jpg";
import Gardenia_Image from "assets/images/gardenia.jpg";
import Bar_Image from "assets/images/bar.jpg";

export default function RestaurantsSlider() {
  return (
    <div
      className={styles["restaurants-slider__container"]}
      style={{
        backgroundImage: `url(${SliderBg_Image})`,
      }}
    >
      <div className={styles["restaurants-slider"]}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          speed={1000}
          initialSlide={0}
          loop={true}
          modules={[Autoplay]}
          className={styles["restaurants-slider__swiper"]}
          breakpoints={{
            280: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
          }}
        >
          {[Strada_Image, Lolita_Image, Bar_Image, Gardenia_Image].map(
            (item, i) => (
              <SwiperSlide
                className={styles["restaurants-slider__swiper-slide"]}
                key={`restaurants__slide__${i}`}
              >
                <figure>
                  <img src={item} alt="" />
                </figure>
                <span>Name</span>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
}
