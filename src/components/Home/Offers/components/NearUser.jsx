import styles from "./styles/nearUser.module.scss";

export default function NearUser({ data }) {
  return (
    <div className={styles.near__user__container}>
      <div className={styles.near__user}>
        {data.map((item) => (
          <div className={styles.near__user__item} key={item}>
            <figure>
              <img src={item} alt="" />
            </figure>
            <span className={styles.near__user__item_caption}>ABS</span>
          </div>
        ))}

        <span className={styles.near__user_devider}>თქვენთან ახლოს</span>
      </div>
    </div>
  );
}
