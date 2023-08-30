import styles from "./Nav.module.scss";

export default function NavButton({ withCaption, route }) {
  return (
    <li className={styles["nav__list-item"]}>
      <button className={styles["nav__list-item--btn"]}>
        <span className={styles["nav__list-item--btn__icon"]}>
          <svg>
            <image xlinkHref={route.icon} />
          </svg>
        </span>
        {withCaption ? (
          <span className={styles["nav__list-item--btn__label"]}>
            {route.label}
          </span>
        ) : (
          ""
        )}
      </button>
    </li>
  );
}
