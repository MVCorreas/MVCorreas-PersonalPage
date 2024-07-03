import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
