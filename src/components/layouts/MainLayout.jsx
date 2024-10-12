import styles from "./MainLayout.module.scss";

export default function MainLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
