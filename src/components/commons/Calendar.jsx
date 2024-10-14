import styles from "./Calendar.module.scss";

export default function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>{"<"}</button>
        <span>10월</span>
        <button>{">"}</button>
      </div>
      <div></div>
    </div>
  );
}
