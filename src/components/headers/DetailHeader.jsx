import styles from "./DetailHeader.module.scss";
import hamburgerIcon from "../../assets/hamburger.svg";
import shareIcon from "../../assets/share.svg";

export default function DetailHeader({ name }) {
  return (
    <header className={styles.container}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
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
