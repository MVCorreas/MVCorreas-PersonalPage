import React from 'react';
import InterestCard from '../InterestCard/InterestCard';
import styles from './Interests.module.css'; 

const interests = [
  {
    id: 1,
    title: 'Programming',
    description: 'Lorem ipsum',
    image: '/AboutImage.jpg'
  },
  {
    id: 2,
    title: 'Family',
    description: 'Lorem ipsum',
    image: '/AboutImage.jpg'
  },
  {
    id: 3,
    title: 'Learning',
    description: 'Lorem ipsum',
    image: '/AboutImage.jpg'
  },
  {
    id: 4,
    title: 'Nature',
    description: 'Lorem ipsum',
    image: '/AboutImage.jpg'
  }
];

const InterestsSection = () => {
  return (
    <section className={styles.section} id='interests'>
      <div className={styles.titleContainer}>
        <h2 className={styles.interestTitle}>Passions and Hobbies</h2>
        <p className={styles.interestDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus impedit aliquid, quaerat, accusantium cumque reprehenderit a, consectetur tempora animi soluta doloremque placeat incidunt atque unde dignissimos mollitia ullam ipsum.</p>
      </div>
      <div className={styles.grid}>
        {interests.map((interest) => (
          <InterestCard
            key={interest.id}
            imgUrl={interest.image}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
