import { useState } from "react";

function useToast() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openToast = (message) => {
    setIsOpen(true);
    setMessage(message);
  };

  const closeToast = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    message,
    openToast,
    closeToast,
  };
}

export default useToast;
