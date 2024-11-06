import SidebarWrap from "../shared/SidebarWrap";

import styles from "./MeetingHeader.module.scss";

import shareIcon from "../../assets/share.svg";

export default function MeetingHeader({ title }) {
  return (
    <header className={styles.container}>
      <div>
        <h1>{title}</h1>
      </div>
      <div className={styles.buttonsWrap}>
        <button>
          <img src={shareIcon} alt="share_icon" />
        </button>
        <SidebarWrap />
      </div>
    </header>
  );
}
