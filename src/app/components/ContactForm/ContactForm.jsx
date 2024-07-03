"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/sendEmail';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <h5 className={styles.title}>Let's Connect</h5>
        <p className={styles.paragraph}>
          I'm currently looking for new opportunities. You can contact me for further information.
          I'll get back to you asap.
        </p>
        {/* <div className={styles.socials}>
          <Link href="https://github.com/MVCorreas">
           
              <Image src="/github-icon.svg" alt="Github Icon" width={60} height={60} />
           
          </Link>
          <Link href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/">
           
              <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={60} height={60} />
           
          </Link>
        </div> */}
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className={styles.inputField}
              placeholder="email@google.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className={styles.inputField}
              placeholder="Just saying hi"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className={styles.inputField}
              placeholder="Let's talk about..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {emailSubmitted && (
          <p className={styles.successMessage}>Thank you for contacting me!</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
