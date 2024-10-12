import styles from "./MainHeader.module.scss";
import hamburgerIcon from "../../assets/hamburger.svg";

export default function MainHeader() {
  return (
    <header className={styles.container}>
      <div>
        <h1>MANAJA</h1>
        <p>퇴근 시간 후딱 정하기</p>
      </div>
      <button>
        <img src={hamburgerIcon} alt="hamburger_icon" />
      </button>
    </header>
  );
}
