import styles from "./footer.module.scss";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div>
        <span>EasyDineco</span>
        &nbsp; &copy; &nbsp; 2023
      </div>
    </footer>
  );
}
