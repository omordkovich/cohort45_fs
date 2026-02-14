import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}
