import styles from "./styles/edcoinOffers.module.scss";

export default function EdCoin({ imgSrc }) {
  return (
    <div
      className={styles.ed__coin__offers}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <span className={styles.label_btn}>EdCoin შეთავაზებები</span>
    </div>
  );
}
