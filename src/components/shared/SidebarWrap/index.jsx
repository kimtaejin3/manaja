import { useState } from "react";

import Sidebar from "./Sidebar";

import styles from "./SidebarWrap.module.scss";

import hamburgerIcon from "../../../assets/hamburger.svg";

export default function SidebarWrap() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpened((prevState) => !prevState);
  };

  return (
    <>
      <button className={styles.hamburgerButton} onClick={toggleSidebar}>
        <img src={hamburgerIcon} alt="hamburger_icon" />
      </button>
      {isSidebarOpened && (
        <Sidebar className={styles.sidebar} onClose={toggleSidebar} />
      )}
    </>
  );
}
