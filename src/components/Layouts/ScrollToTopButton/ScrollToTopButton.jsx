import styles from "./scrollToTopButton.module.scss";

export default function ScrollToTopButton() {
  const onScrollTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div className={styles["scroll-top__btn-box"]}>
      <button onClick={onScrollTop}>
        <svg
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 58C45.2401 58 58 45.2401 58 29.5C58 13.7599 45.2401 1 29.5 1C13.7599 1 1 13.7599 1 29.5C1 45.2401 13.7599 58 29.5 58Z"
            stroke="#F7E6C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.9993 27.1235L29.4993 17.6235L38.9993 27.1235"
            stroke="#F7E6C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.5 41.3735V17.6235"
            stroke="#F7E6C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
