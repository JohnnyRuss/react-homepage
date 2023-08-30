import styles from "./searchBar.module.scss";

import SearchSVG from "assets/icons/search.svg";
import FilterSVG from "assets/icons/filter.svg";

export default function SearchBar() {
  return (
    <div className={styles["search-bar__wrapper"]}>
      <div className={styles["search-bar__container"]}>
        <div className={styles["search-bar"]}>
          <svg>
            <image xlinkHref={SearchSVG} />
          </svg>

          <input type="text" placeholder="მოძებნე სასურველი რესტორანი" />

          <svg>
            <image xlinkHref={FilterSVG} />
          </svg>
        </div>
      </div>
    </div>
  );
}
