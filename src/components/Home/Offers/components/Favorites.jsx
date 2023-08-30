import { useState } from "react";

import Bar_Image from "assets/images/bar.jpg";
import styles from "./styles/favorites.module.scss";

export default function Favorites() {
  const [dateRange, setDateRange] = useState("week");

  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__header}>
        <span className={styles["favorites__header-title"]}>ხალხის რჩეული</span>

        <div
          className={`${styles["favorites__header-switcher--box"]} ${
            dateRange === "week"
              ? styles.week
              : dateRange === "month"
              ? styles.month
              : ""
          }`}
        >
          <button onClick={() => setDateRange("week")}>კვირის</button>
          <button onClick={() => setDateRange("month")}>თვის</button>
        </div>
      </div>

      <div className={styles["favorites__content-box"]}>
        <div className={styles["favorites__content"]}>
          <figure>
            <img src={Bar_Image} alt="" />
            <span>ღუმელი</span>
          </figure>
        </div>
      </div>
    </div>
  );
}
