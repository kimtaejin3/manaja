import SidebarWrap from "../shared/SidebarWrap";

import styles from "./MainHeader.module.scss";

export default function MainHeader() {
  return (
    <header className={styles.container}>
      <div>
        <h1>MANAJA</h1>
        <p className={styles.subText}>회의 시간 후딱 정하기</p>
      </div>
      <SidebarWrap />
    </header>
  );
}
