"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState('');

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
    // Optionally, reset form fields here if needed
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <Image 
            src="/AboutImage.jpg" 
            alt="aboutImage"
            width={500} 
            height={500}
            className={styles.contactImage}
          />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>Let's Connect</h5>
          <p className={styles.description}>
            I'm currently looking for new opportunities. You can contact me for further information.
            I'll get back to you asap.
          </p>
          <div className={styles.formContainer}>
            {!showThanksMessage ? (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Your email</label>
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
                  <label htmlFor="subject">Subject</label>
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
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className={`${styles.inputField} ${messageError ? styles.inputError : ''}`}
                    placeholder="Let's talk about..."
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
                  Send Message
                </Button>
              </form>
            ) : (
              <div className={styles.modalContainer}>
                <div className={styles.modalContent}>
                  <p className={styles.modalMessage}>Thank you for contacting me!</p>
                  <Button className={styles.modalButton} onClick={closeModal}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
