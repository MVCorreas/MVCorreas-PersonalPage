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
    <section className={styles.section}>
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
