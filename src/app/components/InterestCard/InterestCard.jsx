import React from 'react';
import styles from './InterestCard.module.css';

const InterestCard = ({ imgUrl, title, description }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
      </div>
      
    </div>
  );
};

export default InterestCard;
