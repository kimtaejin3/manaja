import ToastPortal from "./ToastPortal";
import styles from "./Toast.module.scss";

function Toast({ isOpen, onClose, children }) {
  if (!isOpen) {
    return <></>;
  }

  return (
    <ToastPortal>
      <div className={styles.container}>
        <div className={styles["wrap-header"]}>
          <CloseButton className={styles.closeButton} onClose={onClose} />
        </div>
        <div className={styles["wrap-contents"]}>
          <WarningIcon className={styles["ico-warning"]} />
          <p>{children}</p>
        </div>
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

function CloseButton({ onClose, className }) {
  return (
    <button className={className} onClick={onClose}>
      <svg
        height="13"
        id="close"
        viewBox="0 0 32 32"
        width="13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z" />
      </svg>
    </button>
  );
}

export default Toast;
