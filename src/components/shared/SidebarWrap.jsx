import { useState } from "react";

import Sidebar from "../Sidebar";

import styles from "./SidebarWrap.module.scss";

import hamburgerIcon from "../../assets/hamburger.svg";

export default function SidebarWrap() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpened(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpened(false);
  };

  return (
    <>
      <button className={styles.hamburgerButton} onClick={openSidebar}>
        <img src={hamburgerIcon} alt="hamburger_icon" />
      </button>
      {isSidebarOpened && (
        <Sidebar className={styles.sidebar} onClose={closeSidebar} />
      )}
    </>
  );
}
