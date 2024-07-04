"use client"
import React from 'react';
import InterestCard from '../InterestCard/InterestCard';
import styles from './Interests.module.css';
import { useRouter } from 'next/navigation'; 
import Button from '../Button/Button';

const interests = [
  {
    id: 1,
    title: 'Programming',
    description: 'My passion for web development exceeds boundaries. From the moment I crossed paths with web development, I have striven to transmit meaning and passion through every pixel and every byte.',
    image: '/AboutImage.jpg'
  },
  {
    id: 2,
    title: 'Family',
    description: 'Nothing makes me happier than spending time with my family. Chats, meals, asados and mates feed my soul.',
    image: '/AboutImage.jpg'
  },
  {
    id: 3,
    title: 'Learning',
    description: 'I have always been utterly curious and willing to learn. No matter the discipline, every topic receives my undivided attention.',
    image: '/AboutImage.jpg'
  },
  {
    id: 4,
    title: 'Nature',
    description: 'I deeply love to pause my hectic life for a minute, and observe. I find peace and harmony in the warmth of the day, watch the leaves musically dance to the wind, and allow myself to drift into silence.  ',
    image: '/AboutImage.jpg'
  }
];

const InterestsSection = () => {
  const router = useRouter(); 

  const handleFindOutMore = () => {
    router.push('/interests'); 
  };

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
      <div>
        <Button onClick={handleFindOutMore}>FIND OUT MORE</Button>
      </div>
    </section>
  );
};

export default InterestsSection;
