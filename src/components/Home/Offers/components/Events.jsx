import styles from "./styles/events.module.scss";

export default function Events({ imgSrc }) {
  return (
    <div
      className={styles.events}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <span className={styles.label_btn}>ივენთები</span>
    </div>
  );
}
