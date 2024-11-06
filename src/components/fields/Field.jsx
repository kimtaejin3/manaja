import styles from "./Field.module.scss";

export default function Field({ title, className, children }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label>{title}</label>
      {children}
    </div>
  );
}
