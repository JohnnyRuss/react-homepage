import styles from "./styles/offers.module.scss";

export default function Offers({ imgSrc }) {
  return (
    <div
      className={styles.offers}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <span className={styles.label_btn}>შეთავაზებები</span>
    </div>
  );
}
