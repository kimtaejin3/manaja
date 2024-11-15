import styles from "./MeetingHeader.module.scss";

import shareIcon from "../../assets/share.svg";
import SidebarWrap from "../shared/SidebarWrap";

export default function MeetingHeader({ title }) {
  return (
    <header className={styles.container}>
      <div>
        <h1>{title}</h1>
      </div>
      {/* todo: buttonsWrap 클래스명 수정하기 */}
      <div className={styles.buttonsWrap}>
        <button>
          <img src={shareIcon} alt="share_icon" />
        </button>
        <SidebarWrap />
      </div>
    </header>
  );
}
