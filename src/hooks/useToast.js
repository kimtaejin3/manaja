import { useState } from "react";

function useToast() {
  const [isOpen, setIsOpen] = useState(false);

  const openToast = () => {
    setIsOpen(true);
  };

  const closeToast = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openToast,
    closeToast,
  };
}

export default useToast;
