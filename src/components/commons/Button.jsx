import styles from "./Button.module.scss";

export default function Button({ children, sx }) {
  return (
    <button style={sx} className={styles.container}>
      {children}
    </button>
  );
}
