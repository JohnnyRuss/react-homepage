/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import styles from "./recentlyViewed.module.scss";

import Strada_Image from "assets/images/strada.jpg";
import Lolita_Image from "assets/images/lolita.jpg";
import Gardenia_Image from "assets/images/gardenia.jpg";
import Bar_Image from "assets/images/bar.jpg";
import Restaurant_1_Image from "assets/images/restaurant-0.jpg";
import Restaurant_2_Image from "assets/images/restaurant-1.jpg";
import Restaurant_3_Image from "assets/images/restaurant-2.jpg";

const images = [
  Strada_Image,
  Lolita_Image,
  Gardenia_Image,
  Bar_Image,
  Restaurant_1_Image,
  Restaurant_2_Image,
  Restaurant_3_Image,
];

let startIndex = 0;

export default function RecentlyViewed() {
  const [sliderMedia, setSliderMedia] = useState([]);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      let newSlider;

      if (startIndex >= images.length) {
        startIndex = 0;
        newSlider = getSliderMedia(images, 0);
      } else {
        startIndex += 1;
        newSlider = getSliderMedia(images, startIndex);
      }

      setSliderMedia(newSlider);
    }, 5000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div className={styles["recently-viewed"]}>
      <span className={styles["recently-viewed__title"]}>უკვე ნანახი</span>

      <div className={styles["recently-viewed__slider"]}>
        {sliderMedia.map((item) => (
          <figure
            key={`recently-viewed__${item}`}
            className={styles["recently-viewed__slider-slide"]}
          >
            <img src={item} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
}

function getSliderMedia(arr, startIndex) {
  const length = arr.length;
  const endIndex = startIndex + 5;

  if (startIndex <= length) {
    if (endIndex <= length) {
      return arr.slice(startIndex, endIndex);
    } else {
      // Wrap around to the beginning of the array
      const firstPart = arr.slice(startIndex);
      const remainingCount = 5 - firstPart.length;
      const secondPart = arr.slice(0, remainingCount);
      return firstPart.concat(secondPart);
    }
  } else {
    // Invalid startIndex, return an empty array or handle it as needed
    return [];
  }
}
