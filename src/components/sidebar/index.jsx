import { Link } from "react-router-dom";

import styles from "./Sidebar.module.scss";

import closeIcon from "../../assets/close.svg";

export default function Sidebar({ onClose, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <CloseButton onClose={onClose} className={styles.closeButton} />
      <ul>
        <li>
          <button>새로 만들기</button>
        </li>
        <li>
          <Link to="/">도움말</Link>
        </li>
        <li>
          <Link to="/">로그인</Link>
          <p>
            로그인 하시면 편리한 기능을 이용할 수 있어요! 도움말을 참고해주세요.
          </p>
        </li>
      </ul>
    </div>
  );
}

function CloseButton({ className, onClose }) {
  return (
    <button className={className} onClick={onClose}>
      <img src={closeIcon} alt="사이드바 닫기 버튼" />
    </button>
  );
}
