import styles from "./MainHeader.module.scss";
import hamburgerIcon from "../../assets/hamburger.svg";
import { useState } from "react";
import Sidebar from "../sidebar";

export default function MainHeader() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpened(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpened(false);
  };

  return (
    <header className={styles.container}>
      <div>
        <h1>MANAJA</h1>
        <p className={styles.subText}>회의 시간 후딱 정하기</p>
      </div>
      <button className={styles.hamburgerButton} onClick={openSidebar}>
        <img src={hamburgerIcon} alt="hamburger_icon" />
      </button>
      {isSidebarOpened && <Sidebar onClose={closeSidebar} />}
    </header>
  );
}
