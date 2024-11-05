import styles from "./DetailHeader.module.scss";
import shareIcon from "../../assets/share.svg";
import SidebarWrap from "../shared/SidebarWrap";

export default function DetailHeader({ title }) {
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
