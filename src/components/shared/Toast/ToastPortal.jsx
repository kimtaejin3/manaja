import { createPortal } from "react-dom";

function ToastPortal({ children }) {
  return (
    <div>{createPortal(children, document.getElementById("toast-root"))}</div>
  );
}

export default ToastPortal;
