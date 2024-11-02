import styles from "./DetailHeader.module.scss";
import hamburgerIcon from "../../assets/hamburger.svg";
import shareIcon from "../../assets/share.svg";

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
        <button>
          <img src={hamburgerIcon} alt="hamburger_icon" />
        </button>
      </div>
    </header>
  );
}
