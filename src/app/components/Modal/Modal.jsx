import React from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <p className={styles.modalMessage}>{message}</p>
        <Button className={styles.modalButton} onClick={onClose}>
          CLOSE
        </Button>
      </div>
    </div>
  );
};

export default Modal;
