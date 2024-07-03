"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    // Validate subject length
    if (subject.length > 50) {
      setSubjectError('Subject should not exceed 50 characters.');
      return;
    } else {
      setSubjectError('');
    }

    // Validate message length
    if (message.length > 500) {
      setMessageError('Message should not exceed 500 characters.');
      return;
    } else {
      setMessageError('');
    }

    // If all validations pass, proceed with form submission
    setShowThanksMessage(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <h5 className={styles.title}>Let's Connect</h5>
        <p className={styles.paragraph}>
          I'm currently looking for new opportunities. You can contact me for further information.
          I'll get back to you asap.
        </p>
      </div>
     
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
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-500 text-sm mt-2">
              Thank you for contacting me!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
