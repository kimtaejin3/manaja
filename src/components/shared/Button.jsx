import styles from "./Button.module.scss";

export default function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.container} ${className}`}>
      {children}
    </button>
  );
}
