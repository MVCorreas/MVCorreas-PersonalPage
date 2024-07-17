"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import useEaseIn from '../../hooks/useEaseIn';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [showThanksMessage, setShowThanksMessage] = useState(false);
 
  const sectionsRef = useEaseIn()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (subject.length > 50) {
      setSubjectError('Subject should not exceed 50 characters.');
      return;
    } else {
      setSubjectError('');
    }

    if (message.length > 500) {
      setMessageError('Message should not exceed 500 characters.');
      return;
    } else {
      setMessageError('');
    }

    setShowThanksMessage(true);
  };

  const closeModal = () => {
    setShowThanksMessage(false);

    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section ref={(el) => (sectionsRef.current[2] = el)} className={`hidden ${styles.section}`} id="contact">
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <Image 
            src="/Telephone.jpg" 
            alt="contactImage"
            width={500} 
            height={500}
            priority
            className={styles.contactImage}
          />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>Let&apos;s Connect</h5>
          <p className={styles.description}>
            I would love to hear your story! You can contact me and  I will get back to you asap.
          </p>
          <div className={styles.formContainer}>
            {!showThanksMessage ? (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                  <input
                    name="name"
                    type="name"
                    id="name"
                    required
                    placeholder="Type your name"
                    className={styles.inputField}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Your email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className={`${styles.inputField} ${emailError ? styles.inputError : ''}`}
                    placeholder="email@google.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {emailError && <p className={styles.errorText}>{emailError}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className={`${styles.inputField} ${subjectError ? styles.inputError : ''}`}
                    placeholder="Just saying hi"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {subjectError && <p className={styles.errorText}>{subjectError}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className={`${styles.inputField} ${messageError ? styles.inputError : ''}`}
                    placeholder="..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  {messageError && <p className={styles.errorText}>{messageError}</p>}
                </div>
                <Button 
                  type="submit" 
                  className={styles.submitButton}
                >
                  SEND MESSAGE
                </Button>
              </form>
            ) : (
              <Modal message="Thank you for contacting me!" onClose={closeModal} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
