import styles from "./DetailHeader.module.scss";
import hamburgerIcon from "../../assets/hamburger.svg";

export default function DetailHeader({ name }) {
  return (
    <header className={styles.container}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <button>공유</button>
        <button>
          <img src={hamburgerIcon} alt="hamburger_icon" />
        </button>
      </div>
    </header>
  );
}
