"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import styles from "./Modal.module.scss";
import { useActions } from "@/hooks/useActions";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalReducer = useAppSelector((state) => state.modalReducer);
  const { toggleModal } = useActions();

  return (
    <>
      {modalReducer.isActive ? (
        <div className={styles.modal} onClick={() => toggleModal(false)}>
          <div className={styles.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <div className={styles.body}>{children}</div>
            <div className={styles.buttonCnt}>
              <button className={styles.button} onClick={() => toggleModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
