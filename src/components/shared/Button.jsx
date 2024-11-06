import styles from "./Button.module.scss";

export default function Button({ children, className }) {
  return (
    <button className={`${styles.container} ${className}`}>{children}</button>
  );
}
