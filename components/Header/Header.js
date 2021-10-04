import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={styles.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  );
}
