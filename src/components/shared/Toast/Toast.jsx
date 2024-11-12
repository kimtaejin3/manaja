import ToastPortal from "./ToastPortal";
import styles from "./Toast.module.scss";

function Toast({ isOpen, onClose, children }) {
  if (!isOpen) {
    return <></>;
  }

  return (
    <ToastPortal>
      <div className={styles.container}>
        <button onClick={onClose}>x</button>
        <WarningIcon className={styles["ico-warning"]} />
        <p>{children}</p>
      </div>
    </ToastPortal>
  );
}

function WarningIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
      </g>
    </svg>
  );
}

export default Toast;
